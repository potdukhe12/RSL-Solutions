
import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
} from 'react-native';

import CompanyData from './components/CompanyData';

const name = "Saurabh";
let age = 25;
var email = "potdukhe12@gmail.com";

function fruit(){
  return "apple";
}

const App = () => {

  return (
    <View>
      <Text style={{fontSize:30}}>Hello React-Native</Text>
      <Text style={{fontSize:30}}></Text>
      <Text style={{fontSize:20}}>This is the first react-native project</Text>
      <Text style={{fontSize:20}}>~ By Saurabh Potdukhe</Text>

      <Text style={{fontSize:20}}> {name} </Text>
      <Text style={{fontSize:20}}> {age} </Text>
      <Text style={{fontSize:20}}> {email} </Text>

      <Text style={{fontSize:20}}> {fruit()} </Text>
      <Text style={{fontSize:20}}> {100*20} </Text>
      <Text style={{fontSize:20}}> {age === 25?"above 30":"below 30"} </Text>

      <Button title='Press Here'></Button>
      <Button title='Button 2'></Button>

      {/* Component call */}
      <UserData/> 
      <UserData/>
      <CompanyData/>

      <Image style={{width:150,height:200}} source={require('./SaurabhPotdukhe.jpg')} />
    </View>
  );
};

const UserData = () => {
  return (
    <View>
      <Text style={{fontSize:10}}> Name: Sham </Text>
      <Text style={{fontSize:10}}> Age    : 35 </Text>
      <Text style={{fontSize:10}}> Email : sham@123.in </Text>
    </View>
  )
}

export default App;
