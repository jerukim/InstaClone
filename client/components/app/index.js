import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import PostScreen from './PostScreen';
import LikesScreen from './LikesScreen';
import UserScreen from './UserScreen';

const AppTabs = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Post: PostScreen,
    Likes: LikesScreen,
    User: UserScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default AppTabs;
