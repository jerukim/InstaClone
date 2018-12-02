import React, { Component } from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import AuthLoadingScreen from './components/auth/AuthLoadingScreen';

const AppStack = createStackNavigator({
  Login: Login,
});

const AuthStack = createStackNavigator({
  Login: Login,
  Signup: Signup,
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
