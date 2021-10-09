import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import ListSong from '../Components/ListSong';
import Player from '../Components/Player';

const Stack = createStackNavigator();

class StackListSongPlayer extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ListSong" component={ListSong} />
        <Stack.Screen name="Player" component={Player} />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({});

export default StackListSongPlayer;
