import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './Button';

export default class Keyboard extends Component {
  render() {
    let rows = [];
    let nums = [[7, 8, 9], [4, 5, 6],[1, 2, 3],  ['.', 0, '=']];
    for (let i = 0; i < 4; i++){
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(<Button character={nums[i][j]} />);
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }
    return (
      <View style={styles.buttons}>
        <View style={styles.numberButtons}>{rows}</View>
        <View style={styles.operations}>
          <Button character="C" />
          <Button character="+" />
          <Button character="-" />
          <Button character="/" />
          <Button character="*" />
        </View>
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
    backgroundColor: 'yellow',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttons: {
    flexGrow: 3,
    flexDirection: 'row',
  },
});
