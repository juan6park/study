import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import Checkbox from 'expo-checkbox';

const styles = StyleSheet.create({
  screen:{
    
  },
});

const signup = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const router = useRouter();

  return (
      <View style={styles.screen}>

      </View>





  )
}

export default signup