import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#efefef',
        width : '100%',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        padding: 10,
        maxWidth: 400,
    },
    headerText:{
        fontSize: 18,
        fontWeight: 'bold',
        alignItems: 'flex-start',
    },
    icons:{
        flexDirection: 'row',
        gap: 15,
        alignItems: 'flex-end',
    },
})

const header = () => {
  return (

    <View style={styles.header}>
      <Text style={styles.headerText}>My Intro</Text>
      <View style={styles.icons}>
        <MaterialCommunityIcons name="bell" size={24} color="black"/>
        <MaterialCommunityIcons name="dots-horizontal" size={24} color="black"/>
      </View>
    </View>
  )
}

export default header