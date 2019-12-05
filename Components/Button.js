import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class Button extends Component {
  toggleStyle = value => {
    if (value === '.' || value === '=') {
      return styles.btnText;
    } else if (typeof value === 'number') {
      return styles.btnText;
    } else {
      return styles.white;
    }
  };
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.buttonClick(this.props.character)}>
        <Text style={this.toggleStyle(this.props.character)}>
          {this.props.character}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  white: {
    color: 'red',
    fontSize: 30,
    padding: 5,
  },
  btnText: {
    fontSize: 30,
    padding: 5,
  },
});
