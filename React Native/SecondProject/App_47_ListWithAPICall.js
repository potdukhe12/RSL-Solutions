//47 video
//List with API call
import React, {useState, useEffect} from 'react';
import {View, Text, Button, TextInput, ScrollView} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);

  const getAPIData = async () => {
    // API call
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <ScrollView>
    <View>
      <Text style={{fontSize: 30}}>List with API call</Text>
      {data.length
        ? data.map((item) => 
            <View style={{padding:10 , borderBottomColor:"#ccc", borderBottomWidth:1}}>
              <Text style={{fontSize: 20, backgroundColor:"#ddd"}}>ID: {item.id}</Text>
              <Text style={{fontSize: 20}}>Title: {item.title}</Text>
              <Text style={{fontSize: 20}}>Body: {item.body}</Text>
            </View>
          )
        : null}
    </View>
    </ScrollView>
  );
};

export default App;

