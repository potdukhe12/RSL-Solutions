import { Button, Text, View, } from 'react-native';
import React from 'react';

export const SignupScreen = (props) => {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:30,marginBottom:60}}>Fitness App</Text>

        <Button style={{marginBottom:10}} title='Submit' onPress={()=> props.navigation.navigate("HomeScreen")} />
        <Button title='Not registered, then Login' onPress={()=> props.navigation.navigate("LoginScreen")} />
      </View>
    )
  }