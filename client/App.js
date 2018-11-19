import React, { Component } from 'react';
import { Text, View, Image, SafeAreaView, StyleSheet } from 'react-native';

import Login from './components/Login';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    );
  }
}
