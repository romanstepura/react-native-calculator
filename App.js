/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import {StyleSheet, View, Text} from 'react-native';
import Keyboard from './Components/Keyboard';
import Display from './Components/Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultText: '',
    };
    this.operations = ['C', '+', '-', '*', '/'];

    console.log(this.state.resultText);
  }
  calculatorResult() {
    const text = this.state.resultText;

  }
  buttonPressed = text => {
    console.log(text);
    if (text === '=') {
      return this.calculatorResult();
    }
    this.setState({
      resultText: this.state.resultText + text,
    });
    console.log(this.resultText);
  };
  operate = operation => {
    switch (operation) {
      case 'C':
        let text = this.state.resultText.split('');
        text.pop();
        this.setState({
          resultText: text.join(''),
        });
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = this.state.resultText.split('').pop();
        if (this.operations.indexOf(lastChar) > 0) {
          return;
        }
        if (this.state.text === '') {
          return;
        }
        this.setState({
          resultText: this.state.resultText + operation,
        });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Display currentDisplay={this.state.resultText} />
        </View>
        <View style={styles.calculation} />
        <Keyboard keyboardClick={this.buttonPressed} operate={this.operate} operations={this.operations} />
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
    backgroundColor: '#fff',
  },
  calculation: {
    flex: 1,
    backgroundColor: '#f6ffe6',
  },
});

export default App;
