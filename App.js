/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Keyboard from './Components/Keyboard';
import Display from './Components/Display';

const App: () => React$Node = () => {

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.result}>{<Display />}</Text>
      </View>
      <View style={styles.calculation} />
      <Keyboard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 1,
    backgroundColor: 'red',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default App;
