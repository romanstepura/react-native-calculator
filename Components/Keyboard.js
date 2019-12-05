import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './Button';
export default class Keyboard extends Component {
  render() {
    let rows = [];
    let nums = [[7, 8, 9], [4, 5, 6], [1, 2, 3], ['.', 0, '=']];
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
          <Button
            key={nums[i][j].toString()}
            character={nums[i][j]}
            buttonClick={this.props.keyboardClick}
          />,
        );
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }
    let operations = ['+', '-', '*', '/'];
    let ops = [];
    for (let k = 0; k < 4; k++) {
      ops.push(
        <Button
          key={operations[k].toString()}
          character={operations[k]}
          buttonClick={this.props.keyboardClick}
        />,
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
