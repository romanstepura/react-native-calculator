import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './Button';

export default class Keyboard extends Component {
  render() {
    return (
      <View style={styles.buttons}>
        <View style={styles.numberButtons}>
          <View style={styles.row}>
            <Button character="7" />
            <Button character="8" />
            <Button character="9" />
          </View>
          <View style={styles.row}>
            <Button character="3" />
            <Button character="5" />
            <Button character="6" />
          </View>
          <View style={styles.row}>
            <Button character="1" />
            <Button character="2" />
            <Button character="3" />
          </View>
          <View style={styles.row}>
            <Button character="0" />
            <Button character="." />
            <Button character="=" />
          </View>
        </View>
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
    flexGrow: 5,
    flexDirection: 'row',
  },
});
