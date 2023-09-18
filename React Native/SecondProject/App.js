import React from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './components/HomeScreen';
import { LoginScreen } from './components/LoginScreen';
import { SignupScreen } from './components/SignupScreen';

const Stack = createNativeStackNavigator();

const App = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
              headerStyle:{backgroundColor:'skyblue'},
              headerTintColor:'black',
              headerTitleStyle:{fontSize:25}
        }} >

        <Stack.Screen name='HomeScreen' component={HomeScreen} 
              options={{
                  title:"Home Screen",
                  headerStyle:{backgroundColor:'pink'},
              }} />

        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        
        <Stack.Screen name='SignupScreen' component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
