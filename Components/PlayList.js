import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
  FlatList,
  Modal,
  Button,
  TextInput,
  Alert,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {useIsFocused} from '@react-navigation/native';

const {width, heigth} = Dimensions.get('window');
function Playlist() {
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();

  const [modal, setModal] = useState(false);
  const [tenPlayList, settenPlayList] = useState('');

  //kiểm tra user đã đăng nhập chưa
  const checkUser = () => {
    //typeof global.user !== 'undefined' &&
    if (typeof global.user !== 'undefined' && modal == false) {
      setModal(true);
    } else {
      Alert.alert('Thông báo', 'Vui lòng đăng nhập');
    }
  };

  //handle click back
  const back = () => {
    modal ? setModal(false) : setModal(true);
  };

  //handle khi người dùng đã thêm xong
  const addPlayList = () => {
    const data = {
      TenPlayList: tenPlayList,
      MaUser: global.user.MaUser,
    };
    console.log('data ', data);
    if (tenPlayList.length >= 1) {
      const requestOptions = {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      fetch(
        'https://46a9-2001-ee0-56b6-3790-14c2-3eba-32e6-b985.ngrok.io/api/playlist',
        requestOptions,
      )
        .then(() => {
          console.log('Added playlist');
          loadPlayList();
        })
        .catch(error => {
          Alert.alert('Thông báo', 'Vui lòng kiểm tra mạng');
          console.error(error);
        });
    }
  };

  //Load playlist đã có sẵn của một user
  const loadPlayList = () => {
    if (typeof global.user !== 'undefined') {
      fetch(
        `https://46a9-2001-ee0-56b6-3790-14c2-3eba-32e6-b985.ngrok.io/api/playlist/${global.user.MaUser}`,
      )
        .then(response => response.json())
        .then(json => {
          global.isLoaded = 1;
          setData(json);
        })
        .catch(error => {
          console.error(error);
        });
      console.log('done Load');
    }
  };

  if (isFocused && global.isLoaded === 0) {
    console.log('Play List is Focused');
    loadPlayList();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../Assets/ImageSongs/backgrd.png')}
        style={styles.backGround}
        blurRadius={80}
      />
      <View>
        <View style={styles.itemAdd}>
          <TouchableOpacity
            onPress={() => {
              checkUser();
            }}>
            <View style={styles.btnAdd}>
              <Ionicons
                name="add-circle-outline"
                size={36}
                style={{color: '#FDF7F8'}}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.titleBox}>
            <Text style={styles.txtTitle}>Tạo playlist mới</Text>
          </View>
        </View>
        <Modal visible={modal}>
          <Image
            source={require('../Assets/ImageSongs/backgrd.png')}
            style={styles.backGround}
            blurRadius={80}
          />
          <View style={styles.modal}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => {
                back();
              }}>
              <View style={styles.btnReturn}>
                <Ionicons
                  name="chevron-back-outline"
                  size={36}
                  style={{color: '#1D1D1D'}}
                />
                <Text style={styles.txtText}>Quay lại</Text>
              </View>
            </TouchableOpacity>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Nhập tên Play list ..."
                placeholderTextColor="#9D9D9D"
                onChangeText={text => settenPlayList(text)}
                value={tenPlayList}
              />
              {tenPlayList.length < 1 ? (
                <Text style={styles.textWarn}>Không được bỏ trống</Text>
              ) : null}
            </View>

            <View style={styles.btnDone}>
              <Button
                onPress={() => {
                  addPlayList();
                  back();
                }}
                title="Xong"
              />
            </View>
          </View>
        </Modal>
      </View>
      <FlatList
        style={styles.scroll}
        data={data}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.itemPlayList}>
              <Text style={styles.txtTitlePlayList}>{item.TenPlayList}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
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
  itemAdd: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 8,
    width: width,
    marginTop: 12,
  },
  btnAdd: {
    width: 82,
    height: 82,
    borderRadius: 6,
    backgroundColor: '#8946AD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBox: {
    marginLeft: 14,
  },
  txtTitle: {
    color: '#8946AD',
    fontWeight: '600',
  },
  modal: {
    fex: 1,
    justifyContent: 'center',
    marginTop: 8,
    marginLeft: 12,
    marginRight: 12,
    height: 200,
    borderRadius: 4,
  },
  input: {
    height: 54,
    margin: 8,
    borderWidth: 1,
    padding: 12,
    borderRadius: 4,
  },
  btnReturn: {
    marginLeft: 5,
    flexDirection: 'row',
  },
  txtText: {
    color: '#1D1D1D',
    fontWeight: 'bold',
    marginTop: 11,
  },
  touch: {
    width: 100,
  },
  btnDone: {
    marginLeft: 92,
    marginRight: 92,
    borderRadius: 24,
  },
  textWarn: {
    color: '#EE5147',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default Playlist;
