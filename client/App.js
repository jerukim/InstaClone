import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import { Login } from './Login';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView>
          <Login />
        </SafeAreaView>
      </Provider>
    );
  }
}
