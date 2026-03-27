import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import Checkbox from 'expo-checkbox';

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    backgroundColor: '#fbfbfb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    maxWidth: 400,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  box:{
    borderWidth:0,
    borderRadius: 25,
    backgroundColor: '#dde1ff',
    padding: 10,
    marginVertical: 7,
    marginBottom: 25,
    alignItems: 'center',
    fontSize:30,
    fontWeight: 'bold',
    color: '#5359c9',
  },
  h1:{
    borderWidth:0,
    fontSize:24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  p:{
    color: '#999',
    borderWidth:0,
    fontSize:12,
    marginBottom: 25,
  },
  label:{
    borderWidth:0,
    fontSize:16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderColor: '#b3b2b2',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  input:{
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
  },
  CheckboxContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 5,
    gap: 5,
  },
  checkbox:{
    width: 18,
    height: 18,
    alignItems: 'center',
  },
  findText:{
    fontSize: 14,
    color: '#999',
  },
  loginButton:{
    width: '100%',
    height: 44,
    backgroundColor: '#5359c9',
    borderRadius: 12,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  loginButtonText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'normal',
  },
  divideContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  line:{
    flex: 1,
    height: 1,
    backgroundColor: '#b3b2b2',
  },
  divideText:{
    marginHorizontal: 10,
    color: '#999',
    fontSize: 14,
  },
  ButtonText:{
    color: '#000000',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  signupContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
    width: '100%',
  },
});

const index = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <View style={styles.container}>

        <Text style={styles.box}>{"<>"}</Text>
        <Text style={styles.h1}>로그인</Text>
        <Text style={styles.p}>프로그래밍 동아리 SOLUX에 다시 오신 걸 환영해요.</Text>

        <Text style={styles.label}>아이디</Text>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="account-outline" size={20} color="#424242" />
          <TextInput 
            style={styles.input} 
            placeholder="아이디를 입력하세요" 
            placeholderTextColor="#424242"
          />
        </View>

        <Text style={styles.label}>비밀번호</Text>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="lock-outline" size={20} color="#424242" />
          <TextInput 
            style={styles.input} 
            placeholder="비밀번호를 입력하세요" 
            placeholderTextColor="#424242"
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <MaterialCommunityIcons name={isPasswordVisible ? "eye-outline" : "eye-off-outline"} size={20} color="#999" />
          </TouchableOpacity>
        </View>

        <View style={styles.CheckboxContainer}>
          <Checkbox style={[styles.checkbox, { alignItems: 'center' }]} value={isChecked} onValueChange={setChecked} color={isChecked ? '#999' : undefined} />
          <Text style={[styles.label, { fontWeight: 'normal', fontSize: 14 , marginBottom:1 }]}>로그인 상태 유지</Text>

          <TouchableOpacity style={{ marginLeft: 'auto' }}>
          <Text style={styles.findText}>비밀번호 찾기</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>로그인</Text>
        </TouchableOpacity>

        <View style={styles.divideContainer}>
          <View style={styles.line} />
          <Text style={styles.divideText}>또는</Text>
          <View style={styles.line} />
        </View>

       
        <TouchableOpacity style={[styles.loginButton, { backgroundColor: '#fff', borderWidth: 1.5, borderColor: '#c5c5c5' }]}>
        <MaterialCommunityIcons name="email-outline" size={20} color="#000000" />
        <Text style={styles.ButtonText}>이메일로 계속하기</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.loginButton, { backgroundColor: '#fff', borderWidth: 1.5, borderColor: '#c5c5c5' }]}>
        <MaterialCommunityIcons name="message-outline" size={20} color="#000000" />
        <Text style={styles.ButtonText}>소셜 로그인</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.findText}>아직 계정이 없으신가요?</Text>
          <TouchableOpacity onPress={() => router.push('/signup')}>
          <Text style={[styles.ButtonText, { color: '#5359c9', marginLeft: 5 }]}>회원가입</Text>
          </TouchableOpacity>
        </View>

     </View> 
    </View>  
  )
}

export default index