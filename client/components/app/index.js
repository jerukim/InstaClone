import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import PostScreen from './PostScreen';
import LikesScreen from './LikesScreen';
import UserScreen from './UserScreen';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'Instagram',
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
);
const ExploreStack = createStackNavigator(
  {
    Explore: {
      screen: ExploreScreen,
      navigationOptions: {
        headerTitle: 'Search',
      },
    },
  },
  {
    initialRouteName: 'Explore',
  }
);
const PostStack = createStackNavigator(
  {
    Post: {
      screen: PostScreen,
      navigationOptions: {
        headerTitle: 'All Photos',
      },
    },
  },
  {
    initialRouteName: 'Post',
  }
);
const LikesStack = createStackNavigator(
  {
    Likes: {
      screen: LikesScreen,
      navigationOptions: {
        headerTitle: 'Activity',
      },
    },
  },
  {
    initialRouteName: 'Likes',
  }
);
const UserStack = createStackNavigator(
  {
    User: {
      screen: UserScreen,
      navigationOptions: {
        headerTitle: 'You',
      },
    },
  },
  {
    initialRouteName: 'User',
  }
);

const AppTabs = createBottomTabNavigator(
  {
    HomeTab: HomeStack,
    ExploreTab: ExploreStack,
    PostTab: PostStack,
    LikesTab: LikesStack,
    UserTab: UserStack,
  },
  {
    initialRouteName: 'HomeTab',
  }
);

export default AppTabs;
