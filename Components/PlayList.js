import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, heigth} = Dimensions.get('window');

class Playlist extends Component {
  render() {
    return (
      <SafeAreaView>
        <TouchableOpacity>
          <View style={styles.itemAdd}>
            <TouchableOpacity onPress={() => {}}>
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
        </TouchableOpacity>
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
  scroll: {
    width: width,
    marginTop: 12,
    marginBottom: 90,
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
  itemPlayList: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#DDDDDB',
    padding: 21,
    borderRadius: 4,
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
