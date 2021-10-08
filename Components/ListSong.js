import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Input} from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, heigth} = Dimensions.get('window');

class ListSong extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Input
            style={styles.search}
            placeholder="Search ..."
            leftIcon={
              <Ionicons
                style={{color: '#ccc'}}
                name="search-outline"
                size={24}
              />
            }
          />
        </View>
        <ScrollView style={{width: width}}>
          <TouchableOpacity
            onPress={() => {
              alert('Sẽ chuyển sang giao diện phát nhạc');
            }}>
            <View style={styles.songItem}>
              <View style={styles.image}>
                <Image
                  source={require('../Assets/ImageSongs/song1YeuLaCuoi.jpg')}
                  style={styles.imageSong}
                />
              </View>

              <View>
                <View style={styles.txtNameBox}>
                  <Text style={styles.txtNameSong}>Yêu là cưới</Text>
                </View>
                <View style={styles.txtSingerBox}>
                  <Text style={styles.txtNameSinger}>Phát La Làng</Text>
                </View>
              </View>
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
  search: {},
  songItem: {
    flex: 1,
    flexDirection: 'row',
    height: 82,
    backgroundColor: '#DDDDDB',
    borderRadius: 4,
    marginBottom: 8,
    marginLeft: 8,
    marginRight: 8,
  },
  image: {
    padding: 5,
  },
  imageSong: {
    width: 72,
    height: 72,
    borderRadius: 4,
  },
  txtNameBox: {
    padding: 8,
  },
  txtNameSong: {
    color: '#1D1D1D',
    fontFamily: 'Cochin',
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtSingerBox: {
    paddingLeft: 16,
  },
  txtNameSinger: {
    color: '#696A68',
  },
});

export default ListSong;
