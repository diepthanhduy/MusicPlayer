import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/native-stack';

class Player extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={styles.imageBox}>
            <Image
              source={require('../Assets/ImageSongs/song1YeuLaCuoi.jpg')}
              style={styles.imageSong}
            />
          </View>

          <View style={styles.txtTextBox}>
            <Text style={styles.txtNameSong}>Yêu là cưới</Text>
            <Text style={styles.txtNameSinger}>Phát La Làng</Text>
          </View>
          <View style={styles.controlBox}>
            <TouchableOpacity>
              <Ionicons
                name="play-skip-back-outline"
                size={28}
                style={{marginTop: 9}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="play-circle-outline" size={46} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name="play-skip-forward-outline"
                size={28}
                style={{marginTop: 9}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBox: {
    width: 300,
    height: 300,
    marginBottom: 24,
  },
  imageSong: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  txtTextBox: {},
  txtNameSong: {
    color: '#E7E7E7',
    fontFamily: 'Cochin',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txtNameSinger: {
    color: '#D2D2D2',
    textAlign: 'center',
    fontWeight: '300',
  },
  controlBox: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    marginTop: 54,
  },
});

export default Player;
