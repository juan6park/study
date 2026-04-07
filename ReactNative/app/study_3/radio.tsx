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
  radioContainer:{
    marginTop: 10,
    marginHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radioBox:{
    backgroundColor: "#e7e5e5",
    width: 80,
    height: 80,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  radioCard: {
    backgroundColor: "#e1e1e1",
    width: 280,
    height: 250,
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: "center",
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

const radio = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ScrollView
          style={{ flex: 1, width: "100%" }}
          contentContainerStyle={{ paddingBottom: 180 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={{ fontSize: 35, fontWeight: "bold" }}>라디오</Text>
            <View style={styles.profile}>
              <MaterialCommunityIcons
                name="account"
                size={30}
                color="#ffffff"
              />
            </View>
          </View>

          <View style={styles.radioContainer}>
            <View style={styles.radioBox}>
                <MaterialCommunityIcons name="star" size={80} color="#17a42a" />
                </View>
                <View style={styles.radioBox}>
                <MaterialCommunityIcons name="star" size={80} color="#1346aa" />
                </View>
                <View style={styles.radioBox}>
                <MaterialCommunityIcons name="star" size={80} color="#dc3030" />
                </View>
            </View>
            <View style={styles.radioContainer}>
            <View style={styles.radioBox}>
                <MaterialCommunityIcons name="star" size={80} color="#3097dc" />
                </View>
                <View style={styles.radioBox}>
                <MaterialCommunityIcons name="star" size={80} color="#e4c53a" />
                </View>
                <View style={styles.radioBox}>
                <MaterialCommunityIcons name="star" size={80} color="#5c3d97" />
                </View>
            </View>

          <Text style={styles.sectionTitle}>실시간 방송 중</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            <View style={[styles.radioCard, { backgroundColor: "#e9e9e9" }]}>
              <Text
                style={{ color: "#d41a1a", fontWeight: "bold", fontSize: 100 }}
              >
                1
              </Text>
              <Text
                style={{ color: "#232323", fontWeight: "bold", fontSize: 20 }}
              >
                Apple Music Radio
              </Text>
            </View>

            <View style={[styles.radioCard, { backgroundColor: "#e9e9e9" }]}>
              <Text
                style={{ color: "#d41a1a", fontWeight: "bold", fontSize: 100 }}
              >
                2
              </Text>
              <Text
                style={{ color: "#232323", fontWeight: "bold", fontSize: 20 }}
              >
                Apple Music Radio
              </Text>
            </View>

            <View style={[styles.radioCard, { backgroundColor: "#e9e9e9" }]}>
              <Text
                style={{ color: "#d41a1a", fontWeight: "bold", fontSize: 100 }}
              >
                3
              </Text>
              <Text
                style={{ color: "#232323", fontWeight: "bold", fontSize: 20 }}
              >
                Apple Music Radio
              </Text>
            </View>
          </ScrollView>

          <Text style={styles.sectionTitle}>최신 라디오 에피소드 {">"}</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            <View
              style={[styles.albumsmall, { backgroundColor: "#0346cb" }]}
            ></View>

            <View
              style={[styles.albumsmall, { backgroundColor: "#ff5050" }]}
            ></View>

            <View
              style={[styles.albumsmall, { backgroundColor: "#ffd558" }]}
            ></View>

            <View
              style={[styles.albumsmall, { backgroundColor: "#eeff00" }]}
            ></View>
          </ScrollView>
        </ScrollView>
        <Tabbar />
      </View>
    </View>
  );
};

export default radio;
