import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { auth, removeUser } from './store';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
  }

  handleSubmit = () => {
    const { login, password } = this.state;
    this.props.auth(login, password);
  };

  render() {
    const { user, name, displayName, error } = this.props;
    return (
      <View>
        <Text>Instagram</Text>
        <TextInput
          style={{ height: 40 }}
          autoCapitalize="none"
          placeholder="Username or email"
          onChangeText={login => this.setState({ login })}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
        />

        <Button onPress={this.handleSubmit} title="Login" />

        {error &&
          Alert.alert(
            error.response.data.title,
            `${error.response.data.text}`,
            [
              {
                text: 'Try Again',
                onPress: () => this.props.removeUser(),
              },
            ]
          )}
      </View>
    );
  }
}

const mapLogin = state => ({
  user: state.user,
  name: 'login',
  displayName: 'Login',
  error: state.user.error,
});

const mapSignup = state => ({
  user: state.user,
  name: 'signup',
  displayName: 'Sign Up',
  error: state.user.error,
});

const mapDispatch = dispatch => ({
  auth: (login, password) => dispatch(auth(login, password, 'login')),
  removeUser: () => dispatch(removeUser()),
});

export const Login = connect(
  mapLogin,
  mapDispatch
)(AuthForm);
export const Signup = connect(
  mapSignup,
  mapDispatch
)(AuthForm);
