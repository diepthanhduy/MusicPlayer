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
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, heigth} = Dimensions.get('window');

class Modaladdplaylist extends Component {
  state = {
    modal: false,
  };
  setVisible = () => {
    this.setState({
      modal: !this.state.modal ? true : false,
    });
  };
  render() {
    return (
      <View>
        <View style={styles.itemAdd}>
          <TouchableOpacity
            onPress={() => {
              this.setVisible();
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
          <View style={styles.modal}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => {
                this.setVisible();
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
    marginTop: 150,
    backgroundColor: '#F0F0F0',
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
    marginLeft: 16,
    marginRight: 16,
  },
});

export default Modaladdplaylist;
