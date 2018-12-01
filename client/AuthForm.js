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
      type: 'Login',
    };
  }

  handleSubmit = () => {
    const { login, password } = this.state;
    this.props.auth(login, password);
  };

  render() {
    console.log('TYPE', this.state.type);
    const { user, name, displayName, error } = this.props;
    const { type } = this.state;
    return (
      <View>
        <Text style={{ fontSize: 40, textAlign: 'center' }}>Instagram</Text>
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
        <Button onPress={this.handleSubmit} title={this.state.type} />

        {type === 'Login' ? (
          <Text style={{ textAlign: 'center' }}>
            <Text>Don't have an account? </Text>
            <Text
              style={{ color: 'rgb(45, 130, 236)' }}
              onPress={() => this.setState({ type: 'Sign Up' })}
            >
              Sign Up.
            </Text>
          </Text>
        ) : (
          <Text style={{ textAlign: 'center' }}>
            <Text>Already have an account? </Text>
            <Text
              style={{ color: 'rgb(45, 130, 236)' }}
              onPress={() => this.setState({ type: 'Login' })}
            >
              Sign In.
            </Text>
          </Text>
        )}

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

export default connect(
  null,
  mapDispatch
)(AuthForm);
