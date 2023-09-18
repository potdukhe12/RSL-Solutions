//48 video
//flat List with API Data
import React, {useState, useEffect} from 'react';
import {View, Text, Button, TextInput, ScrollView, FlatList} from 'react-native';

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
   
    <View>
      <Text style={{fontSize: 30}}>FlatList with API Data</Text>
      {data.length
        ? <FlatList
        data={data}
        renderItem={({item})=><View style={{padding:10 , borderBottomColor:"orange", borderBottomWidth:1}} >
          <Text style={{fontSize: 24, backgroundColor:'orange'}}>{item.id}</Text>
          <Text style={{fontSize: 18}}>{item.title}</Text>
          <Text style={{fontSize: 18}}>{item.body}</Text>
          </View>}
        />
         : null}
    </View>
    
  );
};

export default App;

