import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

export default class Display extends Component {
  render() {
    return <Text style={styles.displayText}>{this.props.currentDisplay}</Text>;
  }
}
const styles = StyleSheet.create({
  displayText: {
    fontSize: 30,
    textAlign: 'right',
  },
  white: {
    color: 'white',
    fontSize: 30,
    padding: 5,
  },
});
