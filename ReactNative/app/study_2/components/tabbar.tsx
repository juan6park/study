import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const styles = StyleSheet.create({
    tabbar:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#efefef',
        width : '100%',
        paddingHorizontal: 20,
        paddingVertical: 5,
        position: 'absolute',
        bottom: 0,
        maxWidth: 400,
    },
    home:{
    },
    stack:{
    },
    activity:{
    },
    contact:{
    },
})

const tabbar = () => {
    const router = useRouter();

  return (

    <View style={styles.tabbar}>
        <View>
            <TouchableOpacity onPress={() => router.push("/study_2")}>
                <MaterialCommunityIcons name="home-outline" size={24} color="black"/>
                <Text>홈</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={() => router.push("/study_2/stack")}>
                <MaterialCommunityIcons name="code-tags" size={24} color="black"/>
                <Text>기술</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={() => router.push("/study_2/activity")}>
                <MaterialCommunityIcons name="bed-king-outline" size={24} color="black"/>
                <Text>활동</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={() => router.push("/study_2/contact")}>
                <MaterialCommunityIcons name="account-outline" size={24} color="black"/>
                <Text>연락</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default tabbar