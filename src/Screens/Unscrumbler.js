import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Words from '../Words';



class Unscrumbler extends Component {
  state = { theWord: '', inputText: '', score: 0, };

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
    if ( inputTextLowerCase.toLowerCase() == pickedWord) {
      this.setState({ score: this.state.score + 2, inputText: '' });
      this.wordConfig();
    }
    else {
      this.setState({ score: this.state.score - 1, inputText: '' });
      this.wordConfig();
    }
  }

  render() {
    console.log('the word is: ',pickedWord );
    console.log('i typed: ',this.state.inputText );
    return (
      <View>
        <Text style={[styles.score, this.state.score < 0 ? { color: 'red' } : { color: 'green' } ]}>{this.state.score}/10</Text>
        <View style={styles.main}>
          <Text style={styles.pickedWord}>{this.state.theWord}</Text>
          <TextInput style={styles.textInput} underlineColorAndroid="rgba(0,0,0,0)" value={this.state.inputText} onChangeText={(value) => this.setState({ inputText: value })}/>
          <Button title="submit" onPress={this.submit.bind(this)} />
        </View>
      </View>
    );
  }
}

const styles = {
  pickedWord: {
    fontSize: 26,
    fontWeight: '600',
    color: 'white',
    alignSelf: 'center'
  },
  score: {
    fontSize: 30,
    color: 'blue',
    alignSelf: 'center',
    marginRight: 10,
    marginTop: 10,
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
