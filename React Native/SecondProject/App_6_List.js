
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView
} from 'react-native';

const App = () => {

  const users = [
    {
      id: 1,
      name: "Anil"
    },
    {
      id: 2,
      name: "Bharat"
    },
    {
      id: 3,
      name: "Chanda"
    },
    {
      id: 4,
      name: "Dhanush"
    },
    {
      id: 5,
      name: "Anil"
    },
    {
      id: 6,
      name: "Bharat"
    },
    {
      id: 7,
      name: "Chanda"
    },
    {
      id: 8,
      name: "Dhanush"
    },
    {
      id: 9,
      name: "Anil"
    },
    {
      id: 10,
      name: "Bharat"
    },
    {
      id: 11,
      name: "Chanda"
    },
    {
      id: 12,
      name: "Dhanush"
    },
  ]

  return (
    <View>
      {/* <Text style={{ fontSize: 30 }} >List (with Flat List Component)</Text>
      <FlatList 
          data={users}
          renderItem={({item})=><Text style={styles.item}>{item.id}. {item.name}</Text>}
          keyExtractor={item=>item.id}
      /> */}

      <Text style={{ fontSize: 30 }} >List (with MAP Component)</Text>
      <ScrollView style={{marginBottom:50}}>
        {
          users.map((item)=><Text style={styles.item}>{item.id}. {item.name}</Text>)
        }
      </ScrollView>
    </View>
  );
};


const styles=StyleSheet.create({
  item:{
    fontSize:25,
    padding:10,
    color:'blue',
    borderColor:'blue',
    borderWidth:2,
    margin:10,
  }
})

export default App;
