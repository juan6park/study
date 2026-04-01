import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Linking } from "react-native";
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
  contactContainer: {
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
  contactIcon: {
    backgroundColor: "#c3cfee",
    padding: 10,
    color: "#6581c9",
    borderRadius: 12,
  },
  contactBox: {
    flexDirection: "column",
    gap: 5,
    flex: 1,
  },
  contactLable: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000000",
  },
  contactText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#565656",
  },
});

const contact = () => {
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
            연락처 & 링크
          </Text>

          <View style={styles.contactContainer}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              style={styles.contactIcon}
            ></MaterialCommunityIcons>
            <View style={styles.contactBox}>
              <Text style={styles.contactLable}>Email</Text>
              <Text style={styles.contactText}>juan@sookmyung.ac.kr</Text>
            </View>
          </View>

          <View style={styles.contactContainer}>
            <MaterialCommunityIcons
              name="code-tags"
              size={24}
              style={styles.contactIcon}
            ></MaterialCommunityIcons>
            <View style={styles.contactBox}>
              <Text style={styles.contactLable}>GitHub</Text>

              <TouchableOpacity
                onPress={() => Linking.openURL("https://github.com/juan6park")}
                activeOpacity={0.7}
                >
                <Text style={[styles.contactLable, { color: "#0035bc",textDecorationLine: 'underline' }]}>
                  https://github.com/juan6park
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.contactContainer}>
            <MaterialCommunityIcons
              name="note-text-outline"
              size={24}
              style={styles.contactIcon}
            ></MaterialCommunityIcons>
            <View style={styles.contactBox}>
              <Text style={styles.contactLable}>Blog</Text>
              <Text style={styles.contactText}>
                추가 예정
              </Text>
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
            한 줄 목표
          </Text>
          <View style={[styles.contactContainer,{backgroundColor: '#1f1f43'}]}>
              <Text style={{color: '#fff', fontSize: 12, paddingHorizontal: 10}}>
                웹과 앱 모두에서 읽기 쉽고 쓰기 편한 화면을 만드는 프론트엔드 개발자로 성장하는 것이 목표입니다.
              </Text>
          </View>




        </ScrollView>
        <Tabbar />
      </View>
    </View>
  );
};

export default contact;
