
import React, { useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet
} from 'react-native';

const App = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [display,setDisplay] = useState(false);

  const resetFormData = () =>{
    setDisplay(false);
    setEmail("");
    setName("");
    setPassword("");
  }

  return (
    <View>
      <Text style={{ fontSize:30 }} >Form</Text>
      <TextInput 
          style={styles.textInput}
          placeholder='Enter Your Name'
          value={name}
          onChangeText={(text)=>setName(text)}
      />
      <TextInput 
          style={styles.textInput}
          placeholder='Enter Your Email'
          value={email}
          onChangeText={(text)=>setEmail(text)}
      />
      <TextInput 
          style={styles.textInput}
          placeholder='Enter Your Password'
          secureTextEntry={true}
          value={password}
          onChangeText={(text)=>setPassword(text)}
      />

      <View style={{ marginBottom:10 }}>
        <Button color={'green'} 
                title='Print Details'
                onPress={()=>setDisplay(true)} />
      </View>
      <Button title='Clear' onPress={()=>resetFormData()} />

      <View>
        {
          display ? 
            <View>
              <Text style={{ fontSize:15 }}>User Name  : {name}</Text>
              <Text style={{ fontSize:15 }}>User Email : {email}</Text>
              <Text style={{ fontSize:15 }}>User Password: {password}</Text>
            </View>:null
        }
      </View>
    </View>
  );
};


const styles=StyleSheet.create({
  textInput:{
    color:'blue',
    fontSize:18,
    borderColor:'blue',
    borderWidth:2,
    margin:10,
  }
})

export default App;
