import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Background from './Background2';
import { purple } from './Constants';
import Field from './Field';
import Btn from './Btn';

const Login = (props) => {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.formContainer}>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.loginDescription}>Login to your account</Text>
          <Field placeholder="Email / Username" keyboardType={'email-address'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => {
              alert('Forgot Password?');
            }}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
          </TouchableOpacity>
          <Btn
            textColor="white"
            bgColor={purple}
            btnLabel="Login"
            Press={() => {
              alert('Logged In');
              props.navigation.navigate('GenderScreen');
            }}
          />
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account ?</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
              <Text style={styles.signupLink}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    height: 720,
    width: 393,
    left: 0,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingTop: 70,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 40,
    color: purple,
    fontWeight: 'bold',
  },
  loginDescription: {
    color: 'grey',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  forgotPassword: {
    alignItems: 'flex-end',
    width: '75%',
    paddingRight: 16,
    marginBottom: 120,
  },
  forgotPasswordText: {
    color: purple,
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    fontSize: 16,
  },
  signupLink: {
    color: purple,
    fontWeight: 'bold',
    marginBottom: 100,
    fontSize: 16,
  },
});

export default Login;
