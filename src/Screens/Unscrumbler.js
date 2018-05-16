import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Modal from "react-native-modal";
import { Actions } from 'react-native-router-flux';
import Words from '../Words';
import ModalContent from '../Components/ModalContent';



class Unscrumbler extends Component {
  state = { theWord: '', inputText: '', score: 0, guessNumber: 0, modalON: false };

  wordConfig() {
    pickedWordIndex = parseInt(Math.random() * Words.length);
    pickedWord = Words[pickedWordIndex];
    pickedWordNumLetters = pickedWord.length;
    this.shuffelWord(pickedWord);
  }

  componentWillMount() {
    this.wordConfig();
  }

  shuffelWord(word) {
    shufWord = '';
    var charIndex = 0;
    word = word.split('');
    while (word.length > 0) {
      charIndex = Math.floor(word.length * Math.random());
      shufWord += word[charIndex];
      word.splice(charIndex, 1);
    }
    this.setState({ theWord: shufWord });
}

  submit() {
    let inputTextLowerCase = this.state.inputText;
    if (this.state.guessNumber < 10.5) {
      if ( inputTextLowerCase.toLowerCase() == pickedWord) {
        this.setState({ score: this.state.score + 100, inputText: '', guessNumber: this.state.guessNumber + 1 });
        if (this.state.guessNumber == 9) {
          this.setState({ modalON: true });
        }
        this.wordConfig();
      }
      else {
        this.setState({ score: this.state.score - 50, inputText: '', guessNumber: this.state.guessNumber + 1 });
        if (this.state.guessNumber == 9) {
          this.setState({ modalON: true });
        }
        this.wordConfig();
      }
    }
    else {
      this.setState({ guessNumber: 10, score: this.state.score + 50 });
    }
  }

  modalBtn() {
    this.setState({ theWord: '', inputText: '', score: 0, guessNumber: 0, modalON: false  });
    this.wordConfig();
  }

  styleMethod() {
    if (this.state.score < 0) {
      return { color: 'red' };
    }
    else if ( this.state.score == 0) {
      return { color: 'white' };
    }
    else {
      return { color: 'green' };
    }
  }

  guessNumberStyle() {
    switch(this.state.guessNumber) {
      case 0: {return { color: "#602020" }} break;
      case 1: {return { color: "#802020" }} break;
      case 2: {return { color: "#902020" }} break;
      case 3: {return { color: "#992020" }} break;
      case 4: {return { color: "#a02020" }} break;
      case 5: {return { color: "#a92020" }} break;
      case 6: {return { color: "#b92020" }} break;
      case 7: {return { color: "#c92020" }} break;
      case 8: {return { color: "#d92020" }} break;
      case 9: {return { color: "#e92020" }} break;
      case 10: {return { color: "#f92020" }} break;
      default: {return { color: "white" }};
    }
  }

  render() {
    console.log('the word is: ', pickedWord );
    console.log('i typed: ',this.state.inputText );
    return (
      <View>
        <Modal isVisible={this.state.modalON} onBackButtonPress={() => this.setState({ modalON: false })}>
          <ModalContent onPress={this.modalBtn.bind(this)} score={this.state.score} />
        </Modal>
        <View style={styles.guessNumber}>
          <Text style={styles.score}>
            {this.state.score == 0 ? '000' : this.state.score} pts
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Text style={[{ fontSize: 42, color: 'skyblue' }, this.guessNumberStyle()]}>{this.state.guessNumber}</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 28 }}> / 10</Text>
          </View>
        </View>
        <View style={styles.main}>
          <Text style={styles.pickedWord}>{this.state.theWord}</Text>
          <TextInput style={styles.textInput} underlineColorAndroid="rgba(0,0,0,0)" value={this.state.inputText} onChangeText={(value) => this.setState({ inputText: value })}/>
          <Button title="submit" onPress={this.submit.bind(this)} />
          <View style={{ marginTop: 10, width: '50%', alignSelf: 'center' }}>
            <Button title="quit" onPress={Actions.pop} color="red" />
          </View>
        </View>
      </View>
    );
  }
  componentWillUnmount() {
    this.setState({ modalON: false });
  }
}

const styles = {
  pickedWord: {
    fontSize: 26,
    fontWeight: '600',
    color: 'white',
    alignSelf: 'center'
  },
  guessNumber: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  score: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  main: {
    width: '80%',
    marginTop: 40,
    alignSelf: 'center'
  },
  textInput: {
    marginVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 6,
  }
};

export default Unscrumbler;
