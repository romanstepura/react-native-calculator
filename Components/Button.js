import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Text>{this.props.character}</Text>
      </TouchableOpacity>
    );
  }
}
