# Taste Radar — CLAUDE.md

## 프로젝트 개요
블랙박스형 음악 추천을 탈피한 **유저 주도 음악 디깅/아카이빙 웹앱**.
Spotify API 기반으로 아티스트·트랙을 검색해 force-directed 그래프 캔버스에 추가하고,
장르 히트맵으로 취향 지형도를 시각화한다.

---

## 기술 스택

| 레이어 | 선택 | 이유 |
|--------|------|------|
| Frontend | React 18 + Vite | 빠른 HMR, 생태계 |
| 그래프 | D3 v7 (force-simulation) | 물리 시뮬레이션 필수 |
| 상태관리 | Zustand | 경량, 캔버스 상태에 최적 |
| 백엔드/Auth | Supabase | OAuth + DB, 서버리스 |
| 스타일 | Tailwind CSS | 유틸리티 클래스 |
| 라우팅 | React Router v6 | |
| HTTP | axios | Spotify API 호출 |

---

## 디렉토리 구조

```
taste-radar/
├── src/
│   ├── pages/
│   │   ├── Landing.jsx          # 시작화면
│   │   ├── Login.jsx            # 로그인 + 정보찾기
│   │   ├── Register.jsx         # 회원가입
│   │   ├── Tutorial.jsx         # 온보딩 튜토리얼
│   │   ├── Main.jsx             # 메인화면 (캔버스 + 사이드패널)
│   │   └── Profile.jsx          # 프로필/마이페이지
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── GraphCanvas.jsx  # D3 캔버스 루트
│   │   │   ├── ForceGraph.js    # force-simulation 로직
│   │   │   ├── HeatmapLayer.js  # 장르 히트맵 렌더링
│   │   │   └── NodeTooltip.jsx  # 호버 툴팁
│   │   ├── panel/
│   │   │   ├── SidePanel.jsx    # 슬라이딩 사이드패널 래퍼
│   │   │   ├── SearchTab.jsx    # Spotify 검색
│   │   │   └── ArchiveTab.jsx   # 내 리스트(아카이브)
│   │   └── ui/
│   │       ├── ModeToggle.jsx   # 추가/뷰 모드 전환
│   │       ├── HistoryControls.jsx # Undo/Redo 버튼
│   │       └── AudioPlayer.jsx  # 미리듣기 플레이어
│   ├── stores/
│   │   ├── useGraphStore.js     # 핵심 — 캔버스 상태
│   │   ├── useAudioStore.js     # 재생 상태
│   │   └── useAuthStore.js      # 인증 상태
│   ├── services/
│   │   ├── spotify.js           # Spotify API 래퍼
│   │   └── supabase.js          # Supabase 클라이언트
│   └── hooks/
│       ├── useHistory.js        # Undo/Redo 스택
│       └── useSpotifyAuth.js    # Spotify OAuth 플로우
├── .env                         # 환경변수 (아래 참고)
└── CLAUDE.md                    # 이 파일
```

---

## 핵심 데이터 스키마

### GraphStore 상태 (useGraphStore)
```js
{
  mode: 'add' | 'view',          // 현재 모드

  nodes: [
    {
      id: string,                // Spotify ID
      type: 'artist' | 'track',
      name: string,
      gids: string[],            // 장르 ID 배열 (다중 가능)
      imageUrl: string,
      previewUrl: string | null, // 30초 미리듣기 URL
      added: boolean,            // 유저가 캔버스에 추가했는지
      // D3 물리 속성 (런타임)
      x: number, y: number,
      vx: number, vy: number,
    }
  ],

  links: [
    { source: string, target: string }  // node id 쌍
  ],

  genres: [
    {
      id: string,        // 'g0', 'g1' ...
      name: string,      // 'Electronic', 'Jazz' ...
      color: string,     // hex
    }
  ],

  // 히스토리 스택
  history: {
    past: [],            // 이전 상태 스냅샷 배열
    future: [],          // Redo용
  },

  // 액션
  addNode: (node) => void,
  removeNode: (id) => void,
  undo: () => void,
  redo: () => void,
  setMode: (mode) => void,
}
```

### Supabase 테이블
```sql
-- 유저 캔버스 상태 저장
canvas_state (
  id uuid primary key,
  user_id uuid references auth.users,
  nodes jsonb,          -- GraphStore nodes 직렬화
  links jsonb,
  updated_at timestamptz
)

-- 유저 프로필
profiles (
  id uuid primary key references auth.users,
  nickname text,
  avatar_url text,
  spotify_access_token text,
  spotify_refresh_token text,
  spotify_connected_at timestamptz
)
```

---

## Spotify API 사용 패턴

### 인증 플로우
```
1. 프로필 페이지에서 [Spotify 연동] 클릭
2. /api/spotify/auth → Spotify OAuth URL 생성 (PKCE)
3. 콜백: /callback?code=... → 토큰 교환
4. access_token을 Supabase profiles에 저장
5. refresh_token으로 자동 갱신
```

### 주요 엔드포인트
```js
// 검색
GET /v1/search?q={query}&type=artist,track&limit=20

// 아티스트 장르 (트랙에는 없으므로 아티스트 통해 상속)
GET /v1/artists/{id}  → genres[]

// 연관 아티스트 (그래프 링크 생성용)
GET /v1/artists/{id}/related-artists

// 유저 Top 데이터 (초기 캔버스 구성)
GET /v1/me/top/tracks?limit=20
GET /v1/me/top/artists?limit=20

// 플레이리스트 Export
POST /v1/users/{user_id}/playlists
POST /v1/playlists/{playlist_id}/tracks
```

### 미리듣기 전략
- `preview_url` 필드 우선 사용
- null인 경우: Spotify Web Playback SDK fallback (Premium 필요)
- 둘 다 불가한 경우: 재생 버튼 비활성화 처리

---

## 장르 처리 규칙

Spotify는 장르를 **아티스트에만** 제공한다.

```js
// 트랙 노드의 gids는 부모 아티스트에서 상속
const trackNode = {
  ...spotifyTrack,
  gids: parentArtist.genres.map(g => genreNameToId(g)),
}

// 다중 장르 아티스트는 gids에 여러 개 포함
// → force simulation에서 각 장르 중심점으로 분산 인력 적용
```

---

## Force Simulation 설계 원칙

```js
// 핵심 힘 구성
simulation
  .force('genre-attract', genreAttractionForce)   // 같은 장르끼리 인력
  .force('link', d3.forceLink(links))              // related artist 연결
  .force('charge', d3.forceManyBody().strength(-300)) // 노드 간 척력
  .force('collide', d3.forceCollide(radius))       // 겹침 방지
  .force('boundary', boundaryForce(W, H))          // 화면 이탈 방지

// 다중 장르 노드: gids 각각의 중심점에 분산 인력
// → 자동으로 두 클러스터 경계에 안착
```

---

## 환경변수 (.env)

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_SPOTIFY_CLIENT_ID=
VITE_SPOTIFY_REDIRECT_URI=http://localhost:5173/callback
```

---

## 개발 순서 (권장)

```
Phase 1 — 뼈대 (Day 1-2)
  - Vite + React 세팅, 라우팅, Tailwind
  - Supabase Auth 연결, 로그인/회원가입 페이지

Phase 2 — 그래프 코어 (Day 3-5)
  - D3 force simulation + 히트맵 렌더링
  - GraphStore (Zustand) 연결
  - 모드 전환, 노드 호버/툴팁, Undo/Redo

Phase 3 — Spotify 연동 (Day 6-8)
  - Spotify OAuth (PKCE)
  - 검색 API + 사이드패널 SearchTab
  - 검색 결과 → 캔버스 노드 추가

Phase 4 — 사이드패널 완성 (Day 9-10)
  - ArchiveTab (내 리스트, 정렬/필터)
  - 미리듣기 오디오 플레이어
  - Spotify Export

Phase 5 — 나머지 (Day 11-13)
  - 프로필 페이지, Spotify 연동/해제
  - Top Tracks/Artists 초기 캔버스
  - 캔버스 스냅샷 저장

Phase 6 — 튜토리얼 + 마무리 (Day 14)
  - 온보딩 인터랙티브 튜토리얼
  - 에러 핸들링, 예외처리 전체 점검
```

---

## 클로드 코드 작업 규칙

1. **파일 하나 완성 후 커밋** — 기능 단위로 쪼개서 작업
2. **GraphStore를 먼저 물어볼 것** — 모든 캔버스 기능은 이 스토어에 종속
3. **Spotify API 호출은 services/spotify.js 통해서만** — 직접 fetch 금지
4. **D3는 useEffect 안에서만** — React 렌더 사이클과 충돌 방지
5. **타입 힌트 주석 유지** — JSDoc으로 노드/링크 타입 명시
```
