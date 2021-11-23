import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Sound from 'react-native-sound';

const srtHostImg =
  'https://3b44-2001-ee0-56b0-d620-b927-ad0e-3b16-a2e0.ngrok.io/img/';
const strHostMp3 =
  'https://3b44-2001-ee0-56b0-d620-b927-ad0e-3b16-a2e0.ngrok.io/music/';

const Player = ({navigation, route}) => {
  const [name, setName] = useState('pause-outline');
  const [nameHeart, setNameHeart] = useState('heart-outline');
  const [music, setMusic] = useState({});
  const [urlMusic, setUrl] = useState(route.params.FileNhac);
  const [urlImage, setImg] = useState(route.params.FileAnh);
  const [nameSong, setNameSong] = useState(route.params.nameSong);
  const [nameSinger, setNameSinger] = useState(route.params.nameSinger);
  //const [temp, setTemp] = useState(0);
  const [isLoading, setLoading] = useState(false);
  // const play = () => {
  //   var sound = new Sound(urlMusic, null, error => {
  //     if (error) {
  //       console.log(error);
  //       return;
  //     }
  //     sound.play(success => {
  //       console.log('end ', success);
  //       setName('play-circle-outline');
  //       sound.release();
  //     });
  //     setLoading(true);
  //     setTemp(1);
  //     setMusic(sound);
  //   });
  // };

  //load and play music
  useEffect(() => {
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
      setLoading(true);
      setMusic(sound);
    });
  }, [urlMusic]);

  //handle on click next or back song
  const changeSong = () => {
    //nhận một bài hát mới khi bấm next
    if (name === 'pause-outline') {
      music.pause();
      setLoading(false);
      fetch(
        'https://3b44-2001-ee0-56b0-d620-b927-ad0e-3b16-a2e0.ngrok.io/api/randsong',
      )
        .then(response => response.json())
        .then(json => {
          setUrl(strHostMp3 + json.FileNhac);
          setImg(srtHostImg + json.FileAnh);
          setNameSong(json.TenBaiHat);
          setNameSinger(json.TenNgheSi);
          setLoading(true);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      setLoading(false);
      fetch(
        'https://3b44-2001-ee0-56b0-d620-b927-ad0e-3b16-a2e0.ngrok.io/api/randsong',
      )
        .then(response => response.json())
        .then(json => {
          setUrl(strHostMp3 + json.FileNhac);
          setImg(srtHostImg + json.FileAnh);
          setNameSong(json.TenBaiHat);
          setNameSinger(json.TenNgheSi);
          setName('pause-outline');
          setLoading(true);
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  //Change pause or play button
  const onToggle = () => {
    if (name === 'play-circle-outline') {
      setName('pause-outline');
      music.play(success => {
        setName('play-circle-outline');
      });
      // }
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
        source={{uri: urlImage}}
        style={styles.backGround}
        blurRadius={80}
      />
      <View style={styles.mainContainer}>
        <View style={styles.imageBox}>
          <Image source={{uri: urlImage}} style={styles.imageSong} />
        </View>

        <View style={styles.txtTextBox}>
          <Text style={styles.txtNameSong}>{nameSong}</Text>
          <Text style={styles.txtNameSinger}>{nameSinger}</Text>
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
          {isLoading ? (
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
          ) : (
            <ActivityIndicator />
          )}

          <TouchableOpacity>
            <Ionicons
              name="play-skip-forward-outline"
              size={28}
              style={styles.mar9}
              onPress={() => {
                changeSong();
              }}
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
