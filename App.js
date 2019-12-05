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
import Display from './Components/Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultText: '',
    };
    console.log(this.state.resultText);
  }
  buttonPressed = text => {
    console.log(text);
    this.setState({
      resultText: this.state.resultText + text,
    });
    console.log(this.resultText);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Display currentDisplay={this.state.resultText} />
        </View>
        <View style={styles.calculation} />
        <Keyboard keyboardClick={this.buttonPressed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default App;
