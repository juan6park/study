import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  input:{
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
  }
});

const index = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
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



     </View> 
    </View>  
  )
}

export default index