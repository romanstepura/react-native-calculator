import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Keyboard extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center",marginTop:20 }}>
                <Text>Hello, Keyboard!</Text>

            </View>
        );
    }
}

