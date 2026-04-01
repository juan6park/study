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

const index = () => {
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
          <View style={styles.profile}>
            <View style={styles.profileimage}>
              <MaterialCommunityIcons name="account" size={30} color="#fff" />
            </View>
            <View style={{ flexDirection: "column", justifyContent: "center" }}>
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
                박주안
              </Text>
              <Text
                style={{ color: "#fff", fontSize: 12, fontWeight: "semibold" }}
              >
                프론트엔드& 앱 UI 학습자
              </Text>
            </View>
            <View
              style={{
                position: "absolute",
                top: 80,
                justifyContent: "center",
                maxWidth: "90%",
              }}
            >
              <Text
                style={{ color: "#fff", fontSize: 14, fontWeight: "normal" }}
              >
                기획 의도가 보이는 화면을 만들고 싶습니다. 같은 내용을 웹과
                앱으로 각각 구현해보며 UI 구조를 익히는 중입니다.
              </Text>
            </View>
            <View style={styles.profilebox}>
              <View style={styles.box}>
                <Text style={[styles.boxtext, { fontWeight: "normal" }]}>
                  전공
                </Text>
                <Text style={styles.boxtext}>학습</Text>
              </View>
              <View style={styles.box}>
                <Text style={[styles.boxtext, { fontWeight: "normal" }]}>
                  관심
                </Text>
                <Text style={styles.boxtext}>RN</Text>
              </View>
              <View style={styles.box}>
                <Text style={[styles.boxtext, { fontWeight: "normal" }]}>
                  성향
                </Text>
                <Text style={styles.boxtext}>꾸준함</Text>
              </View>
            </View>
          </View>


          <View style={styles.boxcontainer1}>
          <View style={styles.box1}>
            <MaterialCommunityIcons name="school-outline" size={20} color="#6581c9" />
            <Text style={styles.boxtext1}>학습</Text>
          </View>
          <View style={styles.box1}>
            <MaterialCommunityIcons name="palette-outline" size={20} color="#6581c9" />
            <Text style={styles.boxtext1}>UI</Text>
          </View>
          <View style={styles.box1}>
            <MaterialCommunityIcons name="account-group-outline" size={20} color="#6581c9" />
            <Text style={styles.boxtext1}>협업</Text>
          </View>
        </View>

        <View style={styles.explain}>
          <Text style={{ color: "#000000", fontSize: 18, fontWeight: '500' }}>About Me</Text>
          <Text style={styles.explainbox}>
              저는 새로운 기술을 배우면 바로 작은 결과물로 옮겨보는 편입니다. 같은 기능이라도 웹에서는 어떻게 보이고, 앱에서는 어떻게 달라지는지 비교하며 구현하는 과정에 흥미를 느낍니다. 특히 사용자 입장에서 정보가 잘 읽히는 배치와 버튼 흐름을 고민하는 것을 좋아합니다.
          </Text>
        </View>

        <View style={styles.explain}>
          <Text style={{ color: "#000000", fontSize: 18, fontWeight: '500' }}>핵심 키워드</Text>
          <View style={styles.textbox}>
            <Text style={{ color: "#595959"}}>1. 사용자 중심의 UI/UX</Text>
            <Text style={{ color: "#595959"}}>2. 플랫폼별 최적화 구현</Text>
            <Text style={{ color: "#595959"}}>3. 꾸준한 학습과 실행력</Text>
          </View>
        </View>




        </ScrollView>
        <Tabbar />
      </View>
    </View>
  );
};

export default index;
