import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Modal,
  TextInput,
  Button,
  Image,
  Alert,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, heigth} = Dimensions.get('window');

class Modaladdplaylist extends Component {
  state = {
    modal: false,
  };
  checkUser = () => {
    if (typeof global.user !== 'undefined' && this.state.modal == false) {
      this.setState({modal: true});
    } else {
      Alert.alert('Thông báo', 'Vui lòng đăng nhập');
    }
  };
  back = () => {
    this.state.modal
      ? this.setState({modal: false})
      : this.setState({modal: true});
  };
  render() {
    return (
      <View>
        <View style={styles.itemAdd}>
          <TouchableOpacity
            onPress={() => {
              this.checkUser();
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
        <Modal visible={this.state.modal}>
          <Image
            source={require('../Assets/ImageSongs/backgrd.png')}
            style={styles.backGround}
            blurRadius={80}
          />
          <View style={styles.modal}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => {
                this.back();
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
              />
            </View>
            <View style={styles.btnDone}>
              <Button title="Xong" />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemAdd: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 8,
    width: width,
    marginTop: 12,
  },
  backGround: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
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
    margin: 12,
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
});

export default Modaladdplaylist;
