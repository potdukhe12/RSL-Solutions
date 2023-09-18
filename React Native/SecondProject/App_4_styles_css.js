
import React, { useState } from 'react';
import ExStyles from './components/style';
import {
  Button,
  Text,
  View,
  StyleSheet
} from 'react-native';

const App = () => {
  return (
    <View>
      {/* 1. Inline Styling */}
      <Text style={{fontSize:30, color:'red'}}>Styles in React-native</Text>
      
      
      {/* 2. Internal Styling */}
      <Text style={styles.textbox}>Styles</Text>
      <Text style={styles.textbox}>Styles</Text>
      <Text style={styles.textbox}>Styles</Text>


      {/* 3. External Styling */}
      <Text style={ExStyles.textbox}>Styles</Text>
      <Text style={ExStyles.textbox}>Styles</Text>


    </View>
  );
};

{/* 2. Internal Styling */}
const styles=StyleSheet.create({
  textbox:{
    color:'#fff',
    fontSize:25,
    backgroundColor:'blue',
    marginBottom:10,
    padding:15,
    borderRadius:20,
    height:100,
    textAlignVertical:'center',
    textAlign:'center',
    borderColor:'grey',
    borderWidth:5
  }
})

export default App;
