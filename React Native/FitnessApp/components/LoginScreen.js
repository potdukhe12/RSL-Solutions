import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { firebase } from './firebase';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Handle successful login (navigate to another screen, etc.)
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignup = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // Handle successful signup (navigate to another screen, etc.)
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Enter your email"
      />

      <Text>Password:</Text>
      <TextInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
        placeholder="Enter your password"
      />

      {error && <Text style={{ color: 'red' }}>{error}</Text>}

      <Button title="Login" onPress={handleLogin} />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

export default LoginScreen;
