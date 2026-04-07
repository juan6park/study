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
    marginBottom: 20,
  },
  profile: {
    backgroundColor: "#99c0db",
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  searchRow: {
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "100%",
    marginHorizontal: 5,
    marginTop: 5,
  },
  albumCard: {
    backgroundColor: "#e1e1e1",
    width: 150,
    height: 80,
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

const search = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ScrollView
          style={{ flex: 1, width: "100%" }}
          contentContainerStyle={{ paddingBottom: 180 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={{ fontSize: 35, fontWeight: "bold" }}>검색</Text>
            <View style={styles.profile}>
              <MaterialCommunityIcons
                name="account"
                size={30}
                color="#ffffff"
              />
            </View>
          </View>

          
            <View style={styles.searchRow}>
                <View style={[styles.albumCard, { backgroundColor: "#ffef74" }]}>
                    <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 20 }}>라디오</Text>
                </View>
                <View style={[styles.albumCard, { backgroundColor: "#fe4444" }]}>
                    <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 20 }}>댄스</Text>
                </View>
            </View>
             <View style={styles.searchRow}>
                <View style={[styles.albumCard, { backgroundColor: "#83ff3b" }]}>
                    <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 20 }}>일렉트로닉</Text>
                </View>
                <View style={[styles.albumCard, { backgroundColor: "#030303" }]}>
                    <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 20 }}>콘서트</Text>
                </View>
            </View>
            <View style={styles.searchRow}>
                <View style={[styles.albumCard, { backgroundColor: "#fb84f3" }]}>
                    <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 20 }}>KPOP</Text>
                </View>
                <View style={[styles.albumCard, { backgroundColor: "#af68cb" }]}>
                    <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 20 }}>재즈</Text>
                </View>
            </View>
            <View style={styles.searchRow}>
                <View style={[styles.albumCard, { backgroundColor: "#84b0fb" }]}>
                    <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 20 }}>팝</Text>
                </View>
                <View style={[styles.albumCard, { backgroundColor: "#3d4075" }]}>
                    <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 20 }}>클래식</Text>
                </View>
            </View>
            <View style={styles.searchRow}>
                <View style={[styles.albumCard, { backgroundColor: "#fb933f" }]}>
                    <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 20 }}>R&B</Text>
                </View>
                <View style={[styles.albumCard, { backgroundColor: "#50e6ee" }]}>
                    <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 20 }}>차트</Text>
                </View>
            </View>
            <View style={styles.searchRow}>
                <View style={[styles.albumCard, { backgroundColor: "#ff4d00" }]}>
                    <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 20 }}>록</Text>
                </View>
                <View style={[styles.albumCard, { backgroundColor: "#ffd500" }]}>
                    <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 20 }}>행복</Text>
                </View>
            </View>
            <View style={styles.searchRow}>
                <View style={[styles.albumCard, { backgroundColor: "#a5eb00" }]}>
                    <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 20 }}>히트곡</Text>
                </View>
                <View style={[styles.albumCard, { backgroundColor: "#cf405f" }]}>
                    <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 20 }}>얼터너티브</Text>
                </View>
            </View>

        </ScrollView>
        <Tabbar />
      </View>
    </View>
  );
};

export default search;
