// import React, {Component} from 'react';
// import {
//   View,
//   StyleSheet,
//   SafeAreaView,
//   Text,
//   ScrollView,
//   Dimensions,
//   TextInput,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import {Input} from 'react-native-elements';

// import Ionicons from 'react-native-vector-icons/Ionicons';

// const {width, heigth} = Dimensions.get('window');
// //https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3

// class ListSong extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const {navigation} = this.props;
//     return (
//       <View>
//         <Image
//           source={require('../Assets/ImageSongs/backgrd.png')}
//           style={styles.backGround}
//           blurRadius={80}
//         />
//         <View>
//           <Input
//             style={styles.search}
//             placeholder="Search ..."
//             leftIcon={
//               <Ionicons
//                 style={{color: '#ccc'}}
//                 name="search-outline"
//                 size={24}
//               />
//             }
//           />
//         </View>
//         <ScrollView style={styles.scroll}>
//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate('Player', {
//                 id: 1,
//                 nameSong: 'Yêu là cưới params',
//                 nameSinger: 'Duy hát hay',
//                 FileNhac:
//                   'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
//               });
//             }}>
//             <View style={styles.songItem}>
//               <View style={styles.image}>
//                 <Image
//                   source={require('../Assets/ImageSongs/song1YeuLaCuoi.jpg')}
//                   style={styles.imageSong}
//                 />
//               </View>

//               <View>
//                 <View style={styles.txtNameBox}>
//                   <Text style={styles.txtNameSong}>Yêu là cưới</Text>
//                 </View>
//                 <View style={styles.txtSingerBox}>
//                   <Text style={styles.txtNameSinger}>Phát La Làng</Text>
//                 </View>
//               </View>
//             </View>
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate('Player', {
//                 id: 2,
//                 nameSong: 'Crazy',
//                 nameSinger: 'Duy hát hay',
//                 FileNhac:
//                   'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_1MG.mp3',
//               });
//             }}>
//             <View style={styles.songItem}>
//               <View style={styles.image}>
//                 <Image
//                   source={require('../Assets/ImageSongs/song3Crazy.jpg')}
//                   style={styles.imageSong}
//                 />
//               </View>

//               <View>
//                 <View style={styles.txtNameBox}>
//                   <Text style={styles.txtNameSong}>Crazy</Text>
//                 </View>
//                 <View style={styles.txtSingerBox}>
//                   <Text style={styles.txtNameSinger}>Duy</Text>
//                 </View>
//               </View>
//             </View>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backGround: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: width,
//     height: 9000,
//   },
//   search: {},
//   songItem: {
//     flex: 1,
//     flexDirection: 'row',
//     height: 82,
//     borderRadius: 4,
//     marginBottom: 8,
//     marginLeft: 8,
//     marginRight: 8,
//   },
//   image: {
//     padding: 5,
//   },
//   imageSong: {
//     width: 72,
//     height: 72,
//     borderRadius: 4,
//   },
//   txtNameBox: {
//     padding: 8,
//   },
//   txtNameSong: {
//     color: '#1D1D1D',
//     fontFamily: 'Cochin',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   txtSingerBox: {
//     paddingLeft: 16,
//   },
//   txtNameSinger: {
//     color: '#696A68',
//   },
//   scroll: {
//     width: width,
//     marginBottom: 70,
//   },
// });
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
  'https://f676-2001-ee0-56b0-d620-3563-5d49-cd2-7b90.ngrok.io/img/';
const strHostMp3 =
  'https://f676-2001-ee0-56b0-d620-3563-5d49-cd2-7b90.ngrok.io/music/';

//./ngrok authtoken 20Mvf0gzp6spGCIwCNfs8hsWYbE_3FFgUFUHbWXpae2P1nMeb

class Chart extends Component {
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
        'https://f676-2001-ee0-56b0-d620-3563-5d49-cd2-7b90.ngrok.io/api/song',
      );
      const json = await response.json();
      this.setState({data: json});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({isLoading: false});
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

export default Chart;
