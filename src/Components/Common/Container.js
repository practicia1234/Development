import React, { Component } from 'react';
import {
  View
} from 'react-native';

class Container extends Component {
  render() {
    return (
      <View style={styles.Container}>
        {this.props.children}
      </View>
    );
  }
}

const styles = {
  Container: {
    padding: 10
  }
};
export default Container;
