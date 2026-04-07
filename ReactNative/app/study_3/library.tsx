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
    marginBottom: 10,
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
  musicColumn: {
    flexDirection: "column",
    marginRight: 10,
  },
  musicRow: {
    width: 290,
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

const library = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ScrollView
          style={{ flex: 1, width: "100%" }}
          contentContainerStyle={{ paddingBottom: 180 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={{ fontSize: 35, fontWeight: "bold" }}>보관함</Text>
            <View style={styles.profile}>
              <MaterialCommunityIcons
                name="account"
                size={30}
                color="#ffffff"
              />
            </View>
          </View>

          <View style={[styles.musicColumn, { marginLeft: 20 }]}>
            <View style={styles.musicRow}>
              <MaterialCommunityIcons
                name="music-box-multiple-outline"
                size={28}
                color="#fa233b"
              />
              <View style={styles.rowContent}>
                <View style={styles.playerTextContainer}>
                  <Text
                    style={{
                      color: "#000000",
                      fontWeight: "400",
                      fontSize: 15,
                    }}
                  >
                    플레이리스트
                  </Text>
                </View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color="black"
                />
              </View>
            </View>
            <View style={styles.musicRow}>
              <MaterialCommunityIcons
                name="music-note"
                size={28}
                color="#fa233b"
              />
              <View style={styles.rowContent}>
                <View style={styles.playerTextContainer}>
                  <Text
                    style={{
                      color: "#000000",
                      fontWeight: "400",
                      fontSize: 15,
                    }}
                  >
                    노래
                  </Text>
                </View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color="black"
                />
              </View>
            </View>
            <View style={styles.musicRow}>
              <MaterialCommunityIcons name="arrow-down-circle-outline" size={28} color="#fa233b" />
              <View style={[styles.rowContent, { borderBottomWidth: 0 }]}>
                <View style={styles.playerTextContainer}>
                  <Text
                    style={{
                      color: "#000000",
                      fontWeight: "400",
                      fontSize: 15,
                    }}
                  >
                    다운로드됨
                  </Text>
                </View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color="black"
                />
              </View>
            </View>
          </View>

          <Text style={styles.sectionTitle}>최근 추가된 항목 {">"}</Text>
          <View style={{ marginLeft: 5 }}>
            <View style={{ flexDirection: "row" }}>
              <View
                style={[
                  styles.albumsmall,
                  { backgroundColor: "#646464", marginBottom: 10 },
                ]}
              ></View>
              <View
                style={[styles.albumsmall, { backgroundColor: "#11793a" }]}
              ></View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View
                style={[
                  styles.albumsmall,
                  { backgroundColor: "#ab3131", marginBottom: 10 },
                ]}
              ></View>
              <View
                style={[styles.albumsmall, { backgroundColor: "#194b5a" }]}
              ></View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View
                style={[
                  styles.albumsmall,
                  { backgroundColor: "#283d75", marginBottom: 10 },
                ]}
              ></View>
              <View
                style={[styles.albumsmall, { backgroundColor: "#ffcb3a" }]}
              ></View>
            </View>
          </View>
        </ScrollView>
        <Tabbar />
      </View>
    </View>
  );
};

export default library;
