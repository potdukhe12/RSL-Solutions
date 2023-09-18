
import React from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';
import UserData from './components/UserData';

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
  ]

  return (
    <View>
      <Text style={{ fontSize: 30 }} >Component in Loop with Flatlist</Text>
      
      <FlatList
        data={users}
        renderItem={({item})=> <UserData item={item} />}
      />
    </View>
  );
};

/*****  Use External Component => UserData.js  *****/

// const UserData = (props) => {
//   const item = props.item;
//   return (
//     <View style={styles.box}>
//       <Text style={styles.item}>{item.id}</Text>
//       <Text style={styles.item}>{item.name}</Text>
//     </View>
//   )
// }

// const styles=StyleSheet.create({
//   item:{
//     fontSize:25,
//     color:'orange',
//     padding:5,
//     margin:2,
//     flex:1,
//     textAlign:'center'
//   },
//   box:{
//     flexDirection:'row',
//     borderColor:'orange',
//     borderWidth:2,
//     marginBottom:10,
//   }
// })

export default App;
