import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  ImageBackground,
} from 'react-native';

import Container from '../Common/Container';
import Input from '../Common/Input';
import Section from '../Common/Section';

class Login extends Component {

  handleClick = () => {
        return true;
    }
  render() {
    return (

          <ImageBackground
          source={require('./login_bg.png')}
          style={styles.pageContainer}
          >
<View>
            <Text style={styles.heading}> LOGIN </Text>
            <Container>
              <Section>
                  <Input
                    placeHolder="Email@email.com"
                  />
              </Section>
              <Section>
                  <Input
                    secureTextEntry
                    placeHolder="Password"
                  />
              </Section>
              <Section>
                  <Button
                      onPress={this.handleClick}
                      title="Login"
                  />
              </Section>
              <Section>
                <View style={styles.signupContainer}>
                    <Text>
                      New User? Please
                      <Text style={styles.signup}> Sign up</Text>
                    </Text>
                </View>
              </Section>
            </Container>
          </View>
          </ImageBackground>
    );
  }
}

const styles = {
  pageContainer: {
      flex: 1,
  },
  heading: {
    fontSize: 35,
    marginTop: 50,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#3C9DFF'
  },
  signupContainer: {
    alignItems: 'center',
    paddingTop: 10,
  },
  signup: {
    fontWeight: 'bold',
    paddingLeft: 10,
    fontSize: 18,
  }
};


export default Login;
