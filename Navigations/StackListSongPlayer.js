import React, {Component} from 'react';

import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import ListSong from '../Components/ListSong';
import Player from '../Components/Player';
import Chart from '../Components/Chart';

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

export default StackListSongPlayer;
