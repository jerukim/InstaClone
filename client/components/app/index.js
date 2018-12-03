import { createBottomTabNavigator } from 'react-navigation';

import HomeStack from './HomeScreen';
import PostScreen from './PostScreen';
import LikesScreen from './LikesScreen';
import UserScreen from './UserScreen';

const AppTabs = createBottomTabNavigator(
  {
    HomeTab: HomeStack,
    Post: PostScreen,
    Likes: LikesScreen,
    User: UserScreen,
  },
  {
    initialRouteName: 'HomeTab',
  }
);

export default AppTabs;
