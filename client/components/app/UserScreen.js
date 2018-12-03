import React from 'react';
import { connect } from 'react-redux';
import { Text, SafeAreaView, Button } from 'react-native';
import { removeUser } from '../../store';

class UserScreen extends React.Component {
  logout = () => {
    const { navigate } = this.props.navigation;
    this.props.removeUser();
    navigate('Auth');
  };

  render() {
    return (
      <SafeAreaView>
        <Text>USERS!</Text>
        <Button title="Sign Out" onPress={this.logout} />
      </SafeAreaView>
    );
  }
}

const mapDispatch = dispatch => ({
  removeUser: () => dispatch(removeUser()),
});

export default connect(
  null,
  mapDispatch
)(UserScreen);
