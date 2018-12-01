import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import AuthForm from './AuthForm';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView>
          <AuthForm />
        </SafeAreaView>
      </Provider>
    );
  }
}
