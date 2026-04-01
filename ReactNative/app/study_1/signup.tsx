import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Checkbox from "expo-checkbox";
import DropDownPicker from 'react-native-dropdown-picker';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fbfbfb",
    alignItems: "center",
  },
  scrollContent: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  container: {
    width: "100%",
    maxWidth: 400,
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
  indexContainer: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  signinText: {
    color: "#000000",
    borderWidth: 0,
    fontSize: 30,
    marginLeft: 10,
    fontWeight: "bold",
  },
  ButtonText: {
    borderWidth: 0,
    fontSize: 30,
  },
  p: {
    color: "#999",
    marginBottom: 25,
  },
  label: {
    borderWidth: 0,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 55,
    borderWidth: 1,
    borderColor: "#b3b2b2",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
  },
  genderContainer: {
    flexDirection: "row",
    width: "100%",
    height: 55,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b3b2b2",
    borderRadius: 12,
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 110,
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  radioLabel: {
    fontSize: 16,
    color: "#424242",
  },
  signinButton:{
    width: '100%',
    height: 44,
    backgroundColor: '#5359c9',
    borderRadius: 12,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  signinButtonText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'normal',
  },
   loginContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
    width: '100%',
  },
  findText:{
    fontSize: 14,
    color: '#999',
  },
});

const signup = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [isChecked, setChecked] = useState(false);

  const router = useRouter();

  const [gender, setGender] = useState("male");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: '대한민국', value: 'korea' },
    { label: '미국', value: 'usa' },
    { label: '일본', value: 'japan' },
    { label: '중국', value: 'china' },
  ]);

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [phone, setPhone] = useState("");

const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
const [phoneError, setPhoneError] = useState("");

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const phoneRegex = /^010-\d{3,4}-\d{4}$/;

const [confirmPassword, setConfirmPassword] = useState("");
const [confirmPasswordError, setConfirmPasswordError] = useState("");

const handleConfirmPassword = (text : string) => {
  setConfirmPassword(text);
  if (text !== password) {
    setConfirmPasswordError("비밀번호가 일치하지 않습니다.");
  } else {
    setConfirmPasswordError("");
  }
}

  return (
    <View style={styles.screen}>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false} >

        <View style={styles.container}>
          <View style={styles.indexContainer}>
            <TouchableOpacity onPress={() => router.push("/")}>
              <Text
                style={[styles.ButtonText, { color: "#000000", marginLeft: 5 }]}
              >
                {"<"}
              </Text>
            </TouchableOpacity>
            <Text style={styles.signinText}>회원가입</Text>
          </View>

          <Text style={styles.p}>
            기존 정보와 연락처를 입력해 동아리에 가입해보세요.
          </Text>

          <Text style={styles.label}>아이디</Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="at" size={20} color="#424242" />
            <TextInput
              style={styles.input}
              placeholder="최대 16자 영문/숫자"
              placeholderTextColor="#424242"
            />
          </View>

          <Text style={styles.label}>이름</Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons
              name="card-account-details-outline"
              size={20}
              color="#424242"
            />
            <TextInput
              style={styles.input}
              placeholder="이름을 입력하세요"
              placeholderTextColor="#424242"
            />
          </View>

          <Text style={styles.label}>영문 이름</Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="earth" size={20} color="#424242" />
            <TextInput
              style={styles.input}
              placeholder="English name"
              placeholderTextColor="#424242"
            />
          </View>

          <Text style={styles.label}>비밀번호</Text>
          <View style={[styles.inputContainer, passwordError ? { borderColor: 'red' } : null]}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={20}
              color="#424242"
            />
            <TextInput
              style={styles.input}
              placeholder="영문/숫자/특수문자 포함 8자 이상"
              placeholderTextColor="#424242"
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setPasswordError(passwordRegex.test(text) ? "" : "형식이 맞지 않습니다.");
              }}
            />
            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
              <MaterialCommunityIcons
                name={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="#424242"
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>비밀번호 확인</Text>
          <View style={[styles.inputContainer, confirmPasswordError ? { borderColor: 'red' } : null]}>
            <MaterialCommunityIcons
              name="shield-check-outline"
              size={20}
              color="#424242"
            />
            <TextInput
              style={styles.input}
              placeholder="비밀번호를 다시 입력하세요"
              placeholderTextColor="#424242"
              value={confirmPassword}
              onChangeText={handleConfirmPassword}
            />
          </View>

          <Text style={styles.label}>생년월일</Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="cake" size={20} color="#424242" />
            <TextInput
              style={styles.input}
              placeholder="YYYY-MM-DD"
              placeholderTextColor="#424242"
            />
          </View>

          <Text style={styles.label}>성별</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={styles.radioButton}
              onPress={() => setGender("male")}
            >
              <MaterialCommunityIcons
                name={gender === "male" ? "radiobox-marked" : "radiobox-blank"}
                size={24}
                color={gender === "male" ? "#5359c9" : "#000000"}
              />
              <Text style={styles.radioLabel}>남성</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.radioButton}
              onPress={() => setGender("female")}
            >
              <MaterialCommunityIcons
                name={
                  gender === "female" ? "radiobox-marked" : "radiobox-blank"
                }
                size={24}
                color={gender === "female" ? "#5359c9" : "#999"}
              />
              <Text style={styles.radioLabel}>여성</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>휴대폰 번호</Text>
          <View style={[styles.inputContainer, phoneError ? { borderColor: 'red' } : null]}>
            <MaterialCommunityIcons
              name="phone-outline"
              size={20}
              color="#424242"
            />
            <TextInput
              style={styles.input}
              placeholder="010-0000-0000"
              placeholderTextColor="#424242"
              value={phone}
              onChangeText={(text) => {
                setPhone(text);
                setPhoneError(phoneRegex.test(text) ? "" : "형식이 맞지 않습니다.");
              }}
            />
          </View>

          <Text style={styles.label}>이메일</Text>
          <View style={[styles.inputContainer, emailError ? { borderColor: 'red' } : null]}>
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color="#424242"
            />
            <TextInput
              style={styles.input}
              placeholder="example@email.com"
              placeholderTextColor="#424242"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setEmailError(emailRegex.test(text) ? "" : "형식이 맞지 않습니다.");
              }}
            />
          </View>

          <Text style={styles.label}>국적</Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons
              name="flag-outline"
              size={20}
              color="#424242"
            />
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="국적을 선택하세요"
              style={{ borderWidth: 0, backgroundColor: 'transparent' }}
              dropDownContainerStyle={{ borderWidth: 1, borderColor: '#b3b2b2' }}
            />
          </View>
          
          <TouchableOpacity style={styles.signinButton}>
          <Text style={styles.signinButtonText}>회원가입 완료</Text>
          </TouchableOpacity>

          <View style={styles.loginContainer}>
            <Text style={styles.findText}>이미 계정이 있으신가요?</Text>
            <TouchableOpacity onPress={() => router.push('/')}>
            <Text style={[styles.ButtonText, { color: '#5359c9', marginLeft: 5 , fontSize: 14, fontWeight: 'bold'}]}>로그인</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>
  );
};

export default signup;
