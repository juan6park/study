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
  indexContainer:{
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  signinText:{
    color: '#000000',
    borderWidth:0,
    fontSize:30,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  ButtonText:{
    borderWidth:0,
    fontSize:30,
  },
  p:{
    color: '#999',
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
});

const signup = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const router = useRouter();

  return (
      <View style={styles.screen}>
        <View style={styles.container}>

          <View style={styles.indexContainer}>
            <TouchableOpacity onPress={() => router.push('/')}>
            <Text style={[styles.ButtonText, { color: '#000000', marginLeft: 5 }]}>{"<"}</Text>
            </TouchableOpacity>
            <Text style={styles.signinText}>회원가입</Text>
          </View>

          <Text style={styles.p}>기존 정보와 연락처를 입력해 동아리에 가입해보세요.</Text>
          
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
            <MaterialCommunityIcons name="account" size={20} color="#424242" />
            <TextInput 
              style={styles.input} 
              placeholder="이름을 입력하세요" 
              placeholderTextColor="#424242"
            />
          </View>












        </View>
      </View>
  )
}

export default signup