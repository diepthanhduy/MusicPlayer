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

class Player extends Component {
  state = {
    name: 'play-circle-outline',
  };
  onToggle = () => {
    if (this.state.name === 'play-circle-outline') {
      this.setState({name: 'pause-outline'});
    } else {
      this.setState({name: 'play-circle-outline'});
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../Assets/ImageSongs/song1YeuLaCuoi.jpg')}
          style={styles.backGround}
          blurRadius={80}
        />
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
                style={styles.mar9}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name={this.state.name}
                size={46}
                style={styles.blackColor}
                onPress={() => {
                  this.onToggle();
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
    backgroundColor: 'red',
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
    marginTop: 54,
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
});

export default Player;
