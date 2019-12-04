/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Keyboard from './Components/Keyboard';
const App: () => React$Node = () => {
  return (
    <View>
      <Keyboard />
    </View>
  );
};

const styles = StyleSheet.create();

export default App;
