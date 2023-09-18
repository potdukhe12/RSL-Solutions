import { Button, Text, TextInput, View, } from 'react-native';
import React, { useState } from 'react';

export const LoginScreen = (props) => {

  const [name,setName] = useState("");
  const [password,setPwd] = useState("");

    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:30,marginBottom:60}}>Fitness App</Text>
        
        <Text style={{fontSize:30}}>User Name : </Text>
        <TextInput 
            style={{fontSize:20, borderColor:'#000', borderWidth:2}}
            onChangeText={(text)=>setName(text)}
            placeholder="Enter name" />

        <Text style={{fontSize:30}}>Password</Text>
        <TextInput 
            style={{fontSize:20, borderColor:'#000', borderWidth:2}}
            onChangeText={(text)=>setPwd(text)}
            placeholder="Enter Password" />

        <Button title='Login' onPress={()=> props.navigation.navigate("HomeScreen")} />
        <Button title="Don't have an account, SignUp" onPress={()=> props.navigation.navigate("SignupScreen")} />
      </View>
    )
  }