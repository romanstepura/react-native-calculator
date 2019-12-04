import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Keyboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>Hello, Keyboard!</Text>
      </View>
    );
  }
}
