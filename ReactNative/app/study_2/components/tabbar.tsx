import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter,usePathname } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const styles = StyleSheet.create({
    tabbar:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#f4f4f4',
        width : '100%',
        position: 'absolute',
        bottom: 0,
        maxWidth: 400,
        paddingVertical: 12,
        gap:-10,
        alignItems: 'center',
    },
    activeBox: {
    backgroundColor: "#a4a4a4", 
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactiveBox: {
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

const tabbar = () => {
    const router = useRouter();
    const pathname = usePathname();

  return (

    <View style={styles.tabbar}>
        <View>
            <TouchableOpacity onPress={() => router.push("/study_2")} style={[pathname === "/study_2" ? styles.activeBox : styles.inactiveBox, { alignItems: 'center' }]}>
                <MaterialCommunityIcons name="home-outline" size={24} color="black"/>
                <Text>홈</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={() => router.push("/study_2/stack")} style={[pathname === "/study_2/stack" ? styles.activeBox : styles.inactiveBox, { alignItems: 'center' }]}>
                <MaterialCommunityIcons name="auto-fix" size={24} color="black"/>
                <Text>기술</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={() => router.push("/study_2/activity")} style={[pathname === "/study_2/activity" ? styles.activeBox : styles.inactiveBox, { alignItems: 'center' }]}>
                <MaterialCommunityIcons name="briefcase-outline" size={24} color="black"/>
                <Text>활동</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity onPress={() => router.push("/study_2/contact")} style={[pathname === "/study_2/contact" ? styles.activeBox : styles.inactiveBox, { alignItems: 'center' }]}>
                <MaterialCommunityIcons name="email-outline" size={24} color="black"/>
                <Text>연락</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default tabbar