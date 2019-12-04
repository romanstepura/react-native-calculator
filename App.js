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

export class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View>
        <Keyboard />
      </View>
    );
  }
}

const styles = StyleSheet.create();

export default App;
