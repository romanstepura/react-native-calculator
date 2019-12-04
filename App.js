/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
// eslint-disable-next-line no-unused-vars
import {StyleSheet, View, Text,Button} from 'react-native';

import Keyboard from './Components/Keyboard';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <View style={styles.result} />
      <View style={styles.calculation} />
      <View style={styles.buttons}>
        <View style={styles.nutmegs}>
          <View style={styles.row}>
            <Button title="0" />
            <Button title="0" />
            <Button title="0" />
          </View>
          <View style={styles.row}>
            <Button title="0" />
            <Button title="0" />
            <Button title="0" />
          </View>
          <View style={styles.row}>
            <Button title="0" />
            <Button title="0" />
            <Button title="0" />
          </View>
          <View style={styles.row}>
            <Button title="0" />
            <Button title="0" />
            <Button title="0" />
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
  row:{
    flexDirection: 'row',
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  result: {
    flex: 1,
    backgroundColor: 'red',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
  },
  buttons: {
    flexGrow: 5,
    flexDirection: 'row',
  },
  nutmegs: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'black',
  },
});

export default App;
