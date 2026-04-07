import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter, usePathname } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  activeBox: {
    backgroundColor: "#f0f0f0",
  },
  tabRow: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  searchButton: {
    elevation: 5,
    justifyContent: "center",
    borderRadius: 35,
    shadowOpacity: 0.1,
    backgroundColor: "#ffffff",
    width: 65,
    alignItems: "center",
    height: 65,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    shadowRadius: 5,
  },
  playerLeft: {
    gap: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  bottomWrapper: {
    zIndex: 10,
    width: "100%",
    gap: 10,
    paddingHorizontal: 15,
    bottom: 25,
    position: "absolute",
  },
  tabText: {
    fontWeight: "bold",
    fontSize: 10,
    marginTop: 2,
  },
  albumArt: {
    borderRadius: 8,
    height: 30,
    backgroundColor: "#d1d1d1",
    width: 30,
  },
  mainTabBar: {
    marginRight: 10,
    backgroundColor: "#ffffff",
    shadowOpacity: 0.1,
    flex: 1,
    elevation: 5,
    shadowRadius: 5,
    justifyContent: "space-around",
    borderRadius: 40,
    shadowOffset: { width: 0, height: 2 },
    paddingVertical: 10,
    flexDirection: "row",
    shadowColor: "#000",
  },
  inactiveBox: {
    backgroundColor: "transparent",
  },
  playerRight: {
    alignItems: "center",
    marginRight: 5,
    gap: 15,
    flexDirection: "row",
  },
  miniPlayer: {
    shadowRadius: 8,
    paddingVertical: 7,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    elevation: 5,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    shadowOpacity: 0.15,
    alignItems: "center",
    borderRadius: 30,
    shadowOffset: { width: 0, height: 2 },
  },
  tabItem: {
    paddingVertical: 6,
    borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 12,
    justifyContent: "center",
  },
  playerTextContainer: {
    justifyContent: "center",
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
              style={[
                styles.tabText,
                { color: getTabColor("/study_3/new_music") },
              ]}
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