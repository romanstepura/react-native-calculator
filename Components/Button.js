import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Text style={styles.btnText}>{this.props.character}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  btnText: {
    fontSize: 30,
    padding: 5,
  },
});
