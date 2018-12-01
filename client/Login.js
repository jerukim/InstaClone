import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { auth, removeUser } from './store';

class Login extends Component {
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
    const { isLoggedIn, user } = this.props;
    const { login, password } = this.state;
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

        <Text>
          {login}, {password}
        </Text>

        <Text>{isLoggedIn ? user.name : 'no user'}</Text>

        {user.error &&
          Alert.alert('Incorrect Username', `${user.error.response.data}`, [
            { text: 'Try Again', onPress: () => this.props.removeUser() },
          ])}
      </View>
    );
  }
}

const mapState = state => ({
  isLoggedIn: !!state.user.id,
  user: state.user,
});

const mapDispatch = dispatch => ({
  auth: (login, password) => dispatch(auth(login, password, 'login')),
  removeUser: () => dispatch(removeUser()),
});

export default connect(
  mapState,
  mapDispatch
)(Login);
