import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f9f9f9',
        width : '100%',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        maxWidth: 400,
        padding: 10,
        zIndex: 10,
    },
    headerText:{
        paddingLeft: 10,
        fontSize: 20,
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
        <MaterialCommunityIcons name="bell-outline" size={24} color="black"/>
        <MaterialCommunityIcons name="dots-horizontal" size={24} color="black"/>
      </View>
    </View>
  )
}

export default header