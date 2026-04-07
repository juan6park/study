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

          

        </ScrollView>
        <Tabbar />
      </View>
    </View>
  );
};

export default new_music;
