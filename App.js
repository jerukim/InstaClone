import React, { Component } from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';

const names = ['jeru', 'phoebe', 'mark', 'zack'];

const style = {
  center: { alignItems: 'center' },
};

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };
    setInterval(
      () =>
        this.setState(previousState => ({
          isShowingText: !previousState.isShowingText,
        })),
      1000
    );
  }

  render() {
    return this.state.isShowingText ? <Text>{this.props.text}</Text> : null;
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <SafeAreaView style={style.center}>
        {names.map((name, i) => {
          return <Blink text={name} key={i} />;
        })}
      </SafeAreaView>
    );
  }
}

// class Greeting extends Component {
//   render() {
//     return <Text>Hello {this.props.name}!</Text>;
//   }
// }

// export default class LotsOfGreetings extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <SafeAreaView style={style.center}>
//         {names.map((name, i) => {
//           return <Greeting name={name} key={i} />;
//         })}
//       </SafeAreaView>
//     );
//   }
// }
