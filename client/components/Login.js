import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
  }

  handleChange = text => {
    this.setState({ text });
  };

  handleSubmit = () => {};

  render() {
    const { login, password } = this.state;
    return (
      <View>
        <Text>Instagram</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Phone number, username or email"
          onChangeText={login => this.setState({ login })}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
        />
        <Text>{this.state.login}</Text>
        <Text>{this.state.password}</Text>
        <Button title="Login" disabled={login === '' || password === ''} />
        <Text>---- OR ----</Text>
        <Button title="Continue with Facebook" />
        <Text>Don't have an account?</Text>
        <Button title="Sign Up." />
      </View>
    );
  }
}

export default Login;
