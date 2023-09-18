
import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

const App = () => {
  // let name = "Saurabh";
  const [name,setName] = useState("Hero");
  return (
    <View>
      <Text style={{fontSize:30}}>Props in React-native</Text>
      <Button title='Update Props' onPress={()=>setName("Peter")} />
      <User name={name} age={26} />
    </View>
  );
};

const User = (props) => {
  // console.warn(props.name)
  return (
    <View style={{backgroundColor:'green', padding:20}}>
      <Text style={{fontSize:30}}>Child Component</Text>
      <Text style={{fontSize:30}}> Name : {props.name} </Text>
      <Text style={{fontSize:30}}> Age : {props.age} </Text>
    </View>
  );
};

export default App;
