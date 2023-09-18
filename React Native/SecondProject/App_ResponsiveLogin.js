import React from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './components/Home';
import { Login } from './components/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
              headerStyle:{backgroundColor:'skyblue'},
              headerTintColor:'black',
              headerTitleStyle:{fontSize:25}
        }} >

        <Stack.Screen name='Home' component={Home} 
              options={{
                // headerTitle: ()=> <Button onPress={headerAction} title="Left" />,
                // headerRight: ()=> <Header />,
                  title:"User Login",
                  headerStyle:{backgroundColor:'pink'},
              }} />

        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
