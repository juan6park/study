import { View, Text, StyleSheet, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import Header from './components/header'
import Tabbar from './components/tabbar'

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
    paddingVertical: 20,
  },
  container: {
    backgroundColor: "#efefef",
    width: "100%",
    maxWidth: 400,
    height: "90%",
    maxHeight: 800,
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
})

const index = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Header />

          <ScrollView style={{ width: "100%" }}contentContainerStyle={styles.scrollContent}  showsVerticalScrollIndicator={false}>







          </ScrollView>
        <Tabbar />
      </View>
    </View>
  )
}

export default index