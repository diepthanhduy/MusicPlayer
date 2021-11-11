import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

class Menu extends Component {
  state = {
    modalLogin: false,
    modalRigister: false,
  };
  setVisibleLogin = () => {
    this.setState({
      modalLogin: !this.state.modalLogin ? true : false,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.user}>
          <Ionicons
            name="person-outline"
            size={32}
            style={{color: '#fff', marginRight: 16, marginLeft: 12}}
            onPress={() => {
              this.onToggleHeart();
            }}
          />
          <View>
            <Text style={styles.userName}>Diệp Thanh Duy</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.setVisibleLogin();
          }}
          style={{width: 120}}>
          <View style={styles.logOut}>
            <Ionicons
              name="log-in-outline"
              size={32}
              style={{color: '#000', marginRight: 8, marginLeft: 16}}
            />
            <View>
              <Text style={{color: '#000'}}>Đăng nhập</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 120}}>
          <View style={styles.logOut}>
            <Ionicons
              name="log-out-outline"
              size={32}
              style={{color: '#000', marginRight: 8, marginLeft: 16}}
            />
            <View>
              <Text style={{color: '#000'}}>Đăng xuất</Text>
            </View>
          </View>
        </TouchableOpacity>

        <Modal visible={this.state.modalLogin}>
          <View style={styles.moContainer}>
            <View style={styles.moTitle}>
              <Text style={styles.textTilte}>ĐĂNG NHẬP</Text>
            </View>
            <View style={styles.moUser}>
              <TextInput editable maxLength={40} placeholder="Tài khoản" />
            </View>
            <View style={styles.moUser}>
              <TextInput
                editable
                maxLength={40}
                secureTextEntry={true}
                placeholder="Mật khẩu"
              />
            </View>
            <TouchableOpacity style={styles.moBtnLogin}>
              <View>
                <Text style={{fontWeight: 'bold', color: '#fff'}}>
                  Đăng nhập
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setVisibleLogin();
              }}>
              <Text>Trở lại</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user: {
    flexDirection: 'row',
    backgroundColor: '#B467DA',
    marginTop: 16,
    height: 64,
    alignItems: 'center',
  },
  userName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logOut: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  moContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moTitle: {
    marginBottom: 18,
  },
  textTilte: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  moUser: {
    borderWidth: 1,
    borderRadius: 6,
    width: '70%',
    marginTop: 8,
  },
  moBtnLogin: {
    marginTop: 46,
    marginBottom: 8,
    borderRadius: 6,
    width: '36%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B467DA',
    height: 42,
  },
});

export default Menu;
