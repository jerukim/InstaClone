import React from 'react';
import { connect } from 'react-redux';
import { Text, SafeAreaView, Button } from 'react-native';
import { removeUser, fetchUserData } from '../../store';

class UserScreen extends React.Component {
  logout = () => {
    const { navigate } = this.props.navigation;
    this.props.removeUser();
    navigate('Auth');
  };

  fetchUserData = userId => {
    this.props.fetchUserData(userId);
  };

  render() {
    if (!this.props.user.id) this.fetchUserData();
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
  fetchUserData: id => dispatch(fetchUserData(id)),
});

export default connect(
  null,
  mapDispatch
)(UserScreen);

// map user store to props
// if user doesnt exist, fetch user data
