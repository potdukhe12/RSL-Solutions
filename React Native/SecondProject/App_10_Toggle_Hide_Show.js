
import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

const App = () => {

  const [show,setShow] = useState(true);
  
  return (
    <View>
      <Text style={{ fontSize: 30 }} >Show/Hide Component</Text>
      <Button title='Toggle Component' onPress={()=>setShow(!show)} />

      {
        show ? <User /> : null
      }
      {/* <User/> */}

    </View>
  );
};

const User=()=>{
  return(
    <View>
      <Text style={{ fontSize: 30, color:'green' }} >User Component</Text>
    </View>
  )
}

export default App;
