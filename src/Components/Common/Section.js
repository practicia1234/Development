import React, { Component } from 'react';
import {
  View
} from 'react-native';

class Section extends Component {
  render() {
    return (
      <View style={styles.Section}>
        {this.props.children}
      </View>
    );
  }
}
const styles = {
  Section: {
    paddingTop: 15,
  }
};

export default Section;
