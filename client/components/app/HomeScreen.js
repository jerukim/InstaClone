import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Home!</Text>
      </SafeAreaView>
    );
  }
}

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

export default HomeStack;

// screen: AppTabs,
// navigationOptions: {
//   headerTitle: 'Instagram',
// },
