import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, Text, Button, Image, FlatList } from 'react-native';

const amazon = 'https://s3.us-east-2.amazonaws.com/instaclone-jeru';

const data = [];

class Feed extends React.PureComponent {
  render() {
    const uri = `https://s3.us-east-2.amazonaws.com/instaclone-jeru/`;
    return (
      <SafeAreaView>
        <FlatList
          data={[{ key: '1' }, { key: '11' }, { key: '13' }]}
          renderItem={({ item }) => (
            <Image
              source={{ uri: `${uri}${item.key}.jpg` }}
              style={{ width: 350, height: 350 }}
            />
          )}
        />
      </SafeAreaView>
    );
  }
}

export default connect(
  null,
  null
)(Feed);
