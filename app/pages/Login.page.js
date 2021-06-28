import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import theme from '../styles/theme.style';
import {Button, Input} from 'react-native-elements';

class LoginPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoTitle}>Dekitakoto Juku</Text>

        <Input
          label="Email"
          labelStyle={styles.emailLabel}
          placeholder="Input your email address"
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          returnKey="next"
          containerStyle={styles.emailContainer}
          style={styles.emailInput}
          inputContainerStyle={styles.emailInputContainer}
          // errorMessage="Something wrong"
        />

        <Input
          label="Password"
          labelStyle={styles.emailLabel}
          placeholder="Input your password"
          autoCapitalize="none"
          returnKey="done"
          containerStyle={styles.emailContainer}
          style={styles.emailInput}
          inputContainerStyle={styles.emailInputContainer}
          // errorMessage="Something went wrong"
        />

        <View style={styles.forgot_pass}>
          <TouchableOpacity onPress={() => console.log('testing')}>
            <Text style={styles.forgot_pass_txt}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <Button
          title="Login"
          containerStyle={styles.loginBtnContainer}
          style={styles.loginBtn}
          titleStyle={styles.loginText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.CONTAINER_PADDING,
  },
  logoImage: {
    width: 128,
    height: 128,
    marginBottom: 16,
  },
  logoTitle: {
    fontSize: 26,
    color: theme.PRIMARY_COLOR,
    fontWeight: 'bold',
    marginBottom: 32,
  },

  emailContainer: {
    paddingHorizontal: 0,
    // paddingVertical: 0,
  },
  emailLabel: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  emailInputContainer: {
    borderBottomWidth: 0,
    // padding: 0,
  },
  emailInput: {
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    padding: 16,
  },

  forgot_pass: {
    alignItems: 'flex-end',
    width: '100%',
    paddingBottom: 16,
    // paddingVertical: 8,
  },
  forgot_pass_txt: {
    color: theme.PRIMARY_COLOR,
  },

  loginBtnContainer: {
    width: '100%',
    // padding: 10,
  },
  loginBtn: {
    borderRadius: theme.BUTTON_RADIUS,
    backgroundColor: theme.PRIMARY_COLOR,
  },
  loginText: {
    fontSize: theme.FONT_SIZE_LARGE,
    margin: 5,
  },
});

export default LoginPage;
