import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Keyboard from './Keyboard';

export default class Display extends Component {
  render() {
    return <Text style={styles.displayText}>{this.props.currentDisplay}</Text>;
  }
}
const styles = StyleSheet.create({
  displayText: {
    fontSize: 30,
  },
});
