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
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Image
          source={require('../Assets/ImageSongs/backgrd.png')}
          style={styles.backGround}
          blurRadius={80}
        />
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
        <ScrollView style={styles.scroll}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Player', {
                id: 1,
                nameSong: 'Yêu là cưới params',
                nameSinger: 'Duy hát hay',
              });
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Player');
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
      </View>
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
    width: width,
    height: 9000,
  },
  search: {},
  songItem: {
    flex: 1,
    flexDirection: 'row',
    height: 82,
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
  scroll: {
    width: width,
    marginBottom: 70,
  },
});

export default ListSong;
