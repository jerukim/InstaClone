import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { auth } from './store';

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
    return (
      <View>
        <Text>Instagram</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Username or email"
          onChangeText={login => this.setState({ login })}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
        />

        <Button onPress={this.handleSubmit} title="Login" />

        <Text>{this.props.isLoggedIn ? 'no user' : this.props.user.name}</Text>
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
});

export default connect(
  mapState,
  mapDispatch
)(Login);
