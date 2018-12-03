import React, { Component } from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';

import AuthStack from './components/auth';
import AuthLoadingScreen from './components/auth/AuthLoadingScreen';

import AppTabs from './components/app';

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: {
        screen: AppTabs,
        navigationOptions: {
          headerTitle: 'Instagram',
        },
      },
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
