import { createStackNavigator } from 'react-navigation';

import Login from './Login';
import Signup from './Signup';

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Signup: Signup,
  },
  {
    initialRouteName: 'Login',
  }
);

export default AuthStack;
