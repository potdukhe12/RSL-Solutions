
import React, { useEffect, useState } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

const App = () => {

  const [show,setShow] = useState(true);
  
  return (
    <View>
      <Text style={{ fontSize: 30 }} >useEffect for Unmount Component</Text>
      <Button title='Toggle Component' onPress={()=>setShow(!show)} />

      {
        show ? <Student /> : null
      }
      {/* <Student/> */}

    </View>
  );
};

const Student=()=>{

  /* 
  setInterval(()=>{
    console.warn("Timer called");
  },2000)
  */
  // setInterval is a background process,
  // so it cannot be stopped.
  
  let timer = setInterval(()=>{
    console.warn("Timer called");
  },2000)
  // But when used with a variable(e.g. 'timer'),
  // the variable space can be cleared. 

  useEffect(()=>{
    return ()=>{ 
      // console.warn("useEffect is called on unmount");
      clearInterval(timer);
    }
  })

  return(
    <View>
      <Text style={{ fontSize: 30, color:'green' }} >Student Component</Text>
    </View>
  )
}

export default App;
