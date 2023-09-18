//45  video
//Top Tab navigation
import React,{useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
const Tab=createMaterialTopTabNavigator();
const App = () => {
  return (
    
       <NavigationContainer>
         <Tab.Navigator>
            <Tab.Screen name='Login' component={Login} />
            <Tab.Screen name='Sign-Up' component={SignUp} />
            <Tab.Screen name='Other' component={SignUp} />
         </Tab.Navigator>
       </NavigationContainer>
  );
};

const Login = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30}}>Login</Text>
    </View>
    );
};

const SignUp = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30}}>Sign-Up</Text>
    </View>
    );
};



export default App;
