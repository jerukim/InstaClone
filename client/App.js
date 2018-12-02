import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import AuthLoading from './components/auth/AuthLoading';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
  },
  {
    initialRouteName: 'Login',
  }
);

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Signup: Signup,
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      // AuthLoading: AuthLoading,
      App: AppNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    }
  )
);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
