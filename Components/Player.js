import React, {useEffect, useState} from 'react';
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

const srtHostImg = 'https://4dd3-14-242-186-42.ngrok.io/img/';
const strHostMp3 = 'https://4dd3-14-242-186-42.ngrok.io/music/';

const Player = ({navigation, route}) => {
  const [name, setName] = useState('play-circle-outline');
  const [nameHeart, setNameHeart] = useState('heart-outline');
  const [temp, setTemp] = useState(0);
  const [music, setMusic] = useState();
  const [urlMusic, setUrl] = useState(route.params.FileNhac);
  const [urlImage, setImg] = useState(route.params.FileAnh);
  const [nameSong, setNameSong] = useState(route.params.nameSong);
  const [nameSinger, setNameSinger] = useState(route.params.nameSinger);
  const [data, setData] = useState([]);

  //load and play music
  const play = () => {
    var sound = new Sound(urlMusic, null, error => {
      if (error) {
        console.log(error);
        return;
      }
      sound.play(success => {
        console.log('end ', success);
        setName('play-circle-outline');
        sound.release();
      });
      setMusic(sound);
      setTemp(1);
    });
  };

  //handle on click next or back song
  const changeSong = () => {
    return fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .catch(error => {
        console.error(error);
      });
  };

  //Change pause or play button
  const onToggle = () => {
    if (name === 'play-circle-outline') {
      setName('pause-outline');
      if (temp === 0) {
        play();
      } else {
        music.play(success => {
          setName('play-circle-outline');
        });
      }
    } else {
      setName('play-circle-outline');
      music.pause();
    }
  };

  //change icon heart
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
