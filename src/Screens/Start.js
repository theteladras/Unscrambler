import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';


class Start extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <Image source={require('../Resources/logo.png')} style={{ width: 220, resizeMode: 'contain', alignSelf: 'center',  }} />
          <TouchableOpacity onPress={() => Actions.game()}>
            <Image source={require('../Resources/start_btn.png')} style={{ width: 220, resizeMode: 'contain', alignSelf: 'center',  }} />
          </TouchableOpacity>
    </View>
    );
  }
}

export default Start;
