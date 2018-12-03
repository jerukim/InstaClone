import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { auth, removeUser } from '../../store';

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
    const { navigate } = this.props.navigation;
    const { error } = this.props;
    return (
      <View>
        <Text style={{ fontSize: 40, textAlign: 'center' }}>Instagram</Text>
        <TextInput
          style={{ height: 40, backgroundColor: 'rgb(249, 249, 249)' }}
          autoCapitalize="none"
          placeholder="Username or email"
          onChangeText={login => this.setState({ login })}
        />
        <TextInput
          style={{ height: 40, backgroundColor: 'rgb(249, 249, 249)' }}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
        />
        <Button onPress={this.handleSubmit} title="Login" />

        <Text style={{ textAlign: 'center' }}>
          <Text>Don't have an account? </Text>
          <Text
            style={{ color: 'rgb(45, 130, 236)' }}
            onPress={() => navigate('Signup')}
          >
            Sign Up.
          </Text>
        </Text>

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

const mapState = state => ({
  error: state.user.error,
});

const mapDispatch = dispatch => ({
  auth: (login, password) => dispatch(auth('login', login, password)),
  removeUser: () => dispatch(removeUser()),
});

export default connect(
  mapState,
  mapDispatch
)(Login);
