import { useState } from 'react';
import { Button, Text, TextInput, View, } from 'react-native';

export const Login = (props) => {
    // const name = 'anil';
    const [name,setName] = useState("");
    const age = 29;

    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:30}}>Login Screen</Text>
        <TextInput 
            style={{fontSize:20, borderColor:'#000', borderWidth:2}}
            onChangeText={(text)=>setName(text)}
            placeholder="Enter name" />
        <Button title='Go to Home Page' 
            onPress={()=> props.navigation.navigate("Home",{name,age})} />
      </View>
    )
  }