import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter, usePathname } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  bottomWrapper: {
    position: "absolute",
    bottom: 25,
    width: "100%",
    paddingHorizontal: 15,
    zIndex: 10,
    gap: 10,
  },
  miniPlayer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  playerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  albumArt: {
    width: 30,
    height: 30,
    backgroundColor: "#d1d1d1",
    borderRadius: 8,
  },
  playerTextContainer: {
    justifyContent: "center",
  },
  playerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginRight: 5,
  },
  tabRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainTabBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
    borderRadius: 40,
    paddingVertical: 10,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  searchButton: {
    width: 65,
    height: 65,
    backgroundColor: "#ffffff",
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  activeBox: {
    backgroundColor: "#f0f0f0",
  },
  inactiveBox: {
    backgroundColor: "transparent",
  },
  tabText: {
    fontSize: 10,
    marginTop: 2,
    fontWeight: "bold",
  },
});

const Tabbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const getTabColor = (path: string) =>
    pathname === path ? "#fa233b" : "#262626";

  return (
    <View style={styles.bottomWrapper}>
      <TouchableOpacity
        style={styles.miniPlayer}
        onPress={() => router.push("/study_3/music")}
        activeOpacity={0.9}
      >
        <View style={styles.playerLeft}>
          <View style={styles.albumArt} />
          <View style={styles.playerTextContainer}>
            <Text style={{ fontSize: 13, fontWeight: "700" }}>
              현재 재생 중인 음악
            </Text>
            <Text style={{ fontSize: 12, color: "#666", marginTop: 2 }}>
              가수
            </Text>
          </View>
        </View>
        <View style={styles.playerRight}>
          <MaterialCommunityIcons name="pause" size={28} color="black" />
          <MaterialCommunityIcons name="skip-forward" size={28} color="black" />
        </View>
      </TouchableOpacity>

      <View style={styles.tabRow}>
        <View style={styles.mainTabBar}>
          <TouchableOpacity
            onPress={() => router.push("/study_3")}
            style={[
              styles.tabItem,
              pathname === "/study_3" ? styles.activeBox : styles.inactiveBox,
            ]}
          >
            <MaterialCommunityIcons
              name="home"
              size={24}
              color={getTabColor("/study_3")}
            />
            <Text style={[styles.tabText, { color: getTabColor("/study_3") }]}>
              홈
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/study_3/new_music")}
            style={[
              styles.tabItem,
              pathname === "/study_3/new_music"
                ? styles.activeBox
                : styles.inactiveBox,
            ]}
          >
            <MaterialCommunityIcons
              name="view-grid"
              size={24}
              color={getTabColor("/study_3/new_music")}
            />
            <Text
              style={[styles.tabText, { color: getTabColor("/study_3/new_music") }]}
            >
              새로운 음악
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/study_3/radio")}
            style={[
              styles.tabItem,
              pathname === "/study_3/radio"
                ? styles.activeBox
                : styles.inactiveBox,
            ]}
          >
            <MaterialCommunityIcons
              name="access-point"
              size={24}
              color={getTabColor("/study_3/radio")}
            />
            <Text
              style={[styles.tabText, { color: getTabColor("/study_3/radio") }]}
            >
              라디오
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/study_3/library")}
            style={[
              styles.tabItem,
              pathname === "/study_3/library"
                ? styles.activeBox
                : styles.inactiveBox,
            ]}
          >
            <MaterialCommunityIcons
              name="music-box-multiple"
              size={24}
              color={getTabColor("/study_3/library")}
            />
            <Text
              style={[
                styles.tabText,
                { color: getTabColor("/study_3/library") },
              ]}
            >
              보관함
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => router.push("/study_3/search")}
          style={styles.searchButton}
        >
          <MaterialCommunityIcons
            name="magnify"
            size={30}
            color={getTabColor("/study_3/search")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tabbar;
