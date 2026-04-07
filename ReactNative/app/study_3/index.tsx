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
  albumCard: {
    backgroundColor: "#e1e1e1",
    width: 280,
    height: 370,
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: 20,
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

const index = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ScrollView
          style={{ flex: 1, width: "100%" }}
          contentContainerStyle={{ paddingBottom: 180 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={{ fontSize: 35, fontWeight: "bold" }}>홈</Text>
            <View style={styles.profile}>
              <MaterialCommunityIcons
                name="account"
                size={30}
                color="#ffffff"
              />
            </View>
          </View>

          <Text style={styles.sectionTitle}>인기 추천곡</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            <View style={[styles.albumCard, { backgroundColor: "#fee944" }]}>
              <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 20 }}>최신 발매</Text>
            </View>

            <View style={[styles.albumCard, { backgroundColor: "#4061c4" }]}>
              <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 20 }}>사용자의 스테이션</Text>
            </View>

            <View style={[styles.albumCard, { backgroundColor: "#c0e1d1" }]}>
              <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 20 }}>비슷한 아티스트</Text>
            </View>
          </ScrollView>

          <Text style={styles.sectionTitle}>최근 재생한 음악 {'>'}</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            <View style={[styles.albumsmall, { backgroundColor: "#f28c8c" }]}>
            </View>

            <View style={[styles.albumsmall, { backgroundColor: "#8cdef2" }]}>
            </View>

            <View style={[styles.albumsmall, { backgroundColor: "#8cf2b0" }]}>
            </View>

            <View style={[styles.albumsmall, { backgroundColor: "#f2d08c" }]}>
            </View>
          </ScrollView>

          <Text style={styles.sectionTitle}>K-POP</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            <View style={[styles.albumsmall, { backgroundColor: "#f28cc1" }]}>
            </View>

            <View style={[styles.albumsmall, { backgroundColor: "#b8f28c" }]}>
            </View>

            <View style={[styles.albumsmall, { backgroundColor: "#d7f28c" }]}>
            </View>

            <View style={[styles.albumsmall, { backgroundColor: "#e0abf3" }]}>
            </View>
          </ScrollView>

          <Text style={styles.sectionTitle}>추천 스테이션</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            <View style={[styles.albumsmall, { backgroundColor: "#e04040" }]}>
            </View>

            <View style={[styles.albumsmall, { backgroundColor: "#156478" }]}>
            </View>

            <View style={[styles.albumsmall, { backgroundColor: "#e5e81c" }]}>
            </View>

            <View style={[styles.albumsmall, { backgroundColor: "#6915fa" }]}>
            </View>
          </ScrollView>


        </ScrollView>
        <Tabbar />
      </View>
    </View>
  );
};

export default index;
