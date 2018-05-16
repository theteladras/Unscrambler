import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'


export default class ModalContent extends Component {
  render() {
    return (
      <View style={{ flex: 0.8, backgroundColor: 'white', justifyContent: 'space-around', borderRadius: 10, }}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>Stage #1 finished!</Text>
        <Text style={{ fontSize: 16, textAlign: 'center' }}>Your score is:</Text>
        <Text style={{ fontSize: 36, textAlign: 'center' }}>{this.props.score}</Text>
        <View style={{ width: '80%', alignSelf: 'center' }}>
          <Button title="Reset game" onPress={this.props.onPress} color='green' />
        </View>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'red' }}>More stages coming soon. . .</Text>
      </View>
    );
  }
}
