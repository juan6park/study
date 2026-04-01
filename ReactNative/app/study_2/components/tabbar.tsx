import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const styles = StyleSheet.create({
    tabbar:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#e76161',
        width : '100%',
        position: 'absolute',
        bottom: 0,
        maxWidth: 400,
        paddingVertical: 12,
        gap:-10,
        alignItems: 'center',
    },
})

const tabbar = () => {
    const router = useRouter();

  return (

    <View style={styles.tabbar}>
        <View>
            <TouchableOpacity onPress={() => router.push("/study_2")} style={{ alignItems: 'center' }}>
                <MaterialCommunityIcons name="home-outline" size={24} color="black"/>
                <Text>홈</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={() => router.push("/study_2/stack")}>
                <MaterialCommunityIcons name="auto-fix" size={24} color="black"/>
                <Text>기술</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={() => router.push("/study_2/activity")}>
                <MaterialCommunityIcons name="briefcase-outline" size={24} color="black"/>
                <Text>활동</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={() => router.push("/study_2/contact")}>
                <MaterialCommunityIcons name="email-outline" size={24} color="black"/>
                <Text>연락</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default tabbar