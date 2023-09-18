import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
// import BtnImg from '../BtnImg'
import Background from '../Background'
import { purple } from '../Constants'

export default function GenderScreen(props) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 70 }}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Text style={styles.menuButtonText}>III</Text>
        </TouchableOpacity>
        <Text style={{ color: purple, fontSize: 50, marginBottom: 25 }}>Select your Gender</Text>
        
        <TouchableOpacity
            onPress={() => props.navigation.navigate("HomeScreen")}
            style={{
                backgroundColor: purple,
                // borderBottomWidth: 4,
                // borderBottomColor: '#61283a',
                borderRadius: 20,
                alignItems: 'flex-start',
                width: '110%',
                paddingVertical: 25,
                paddingHorizontal: 25,
                marginBottom: 13, }}>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{ width: 50, height: 60,  }} source={require('../images/man2.png')} />
            <Text style={{ color: 'white', fontSize: 38, fontWeight: 'bold', paddingLeft: 70 }}>
              Male
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => props.navigation.navigate("HomeScreen")}
            style={{
              backgroundColor: purple,
              // borderBottomWidth: 4,
              // borderBottomColor: '#61283a',
              borderRadius: 20,
              alignItems: 'flex-start',
              width: '110%',
              paddingVertical: 25,
              paddingHorizontal: 25,
              marginBottom: 13, }}>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{ width: 50, height: 60,  }} source={require('../images/woman2.png')} />
            
            <Text style={{ color: 'white', fontSize: 38, fontWeight: 'bold', paddingLeft: 70 }}>
              Female
            </Text>
          </View>
        </TouchableOpacity>

      </View>

      <Modal
        transparent={true}
        animationType="slide"
        visible={menuVisible}
        onRequestClose={toggleMenu}
      >
        <View style={styles.menuContainer} >
          <Text style={styles.menuItem} onPress={() => props.navigation.navigate("HomeScreen")}>Home</Text>
          <Text style={styles.menuItem} onPress={() => props.navigation.navigate("ModeScreen")}>Exercise with equipment</Text>
          <Text style={styles.menuItem} onPress={() => props.navigation.navigate("ModeScreen")}>Exercise without equipment</Text>
          <Text style={styles.menuItem} onPress={() => alert("Reset password")}>Reset password</Text>
          <Text style={styles.menuItem} onPress={() => props.navigation.navigate("Settings")}>Settings</Text>
          <Text style={styles.menuItem} onPress={() => {alert("You are logged out!");props.navigation.navigate("Home") }}>Logout</Text>
          <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </Background>
  )
}

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    top: -50,
    left: -17,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  menuButtonText: {
    color: purple,
    fontSize: 22,
    transform: [{ rotate: '90deg' }],
  },
  menuContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 55,
    paddingVertical: 100,
  },
  menuItem: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    fontWeight: 'bold',
    top: 22,
    left: 25,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeButtonText: {
    fontSize: 18,
    color: purple,
  },

  
});
