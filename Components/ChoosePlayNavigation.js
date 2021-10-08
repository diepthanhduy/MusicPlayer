import ListSong from './ListSong';
import Player from './Player';
import {screateStackNavigator, createAppContainer} from 'react-navigation';

const screens = {
  ListSong: {
    screen: ListSong,
  },
  Player: {
    screen: Player,
  },
};

const config = {
  headerMode: 'none',
  initialRouteName: 'ListSong',
};

const MainNavigator = screateStackNavigator(screens, config);
export default createAppContainer(MainNavigator);
