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
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Input} from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

const srtHostImg =
  'https://46a9-2001-ee0-56b6-3790-14c2-3eba-32e6-b985.ngrok.io/img/';
const strHostMp3 =
  'https://46a9-2001-ee0-56b6-3790-14c2-3eba-32e6-b985.ngrok.io/music/';

//./ngrok authtoken 20Mvf0gzp6spGCIwCNfs8hsWYbE_3FFgUFUHbWXpae2P1nMeb

class ListSong extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  async getListSong() {
    try {
      const response = await fetch(
        'https://46a9-2001-ee0-56b6-3790-14c2-3eba-32e6-b985.ngrok.io/api/song',
      );
      const json = await response.json();
      this.setState({data: json});
      global.isLoaded = 0;
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({isLoading: false});
    }
  }

  checkIsPlaying() {
    if (typeof global.music !== 'undefined') {
      if (global.music._playing) {
        global.music.pause();
      }
    }
  }

  componentDidMount() {
    this.getListSong();
  }
  render() {
    const {data, isLoading} = this.state;
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
            onChange={() => {}}
          />
        </View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            style={styles.scroll}
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Player', {
                    FileAnh: srtHostImg + item.FileAnh,
                    FileNhac: strHostMp3 + item.FileNhac,
                    nameSong: item.TenBaiHat,
                    nameSinger: item.TenNgheSi,
                  });
                  this.checkIsPlaying();
                }}>
                <View style={styles.songItem}>
                  <View style={styles.image}>
                    <Image
                      source={{uri: srtHostImg + item.FileAnh}}
                      style={styles.imageSong}
                    />
                  </View>

                  <View>
                    <View style={styles.txtNameBox}>
                      <Text style={styles.txtNameSong}>{item.TenBaiHat}</Text>
                    </View>
                    <View style={styles.txtSingerBox}>
                      <Text style={styles.txtNameSinger}>{item.TenNgheSi}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
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
    width: '100%',
    height: '100%',
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
