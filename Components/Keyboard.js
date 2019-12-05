import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './Button';

export default class Keyboard extends Component {
  render() {
    let buttonRows = [];
    let keyboardNumbers = [[7, 8, 9], [4, 5, 6],[1, 2, 3],  ['.', 0, '=']];
    for (let i = 0; i < 4; i++){
      let buttonRow = [];
      for (let j = 0; j < 3; j++) {
        buttonRow.push(<Button character={keyboardNumbers[i][j]} />);
      }
      buttonRows.push(<View style={styles.row}>{buttonRow}</View>);
    }
    return (
      <View style={styles.buttons}>
        <View style={styles.numberButtons}>{buttonRows}</View>
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
