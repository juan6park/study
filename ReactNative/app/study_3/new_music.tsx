import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Tabbar from "./components/tabbar";
import { Extrapolation } from "react-native-reanimated";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#ffffff",
    width: "100%",
    maxWidth: 330,
    height: "90%",
    maxHeight: 800,
    alignItems: "flex-start",
    position: "relative",
    overflow: "hidden",
    borderRadius: 40,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  profile: {
    backgroundColor: "#99c0db",
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 15,
  },
  albumfull: {
    flexDirection: "column",
    paddingVertical: 10,
    marginRight: 10,
    marginTop: 3,
  },
  albumCard: {
    backgroundColor: "#e1e1e1",
    width: 280,
    height: 150,
    borderRadius: 20,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: 20,
    marginTop: 5,
  },
  albumArt: {
    width: 45,
    height: 45,
    backgroundColor: "#d1d1d1",
    borderRadius: 8,
  },
  musicColumn: {
    flexDirection: "column",
    marginRight: 10,
  },
  musicRow: {
    width: 280,
    flexDirection: "row",
    alignItems: "center",
  },
  playerTextContainer: {
    justifyContent: "center",
    flex: 1,
  },
  rowContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
    paddingVertical: 8,
    marginLeft: 15,
  },
  albumsmall: {
    backgroundColor: "#e1e1e1",
    width: 150,
    height: 150,
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: 20,
  },
});

const new_music = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ScrollView
          style={{ flex: 1, width: "100%" }}
          contentContainerStyle={{ paddingBottom: 180 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={{ fontSize: 35, fontWeight: "bold" }}>
              새로운 음악
            </Text>
            <View style={styles.profile}>
              <MaterialCommunityIcons
                name="account"
                size={30}
                color="#ffffff"
              />
            </View>
          </View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            <View style={styles.albumfull}>
              <Text
                style={{ color: "#6e6e6e", fontWeight: "400", fontSize: 12 }}
              >
                업데이트된 플레이리스트
              </Text>
              <Text
                style={{ color: "#000000", fontWeight: "600", fontSize: 17 }}
              >
                오늘의 히트곡
              </Text>
              <Text
                style={{ color: "#6e6e6e", fontWeight: "400", fontSize: 15 }}
              >
                Apple Music 히트곡
              </Text>
              <View style={[styles.albumCard, { backgroundColor: "#ff712a" }]}>
                <Text
                  style={{ color: "#ffffff", fontWeight: "bold", fontSize: 20 }}
                >
                  Today's Hits
                </Text>
              </View>
            </View>

            <View style={styles.albumfull}>
              <Text
                style={{ color: "#6e6e6e", fontWeight: "400", fontSize: 12 }}
              >
                업데이트된 플레이리스트
              </Text>
              <Text
                style={{ color: "#000000", fontWeight: "600", fontSize: 17 }}
              >
                오늘의 히트곡
              </Text>
              <Text
                style={{ color: "#6e6e6e", fontWeight: "400", fontSize: 15 }}
              >
                Apple Music 히트곡
              </Text>
              <View style={[styles.albumCard, { backgroundColor: "#2affd1" }]}>
                <Text
                  style={{ color: "#ffffff", fontWeight: "bold", fontSize: 20 }}
                >
                  Today's Hits
                </Text>
              </View>
            </View>

            <View style={styles.albumfull}>
              <Text
                style={{ color: "#6e6e6e", fontWeight: "400", fontSize: 12 }}
              >
                업데이트된 플레이리스트
              </Text>
              <Text
                style={{ color: "#000000", fontWeight: "600", fontSize: 17 }}
              >
                오늘의 히트곡
              </Text>
              <Text
                style={{ color: "#6e6e6e", fontWeight: "400", fontSize: 15 }}
              >
                Apple Music 히트곡
              </Text>
              <View style={[styles.albumCard, { backgroundColor: "#ff2a38" }]}>
                <Text
                  style={{ color: "#ffffff", fontWeight: "bold", fontSize: 20 }}
                >
                  Today's Hits
                </Text>
              </View>
            </View>
          </ScrollView>

          <Text style={styles.sectionTitle}>최신곡 {">"}</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            <View style={styles.musicColumn}>
              <View style={styles.musicRow}>
                <View style={styles.albumArt} />
                <View style={styles.rowContent}>
                  <View style={styles.playerTextContainer}>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "600",
                        fontSize: 15,
                      }}
                    >
                      제목
                    </Text>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "400",
                        fontSize: 12,
                      }}
                    >
                      가수
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={24}
                    color="black"
                  />
                </View>
              </View>

              <View style={styles.musicRow}>
                <View style={styles.albumArt} />
                <View style={styles.rowContent}>
                  <View style={styles.playerTextContainer}>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "600",
                        fontSize: 15,
                      }}
                    >
                      제목
                    </Text>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "400",
                        fontSize: 12,
                      }}
                    >
                      가수
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={24}
                    color="black"
                  />
                </View>
              </View>

              <View style={styles.musicRow}>
                <View style={styles.albumArt} />
                <View style={styles.rowContent}>
                  <View style={styles.playerTextContainer}>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "600",
                        fontSize: 15,
                      }}
                    >
                      제목
                    </Text>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "400",
                        fontSize: 12,
                      }}
                    >
                      가수
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={24}
                    color="black"
                  />
                </View>
              </View>

              <View style={styles.musicRow}>
                <View style={styles.albumArt} />
                <View style={[styles.rowContent, { borderBottomWidth: 0 }]}>
                  <View style={styles.playerTextContainer}>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "600",
                        fontSize: 15,
                      }}
                    >
                      제목
                    </Text>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "400",
                        fontSize: 12,
                      }}
                    >
                      가수
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={24}
                    color="black"
                  />
                </View>
              </View>
            </View>

            <View style={styles.musicColumn}>
              <View style={styles.musicRow}>
                <View style={styles.albumArt} />
                <View style={styles.rowContent}>
                  <View style={styles.playerTextContainer}>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "600",
                        fontSize: 15,
                      }}
                    >
                      제목
                    </Text>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "400",
                        fontSize: 12,
                      }}
                    >
                      가수
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={24}
                    color="black"
                  />
                </View>
              </View>

              <View style={styles.musicRow}>
                <View style={styles.albumArt} />
                <View style={styles.rowContent}>
                  <View style={styles.playerTextContainer}>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "600",
                        fontSize: 15,
                      }}
                    >
                      제목
                    </Text>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "400",
                        fontSize: 12,
                      }}
                    >
                      가수
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={24}
                    color="black"
                  />
                </View>
              </View>

              <View style={styles.musicRow}>
                <View style={styles.albumArt} />
                <View style={styles.rowContent}>
                  <View style={styles.playerTextContainer}>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "600",
                        fontSize: 15,
                      }}
                    >
                      제목
                    </Text>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "400",
                        fontSize: 12,
                      }}
                    >
                      가수
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={24}
                    color="black"
                  />
                </View>
              </View>

              <View style={styles.musicRow}>
                <View style={styles.albumArt} />
                <View style={[styles.rowContent, { borderBottomWidth: 0 }]}>
                  <View style={styles.playerTextContainer}>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "600",
                        fontSize: 15,
                      }}
                    >
                      제목
                    </Text>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "400",
                        fontSize: 12,
                      }}
                    >
                      가수
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={24}
                    color="black"
                  />
                </View>
              </View>
            </View>

            <View style={styles.musicColumn}>
              <View style={styles.musicRow}>
                <View style={styles.albumArt} />
                <View style={styles.rowContent}>
                  <View style={styles.playerTextContainer}>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "600",
                        fontSize: 15,
                      }}
                    >
                      제목
                    </Text>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "400",
                        fontSize: 12,
                      }}
                    >
                      가수
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={24}
                    color="black"
                  />
                </View>
              </View>

              <View style={styles.musicRow}>
                <View style={styles.albumArt} />
                <View style={styles.rowContent}>
                  <View style={styles.playerTextContainer}>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "600",
                        fontSize: 15,
                      }}
                    >
                      제목
                    </Text>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "400",
                        fontSize: 12,
                      }}
                    >
                      가수
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={24}
                    color="black"
                  />
                </View>
              </View>

              <View style={styles.musicRow}>
                <View style={styles.albumArt} />
                <View style={styles.rowContent}>
                  <View style={styles.playerTextContainer}>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "600",
                        fontSize: 15,
                      }}
                    >
                      제목
                    </Text>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "400",
                        fontSize: 12,
                      }}
                    >
                      가수
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={24}
                    color="black"
                  />
                </View>
              </View>

              <View style={styles.musicRow}>
                <View style={styles.albumArt} />
                <View style={[styles.rowContent, { borderBottomWidth: 0 }]}>
                  <View style={styles.playerTextContainer}>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "600",
                        fontSize: 15,
                      }}
                    >
                      제목
                    </Text>
                    <Text
                      style={{
                        color: "#000000",
                        fontWeight: "400",
                        fontSize: 12,
                      }}
                    >
                      가수
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={24}
                    color="black"
                  />
                </View>
              </View>
            </View>
          </ScrollView>

          <Text style={styles.sectionTitle}>최신 발매 {">"}</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            <View style={{ flexDirection: "column" }}>
              <View
                style={[styles.albumsmall, { backgroundColor: "#31933b",marginBottom: 10 }]}
              ></View>
              <View
                style={[styles.albumsmall, { backgroundColor: "#541c62" }]}
              ></View>
            </View>

            <View style={{ flexDirection: "column" }}>
              <View
                style={[styles.albumsmall, { backgroundColor: "#f6c959",marginBottom: 10 }]}
              ></View>
              <View
                style={[styles.albumsmall, { backgroundColor: "#4ac2e6" }]}
              ></View>
            </View>

            <View style={{ flexDirection: "column" }}>
              <View
                style={[styles.albumsmall, { backgroundColor: "#f28cc1",marginBottom: 10 }]}
              ></View>
              <View
                style={[styles.albumsmall, { backgroundColor: "#b8f28c" }]}
              ></View>
            </View>
          </ScrollView>



        </ScrollView>
        <Tabbar />
      </View>
    </View>
  );
};

export default new_music;
