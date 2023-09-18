import { Button, Text, View, } from 'react-native';
import React from 'react';

export const HomeScreen = (props) => {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:30,marginBottom:60}}>Fitness App</Text>

        <Button title='Login Page' onPress={()=> props.navigation.navigate("LoginScreen")} />
        <Text></Text>
        <Button title='SignUp Page' onPress={()=> props.navigation.navigate("SignupScreen")} />
      </View>
    )
  }