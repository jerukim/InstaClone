import React, { Component } from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

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
    //sign up for debugging purposes, login as default
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
