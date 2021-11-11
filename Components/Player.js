import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Sound from 'react-native-sound';

const Player = ({navigation, route}) => {
  const [name, setName] = useState('play-circle-outline');
  const [nameHeart, setNameHeart] = useState('heart-outline');
  const [music, setMusic] = useState(null);
  const [temp, setTemp] = useState(0);
  const play = () => {
    let sound = new Sound(
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      undefined,
      error => {
        if (error) {
          console.log(error);
          return;
        } else {
          console.log('Playing sound');
          sound.play();
        }
      },
    );
    setMusic(sound);
    setTemp(1);
  };
  const onToggle = () => {
    if (name === 'play-circle-outline') {
      setName('pause-outline');
      if (temp === 0) {
        play();
      } else {
        music.play();
      }
    } else {
      setName('play-circle-outline');
      music.pause();
    }
  };
  const onToggleHeart = () => {
    if (nameHeart === 'heart-outline') {
      setNameHeart('heart-circle-outline');
    } else {
      setNameHeart('heart-outline');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{uri: route.params.FileAnh}}
        style={styles.backGround}
        blurRadius={80}
      />
      <View style={styles.mainContainer}>
        <View style={styles.imageBox}>
          <Image
            source={{uri: route.params.FileAnh}}
            style={styles.imageSong}
          />
        </View>

        <View style={styles.txtTextBox}>
          <Text style={styles.txtNameSong}>{route.params.nameSong}</Text>
          <Text style={styles.txtNameSinger}>{route.params.nameSinger}</Text>
        </View>
        <View style={styles.heart}>
          <TouchableOpacity>
            <Ionicons
              name={nameHeart}
              size={28}
              style={styles.mar9}
              onPress={() => {
                onToggleHeart();
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.controlBox}>
          <TouchableOpacity>
            <Ionicons
              name="play-skip-back-outline"
              size={28}
              style={styles.mar9}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name={name}
              size={46}
              style={styles.blackColor}
              onPress={() => {
                onToggle();
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="play-skip-forward-outline"
              size={28}
              style={styles.mar9}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 96,
  },
  imageBox: {
    width: 300,
    height: 300,
    borderRadius: 12,
    marginBottom: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 5,
  },
  imageSong: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  txtTextBox: {},
  txtNameSong: {
    color: '#171717',
    fontFamily: 'Cochin',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txtNameSinger: {
    color: '#D9D9D9',
    textAlign: 'center',
    fontWeight: '300',
  },
  controlBox: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  heart: {
    marginTop: 12,
  },
  mar9: {
    marginTop: 9,
    color: '#151515',
  },
  blackColor: {
    color: '#151515',
  },
  backGround: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  lyric: {},
});

export default Player;
