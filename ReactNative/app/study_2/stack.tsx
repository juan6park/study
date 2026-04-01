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
    backgroundColor: "#f4f4f4",
    width: "100%",
    maxWidth: 330,
    height: "90%",
    maxHeight: 800,
    alignItems: "flex-start",
    position: "relative",
    overflow: "hidden",
  },
  profile: {
    backgroundColor: "#6581c9",
    width: "93%",
    height: 230,
    borderRadius: 20,
    position: "relative",
    padding: 15,
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 15,
  },
  profileimage: {
    backgroundColor: "#98ade4",
    opacity: 0.8,
    width: 50,
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  profilebox: {
    position: "absolute",
    justifyContent: "space-between",
    bottom: 20,
    flexDirection: "row",
    gap: 15,
    left: 15,
    right: 15,
    flex: 1,
  },
  box: {
    backgroundColor: "#98ade4",
    borderRadius: 12,
    color: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    flex:1,
    width: "80%",
  },
  boxtext: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  boxcontainer:{
    paddingTop: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 15,
  },
  boxcontainer1:{
    flex:1,
    width: "93%",
    paddingTop: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 15,
  },
  box1:{
    backgroundColor: "#ffffff",
    borderRadius: 12,
    color: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 34,
    paddingVertical: 10,
  },
  boxtext1: {
    paddingTop:1,
    color: "#000000",
    fontSize: 12,
    fontWeight: "bold",
  },
  explain:{
    paddingTop: 10,
    width: "93%",
    alignItems: "flex-start",
  },
  explainbox:{
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    color: "#595959",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  textbox:{
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    color: "#595959",
    alignItems: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "column",
    flex:1,
    width: "93%",
    gap:10,
  },
});

const stack = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Header />

        <ScrollView
          style={{ flex:1,  width: "100%" }}
          contentContainerStyle={[
            styles.scrollContent,
            { paddingTop: 55, paddingBottom: 100 },
          ]}
          showsVerticalScrollIndicator={false}
        >
            



        </ScrollView>
        <Tabbar />
      </View>
    </View>
  );
};

export default stack;
