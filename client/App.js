import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthStack from './components/auth';
import AuthLoadingScreen from './components/auth/AuthLoadingScreen';

import AppStack from './components/app';

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
