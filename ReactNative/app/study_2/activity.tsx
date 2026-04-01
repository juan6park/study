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
import Header from "./components/header";
import Tabbar from "./components/tabbar";
import { Extrapolation } from "react-native-reanimated";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#f9f9f9",
    width: "100%",
    maxWidth: 330,
    height: "90%",
    maxHeight: 800,
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  stackcontainer: {
    width: "93%",
    flex: 1,
    flexDirection: "column",
  },
  activityContainer: {
    marginTop: 10,
    backgroundColor: "#fff",
    width: "93%",
    alignItems: "flex-start",
    flexDirection: "row",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 10,
    gap: 10,
  },
  activityIcon: {
    backgroundColor: "#c3cfee",
    padding: 10,
    color: "#6581c9",
    borderRadius: 12,
  },
  activityBox: {
    flexDirection: "column",
    gap: 5,
    flex:1,
  },
  activityLable: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000000",
  },
  activityText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#565656",
  },
});

const activity = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Header />

        <ScrollView
          style={{ flex: 1, width: "100%" }}
          contentContainerStyle={[
            styles.scrollContent,
            { paddingTop: 55, paddingBottom: 100 },
          ]}
          showsVerticalScrollIndicator={false}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 18,
              fontWeight: "500",
              alignSelf: "flex-start",
              marginLeft: 20,
            }}
          >
            최근 활동
          </Text>

          <View style={styles.activityContainer}>
            <MaterialCommunityIcons
              name="window-maximize"
              size={24}
              style={styles.activityIcon}
            ></MaterialCommunityIcons>
            <View style={styles.activityBox}>
              <Text style={styles.activityLable}>자기소개 앱 제작</Text>
              <Text style={styles.activityText}>
                앱 레이아웃과 정보 구조를 직접 구성 해보며 ReactNative를 연습했습니다.
              </Text>
            </View>
          </View>

          <View style={styles.activityContainer}>
            <MaterialCommunityIcons
              name="cellphone"
              size={24}
              style={styles.activityIcon}
            ></MaterialCommunityIcons>
            <View style={styles.activityBox}>
              <Text style={styles.activityLable}>ReactNative 레이아웃 실습</Text>
              <Text style={styles.activityText}>
                Flexbox와 컴포넌트 구조를 활용하여 모바일 환경에 최적화된 포트폴리오 UI를 직접 구현했습니다.
              </Text>
            </View>
          </View>

          <View style={styles.activityContainer}>
            <MaterialCommunityIcons
              name="account-group"
              size={24}
              style={styles.activityIcon}
            ></MaterialCommunityIcons>
            <View style={styles.activityBox}>
              <Text style={styles.activityLable}>스터디 및 팀 활동</Text>
              <Text style={styles.activityText}>
                팀원들과 서로의 코드를 비교하고 피드백을 반영하며 협업의 중요성과 효율적인 코드 구조를 체감했습니다.
              </Text>
            </View>
          </View>

        </ScrollView>
        <Tabbar />
      </View>
    </View>
  );
};

export default activity;
