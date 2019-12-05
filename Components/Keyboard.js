import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Button from './Button';
import Display from './Display';

export default class Keyboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let rows = [];
    let nums = [[7, 8, 9], [4, 5, 6], [1, 2, 3], ['.', 0, '=']];
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity
            onPress={() => this.props.keyboardClick(nums[i][j])}>
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>,
        );
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }

    let ops = [];
    for (let k = 0; k < 5; k++) {
      ops.push(
        <TouchableOpacity
          onPress={() => this.props.operate(this.props.operations[k])}
          style={styles.operations}>
          <Text style={styles.white}>{this.props.operations[k]}</Text>
        </TouchableOpacity>,
      );
    }
    return (
      <View style={styles.buttons}>
        <View style={styles.numberButtons}>{rows}</View>
        <View style={styles.operations}>{ops}</View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  white: {
    color: 'white',
    fontSize: 30,
    padding: 5,
  },
  btnText: {
    fontSize: 30,
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  numberButtons: {
    flex: 3,
    backgroundColor: 'white',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  buttons: {
    flexGrow: 3,
    flexDirection: 'row',
  },
});
