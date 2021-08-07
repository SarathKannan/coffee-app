import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Messages} from '../../../Utils/Messages';
import {regex} from '../../../Utils/Regex';
import ButtonText from '../../components/ButtonText';
import Input from '../../components/Input';
import Space from '../../components/Space';
import styles from './styles';

const Login = ({goLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const _validateEmail = val => {
    if (regex.email_regex.test(val)) {
      setEmailError(false);
      return true;
    } else {
      setEmailError(true);
      return false;
    }
  };

  const _validatePassword = val => {
    if (regex.password_regex.test(val)) {
      setPasswordError(false);
      return true;
    } else {
      setPasswordError(true);
      return false;
    }
  };

  const _login = () => {
    if (_validateEmail(email) && _validatePassword(password)) {
      console.log('valideted');
      let _data = {
        email: email,
        password: password,
      };
      goLogin(_data);
      return true;
    }
    console.log('validation error');
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.headText}>Welcome back!</Text>
      </View>
      <View style={styles.body}>
        <Input
          onChangeText={t => setEmail(t)}
          value={email}
          placeholder={''}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          label="Email"
          textInputContainerStyle={styles.input}
          onFocus={() => setEmailError(false)}
          isError={emailError}
          errorText={emailError ? Messages.invalidEmail : ''}
        />
        <Space height={10} />
        <Input
          onChangeText={t => setPassword(t)}
          value={password}
          placeholder={''}
          keyboardType={'default'}
          autoCapitalize={'none'}
          label="Password"
          textInputContainerStyle={styles.input}
          onFocus={() => setPasswordError(false)}
          isError={passwordError}
          errorText={passwordError ? Messages.invalidPassword : ''}
        />
        <Space height={10} />
        <View style={styles.forgotPasswordContainer}>
          <ButtonText
            onPress={() => {}}
            text="Forgot password?"
            textStyle={styles.forgotPasswordText}
            buttonStyle={styles.forgotPasswordButton}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonText
          text="Login"
          textStyle={styles.buttonText}
          buttonStyle={styles.button}
          onPress={() => _login()}
        />
        <Space height={10} />
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <ButtonText
            text="Register"
            textStyle={styles.signUpButtonText}
            buttonStyle={styles.signUpButton}
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
