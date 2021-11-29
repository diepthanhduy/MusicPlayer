import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Modaladdplaylist from './modalAddPlayList';

const {width, heigth} = Dimensions.get('window');
class Playlist extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../Assets/ImageSongs/backgrd.png')}
          style={styles.backGround}
          blurRadius={80}
        />
        <Modaladdplaylist />
        <ScrollView style={styles.scroll}>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.itemPlayList}>
              <Text style={styles.txtTitlePlayList}>Nhạc của mùa xuân</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backGround: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  scroll: {
    width: width,
    marginTop: 12,
    marginBottom: 90,
  },
  itemPlayList: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 16,
    marginRight: 16,
    padding: 21,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    shadowColor: '#FEFEFE',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  txtTitlePlayList: {
    color: '#1D1D1D',
    fontFamily: 'Cochin',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 12,
  },
});

export default Playlist;
