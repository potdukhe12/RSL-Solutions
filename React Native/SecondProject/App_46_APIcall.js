//46  video
//API clal in react native
import React, {useState, useEffect} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const App = () => {
  const [data, setData] = useState(undefined);

  const getAPIData = async () => {
    // API call
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View>
      <Text style={{fontSize: 30}}>API call</Text>
      {
      data ? 
        <View>
          <Text style={{fontSize: 30}}>{data.id}</Text>
          <Text style={{fontSize: 30}}>{data.userId}</Text>
          <Text style={{fontSize: 30}}>{data.title}</Text>
          <Text style={{fontSize: 30}}>{data.body}</Text>
        </View>
       : null
       }
    </View>
  );
};

export default App;
