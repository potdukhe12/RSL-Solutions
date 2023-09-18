
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
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
    {
      id: 13,
      name: "Anil"
    },
    {
      id: 14,
      name: "Bharat"
    },
    {
      id: 15,
      name: "Chanda"
    },
    {
      id: 16,
      name: "Dhanush"
    },
    {
      id: 17,
      name: "Anil"
    },
    {
      id: 18,
      name: "Bharat"
    },
  ]

  return (
    <View>

{/* Static List */}
      <Text style={{ fontSize: 30 }} >Grid with Static Data</Text>
      
      <View style={{ flex:1, flexDirection:'row', flexWrap:'wrap'}}>
        <Text style={styles.item}>A</Text>
        <Text style={styles.item}>B</Text>
        <Text style={styles.item}>C</Text>
        <Text style={styles.item}>D</Text>
        <Text style={styles.item}>E</Text>
        <Text style={styles.item}>F</Text>
      {/* </View> */}


{/* Dynamic List */}
      <Text style={{ fontSize: 30 }} >Grid with Dynamic Data</Text>
      
      {/* <View style={{ flex:1, flexDirection:'row', flexWrap:'wrap'}}> */}
      {/* <ScrollView style={{marginBottom:50, flexWrap:'wrap'}}> */}
        {
          users.map((item)=><Text style={styles.item}>{item.name}</Text>)
        }
        {/* </ScrollView> */}
      </View>
    </View>
  );
};


const styles=StyleSheet.create({
  item:{
    fontSize:25,
    color:'#fff',
    backgroundColor:'blue',
    padding:5,
    margin:5,
    width:120,
    height:120,
    textAlign:'center',
    textAlignVertical:'center',
  }
})

export default App;
