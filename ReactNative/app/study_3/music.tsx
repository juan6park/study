import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const styles = StyleSheet.create({
  volBg: {
    flex: 1,
    backgroundColor: '#eeeeee',
    marginHorizontal: 10,
    borderRadius: 2,
    height: 4,
    justifyContent: 'center',
  },
  coverImg: {
    width: 250,
    elevation: 5,
    shadowOffset: { width: 0, height: 10 },
    height: 250,
    shadowOpacity: 0.1,
    backgroundColor: '#d1d1d1',
    shadowRadius: 10,
    shadowColor: "#000",
    borderRadius: 20,
  },
  singer: {
    fontSize: 18,
    marginTop: 5,
    color: '#fa233b',
  },
  topBtn: {
    width: "100%",
    marginBottom: 10,
  },
  bottomMenu: {
    marginTop: 25,
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-around',
  },
  volCircle: {
    borderRadius: 7,
    left: '60%',
    width: 14,
    backgroundColor: 'white',
    marginLeft: -7,
    height: 14,
    position: 'absolute',
    borderColor: '#ddd',
    borderWidth: 0.5,
  },
  wrapper: {
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    flex: 1,
  },
  bgLine: {
    height: 4,
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    borderRadius: 2,
  },
  songTxt: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  activeLine: {
    width: '40%',
    backgroundColor: '#999999',
    height: '100%',
    borderRadius: 2,
  },
  btns: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  playerBox: {
    height: 700,
    width: 330,
    backgroundColor: "#ffffff",
    alignItems: "center",
    padding: 25,
    borderRadius: 40,
  },
  txtSmall: {
    fontSize: 12,
    color: '#999999',
  },
  textPart: {
    alignItems: 'center',
    marginTop: 20,
  },
  barArea: {
    width: "100%",
    marginTop: 35,
  },
  volWrap: {
    width: "100%",
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 25,
  },
  circle: {
    backgroundColor: '#999999',
    width: 8,
    borderRadius: 4,
    height: 8,
    marginLeft: -4,
  },
  timeWrap: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-between',
  },
  volActive: {
    height: '100%',
    width: '60%',
    borderRadius: 2,
    backgroundColor: '#999999',
  }
});

const music = () => {
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      <View style={styles.playerBox}>
        <TouchableOpacity style={styles.topBtn} onPress={() => router.push("/study_3")}>
          <MaterialCommunityIcons name="chevron-left" size={35} color="#ddd" />
        </TouchableOpacity>

        <View style={styles.coverImg} />

        <View style={styles.barArea}>
          <View style={styles.bgLine}>
            <View style={styles.activeLine} />
            <View style={styles.circle} />
          </View>
          <View style={styles.timeWrap}>
            <Text style={styles.txtSmall}>0:42</Text>
            <Text style={styles.txtSmall}>-2:42</Text>
          </View>
        </View>

        <View style={styles.textPart}>
          <Text style={styles.songTxt}>Song Name</Text>
          <Text style={styles.singer}>Artist — Album</Text>
        </View>

        <View style={styles.btns}>
          <MaterialCommunityIcons name="rewind" size={40} color="black" />
          <MaterialCommunityIcons name="pause" size={50} color="black" />
          <MaterialCommunityIcons name="fast-forward" size={40} color="black" />
        </View>

        <View style={styles.volWrap}>
          <MaterialCommunityIcons name="volume-low" size={18} color="#999" />
          <View style={styles.volBg}>
            <View style={styles.volActive} />
            <View style={styles.volCircle} />
          </View>
          <MaterialCommunityIcons name="volume-high" size={18} color="#999" />
        </View>

        <View style={styles.bottomMenu}>
          <MaterialCommunityIcons name="cast-audio" size={24} color="#fa233b" />
          <MaterialCommunityIcons name="dots-horizontal" size={24} color="#fa233b" />
        </View>
      </View>
    </View>
  );
};

export default music;