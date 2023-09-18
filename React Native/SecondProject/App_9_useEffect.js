
import React, { useEffect, useState } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

const App = () => {

  const [count,setCount] = useState(0);
  const [data,setData] = useState(100);

  useEffect(()=>{
    console.warn("Hello "+data+" "+count);
  },[count])
  // [] --> empty array --> to call only at load(or when the state is mounted)
  // [count] --> run useEffect code when count is updated
  return (
    <View>
      <Text style={{ fontSize: 30 }} >Life Cycle with useEffect</Text>
      <Text style={{ fontSize: 30 }} >Count : {count}</Text>
      <Text style={{ fontSize: 30 }} >Data : {data}</Text>

      <Button title='Update Count' onPress={()=>setCount(count+1)} />
      <Button title='Update Data' onPress={()=>setData(data+1)} />

    </View>
  );
};

export default App;
