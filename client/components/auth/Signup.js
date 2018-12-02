import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { auth } from '../../store';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      username: '',
      password: '',
    };
  }

  handleSubmit = () => {};

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text style={{ fontSize: 40, textAlign: 'center' }}>Instagram</Text>
        <TextInput
          style={{ height: 40, backgroundColor: 'rgb(249, 249, 249)' }}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={{ height: 40, backgroundColor: 'rgb(249, 249, 249)' }}
          autoCapitalize="none"
          placeholder="Name"
          onChangeText={name => this.setState({ name })}
        />
        <TextInput
          style={{ height: 40, backgroundColor: 'rgb(249, 249, 249)' }}
          autoCapitalize="none"
          placeholder="Username"
          onChangeText={username => this.setState({ username })}
        />
        <TextInput
          style={{ height: 40, backgroundColor: 'rgb(249, 249, 249)' }}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
        />

        <Button onPress={this.handleSubmit} title="Signup" />

        <Text style={{ textAlign: 'center' }}>
          <Text>Don't have an account? </Text>
          <Text
            style={{ color: 'rgb(45, 130, 236)' }}
            onPress={() => navigate('Signup')}
          >
            Sign Up.
          </Text>
        </Text>
      </View>
    );
  }
}

export default connect(
  null,
  null
)(Signup);

{
  /* <Text style={{ textAlign: 'center' }}>
  <Text>Already have an account? </Text>
  <Text
    style={{ color: 'rgb(45, 130, 236)' }}
    onPress={() => this.setState({ type: 'Login' })}
  >
    Sign In.
  </Text>
</Text>; */
}
