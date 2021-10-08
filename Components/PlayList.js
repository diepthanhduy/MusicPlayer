import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class Playlist extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'black'}}>Giao diện Playlist</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Playlist;
