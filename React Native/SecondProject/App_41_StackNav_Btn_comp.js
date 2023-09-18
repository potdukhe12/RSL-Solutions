//41  video
// stack Navigation Button and component
import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './components/Home';
import {Login} from './components/Login';


const Stack = createNativeStackNavigator();

const App = () => {

  const btnAction = () =>{
    console.warn("Btn pressed")
  }
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        title: 'User Login',
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor:'orange',
        headerTitleStyle: {
          fontSize: 25,
        },
      }}>
        <Stack.Screen
          name="Login"
          component={Login}
          
          options={{
            headerTitle:()=><Button onPress={btnAction} title='Left'/>,
            headerRight:()=><Header />,
            title: 'User Login',
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor:'white',
            headerTitleStyle: {
              fontSize: 40,
            },
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Header = () => {
  return (
    <TextInput placeholder='name'></TextInput>
  );
};





export default App;
