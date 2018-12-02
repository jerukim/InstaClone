import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import { connect } from 'react-redux';

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
    return (
      <View>
        <Text>place holder</Text>
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
