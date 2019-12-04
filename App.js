/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Display from './Components/Display';
import Button from './Components/Button';
const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>123</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>321</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numberButtons}>
          <View style={styles.row}>
            <Button />
            <Button />
            <Button />
          </View>
          <View style={styles.row}>
            <Button />
            <Button />
            <Button />
          </View>
          <View style={styles.row}>
            <Button />
            <Button />
            <Button />
          </View>
          <View style={styles.row}>
            <Button />
            <Button />
            <Button />
          </View>
        </View>
        <View style={styles.operations}>
          <Button title="+"></Button>
          <Button title="+"></Button>
          <Button title="+"></Button>
          <Button title="+"></Button>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calculationText: {
    fontSize: 24,
    color: 'white',
  },
  resultText: {
    fontSize: 30,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  result: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttons: {
    flexGrow: 5,
    flexDirection: 'row',
  },
  numberButtons: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'black',
    alignItems: 'stretch',
  },
});

export default App;
