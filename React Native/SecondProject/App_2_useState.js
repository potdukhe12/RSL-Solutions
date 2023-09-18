
import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

const App = () => {
  
    // Using State, & giving default value
    const [name,setName] = useState("Saurabh");

  let data = 100;
  const fruit = (val) => {
    data = 20;
    console.warn("Function Called")
    console.warn(val)
    console.warn(data) // o/p ==> 20
    // only the last console will be printed
  }

  function testName(){
    setName("Sanket");
    data = 50;
  }

  return (
    <View>
      <Text style={{fontSize:30}}> {data} </Text>
      {/* o/p => 100 , even after function call*/}
      <Text style={{fontSize:30}}>Button onPress Event</Text>
      
      <Button title='On Press 1' onPress={()=>fruit("Hello")} color={'green'} />
      <Button title='On Press 2' onPress={fruit} color={'red'} />
      
      <Text style={{fontSize:30}}>State Event</Text>
      <Button title='Name Update' onPress={testName} />
      
      <Text style={{fontSize:30}}> {name} </Text>
      <Text style={{fontSize:30}}> {data} </Text>

    </View>
  );
};

export default App;
