import React, { Component } from 'react';
import {
  TextInput
} from 'react-native';

class Input extends Component {
  render() {
    return (
      <TextInput
          underlineColorAndroid='transparent'
          secureTextEntry={this.props.secureTextEntry}
          style={styles.input}
          placeholder={this.props.placeHolder}
          onChangeText={(text) => this.setState({ text })}
        />
    );
  }
}
const styles = {
  input: {
    height: 60,
    fontSize: 25,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#999999',
    padding: 15,
  }
}

export default Input;
