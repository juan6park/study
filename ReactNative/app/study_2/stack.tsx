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
  stackbox: {
    position: "relative",
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    alignItems: "center",
    paddingHorizontal: 34,
    paddingVertical: 10,
    marginTop: 10,
    height: 60,
  },
  stacktext: {
    fontWeight: "500",
    fontSize: 12,
    position: "absolute",
    alignItems: "flex-start",
    left: 20,
    top: 12,
  },
  stackpercent: {
    color: "#6581c9",
    fontWeight: "500",
    fontSize: 12,
    position: "absolute",
    right: 15,
    top: 12,
  },
  stackbar: {
    position: "absolute",
    backgroundColor: "#f4f4f4",
    width: "90%",
    height: 10,
    borderRadius: 12,
    bottom: 12,
  },
  stackline: {
    backgroundColor: "#6581c9",
    width: "10%",
    height: "100%",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  listContainer: {
    marginTop: 10,
    backgroundColor: "#fff",
    width: "93%",
    alignItems: "flex-start",
    borderRadius: 12,
    paddingVertical: 10,
  },
  listItem: {
    flexDirection: "row",
    gap: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  bullet: {
    color: "#6581c9",
  },
  itemText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#565656",
  },
});

const stack = () => {
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
          <View style={styles.stackcontainer}>
            <Text
              style={{
                color: "#000",
                fontSize: 18,
                fontWeight: "500",
                marginLeft: 7,
              }}
            >
              배우고 있는 기술
            </Text>
            <View style={styles.stackbox}>
              <Text style={styles.stacktext}>ReactNative</Text>
              <Text style={styles.stackpercent}>10%</Text>
              <View style={styles.stackbar}>
                <View style={styles.stackline}></View>
              </View>
            </View>

            <View style={styles.stackbox}>
              <Text style={styles.stacktext}>HTML/CSS</Text>
              <Text style={styles.stackpercent}>15%</Text>
              <View style={styles.stackbar}>
                <View style={[styles.stackline, { width: "15%" }]}></View>
              </View>
            </View>

            <View style={styles.stackbox}>
              <Text style={styles.stacktext}>C</Text>
              <Text style={styles.stackpercent}>90%</Text>
              <View style={styles.stackbar}>
                <View style={[styles.stackline, { width: "90%" }]}></View>
              </View>
            </View>

            <View style={styles.stackbox}>
              <Text style={styles.stacktext}>Python</Text>
              <Text style={styles.stackpercent}>80%</Text>
              <View style={styles.stackbar}>
                <View style={[styles.stackline, { width: "80%" }]}></View>
              </View>
            </View>
          </View>

          <Text
            style={{
              color: "#000",
              fontSize: 18,
              fontWeight: "500",
              alignSelf: "flex-start",
              marginLeft: 20,
              marginTop: 20,
            }}
          >
            학습 스타일
          </Text>

          <View style={styles.listContainer}>
            <View style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.itemText}>
                배운 내용을 바로 UI로 구현해보며 익히는 편
              </Text>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.itemText}>
                기록하면서 공부하는 습관이 있음
              </Text>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.itemText}>
                완벽보다 완성을 먼저 경험하려고 노력함
              </Text>
            </View>
          </View>
        </ScrollView>
        <Tabbar />
      </View>
    </View>
  );
};

export default stack;
