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
    modalRegister: false,
    toggleBtn: true,
    user: '',
    pass: '',
    userName: '',
    returnData: {},
  };
  setVisibleLogin = () => {
    this.setState({
      modalLogin: !this.state.modalLogin ? true : false,
    });
  };

  setVisibleRegister = () => {
    this.setState({
      modalRegister: !this.state.modalRegister ? true : false,
    });
  };

  //Log out
  logout = () => {
    this.setState({toggleBtn: true});
    this.setState({returnData: {}});
  };

  //Login
  login = () => {
    const data = {TaiKhoan: this.state.user, MatKhau: this.state.pass};
    console.log(data);

    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    fetch(
      'https://f676-2001-ee0-56b0-d620-3563-5d49-cd2-7b90.ngrok.io/api/login',
      requestOptions,
    )
      .then(Response => Response.json())
      .then(result => {
        if (result.TaiKhoan != null) {
          console.log(result);
          alert('Đăng nhập thành công');
          this.setState({returnData: result});
          this.setState({modalLogin: false});
          this.setState({toggleBtn: false});
        } else {
          alert('Đăng nhập thất bại');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Nut dang ky
  register = () => {
    const data = {
      TaiKhoan: this.state.user,
      MatKhau: this.state.pass,
      TenUser: this.state.userName,
    };
    console.log(data);

    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    fetch(
      'https://bcaa-2001-ee0-56b0-d620-ad20-5925-e3c6-c7cb.ngrok.io/api/register',
      requestOptions,
    )
      .then(Response => Response.json())
      .then(result => {
        if (result.TaiKhoan != null) {
          console.log(result);
          alert('Đăng ký thành công');
          this.setState({returnData: result});
          this.setState({modalRegister: false});
          this.setState({toggleBtn: false});
        } else {
          alert('Đăng ký thất bại');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    const {user, pass, returnData, userName} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.user}>
          <Ionicons
            name="person-outline"
            size={32}
            style={{color: '#fff', marginRight: 16, marginLeft: 12}}
          />
          <View>
            <Text style={styles.userName}>{returnData.TenUser}</Text>
          </View>
        </View>
        {/* Nút đăng nhập */}
        {this.state.toggleBtn && (
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
                <Text style={{color: '#000', fontSize: 20}}>Đăng nhập</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}

        {/* Nút đăng xuất */}
        {!this.state.toggleBtn && (
          <TouchableOpacity
            style={{width: 120}}
            onPress={() => {
              this.logout();
            }}>
            <View style={styles.logOut}>
              <Ionicons
                name="log-out-outline"
                size={32}
                style={{color: '#000', marginRight: 8, marginLeft: 16}}
              />
              <View>
                <Text style={{color: '#000', fontSize: 20}}>Đăng xuất</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}

        {/* Nut dang ky */}
        <TouchableOpacity
          style={{width: 120}}
          onPress={() => {
            this.setVisibleRegister();
          }}>
          <View style={styles.logOut}>
            <Ionicons
              name="person-add-outline"
              size={28}
              style={{color: '#000', marginRight: 8, marginLeft: 16}}
            />
            <View>
              <Text style={{color: '#000', fontSize: 20, marginLeft: 4}}>
                Đăng ký
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <Modal visible={this.state.modalLogin}>
          <View style={styles.moContainer}>
            <View style={styles.moTitle}>
              <Text style={styles.textTilte}>ĐĂNG NHẬP</Text>
            </View>
            <View style={styles.moUser}>
              <TextInput
                editable
                maxLength={40}
                placeholder="Tài khoản"
                onChangeText={text => this.setState({user: text})}
                value={user}
              />
            </View>
            <View style={styles.moUser}>
              <TextInput
                editable
                maxLength={40}
                secureTextEntry={true}
                placeholder="Mật khẩu"
                onChangeText={text => this.setState({pass: text})}
                value={pass}
              />
            </View>
            <TouchableOpacity
              style={styles.moBtnLogin}
              onPress={() => {
                this.login();
              }}>
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

        {/* modal dang ky */}
        <Modal visible={this.state.modalRegister}>
          <View style={styles.moContainer}>
            <View style={styles.moTitle}>
              <Text style={styles.textTilte}>ĐĂNG KÝ</Text>
            </View>
            <View style={styles.moUser}>
              <TextInput
                editable
                maxLength={40}
                placeholder="Tên người dùng"
                onChangeText={text => this.setState({userName: text})}
                value={userName}
              />
            </View>
            <View style={styles.moUser}>
              <TextInput
                editable
                maxLength={40}
                placeholder="Tài khoản"
                onChangeText={text => this.setState({user: text})}
                value={user}
              />
            </View>
            <View style={styles.moUser}>
              <TextInput
                editable
                maxLength={40}
                secureTextEntry={true}
                placeholder="Mật khẩu"
                onChangeText={text => this.setState({pass: text})}
                value={pass}
              />
            </View>
            <TouchableOpacity
              style={styles.moBtnLogin}
              onPress={() => {
                this.register();
              }}>
              <View>
                <Text style={{fontWeight: 'bold', color: '#fff'}}>Đăng ký</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setVisibleRegister();
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
