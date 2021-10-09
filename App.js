/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ListSong from './Components/ListSong';
import PlayList from './Components/PlayList';
import Chart from './Components/Chart';
import Menu from './Components/Menu';
import StackListSongPlayer from './Navigations/StackListSongPlayer';

const {width, heigth} = Dimensions.get('window');
const Tab = createBottomTabNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBarOptions={{
          activeTintColor: '#8243A3',
          inactiveTintColor: '#7C8288',
        }}>
        <Tab.Screen
          name="StackListSongPlayer"
          component={StackListSongPlayer}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Ionicons style={{color: color}} name="home-outline" size={28} />
            ),
          }}
        />

        <Tab.Screen
          name="PlayList"
          component={PlayList}
          options={{
            tabBarLabel: 'Play list',
            tabBarIcon: ({color}) => (
              <Ionicons
                style={{color: color}}
                name="musical-notes-outline"
                size={28}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Chart"
          component={Chart}
          options={{
            tabBarLabel: 'Chart',
            tabBarIcon: ({color}) => (
              <Ionicons
                style={{color: color}}
                name="bar-chart-outline"
                size={28}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarLabel: 'More',
            tabBarIcon: ({color}) => (
              <Ionicons style={{color: color}} name="menu-outline" size={28} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBox: {
    paddingVertical: 10,
    width: width,
    alignItems: 'center',
    borderTopWidth: 0.35,
    borderColor: '#ccc',
  },
  bottomControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default App;
