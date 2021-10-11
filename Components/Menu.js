import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

class Menu extends Component {
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
});

export default Menu;
