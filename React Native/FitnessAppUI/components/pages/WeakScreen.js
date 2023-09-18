import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BtnMenu from '../BtnMenu'
import Background from '../Background'
import { purple } from '../Constants'

export default function WeakScreen(props) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const selectedDay = 'Sunday';

  return (
    <Background>
        <ScrollView>
      <View style={{ marginHorizontal: 40, marginVertical: 70 }}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Text style={styles.menuButtonText}>III</Text>
        </TouchableOpacity>
        <Text style={{ color: purple, fontSize: 50, marginBottom: 25 }}>Home Screen</Text>
        <BtnMenu
          bgColor={purple}
          textColor='white'
          btnLabel='Sunday'
          Press={() => props.navigation.navigate("ExcerciseScreen", { selectedDay: "Sunday" })}
        />
        <BtnMenu
          bgColor={purple}
          textColor='white'
          btnLabel='Monday'
          Press={() => props.navigation.navigate("ExcerciseScreen")}
        />
        <BtnMenu
          bgColor={purple}
          textColor='white'
          btnLabel='Tuesday'
          Press={() => props.navigation.navigate("ExcerciseScreen")}
        />
        <BtnMenu
          bgColor={purple}
          textColor='white'
          btnLabel='Wednesday'
          Press={() => props.navigation.navigate("ExcerciseScreen")}
        />
        <BtnMenu
          bgColor={purple}
          textColor='white'
          btnLabel='Thursday'
          Press={() => props.navigation.navigate("ExcerciseScreen")}
        />
        <BtnMenu
          bgColor={purple}
          textColor='white'
          btnLabel='Friday'
          Press={() => props.navigation.navigate("ExcerciseScreen")}
        />
        <BtnMenu
          bgColor={purple}
          textColor='white'
          btnLabel='Saturday'
          Press={() => props.navigation.navigate("ExcerciseScreen")}
        />
    </View>
    </ScrollView>
      <Modal
        transparent={true}
        animationType="slide"
        visible={menuVisible}
        onRequestClose={toggleMenu}
      >
        <View style={styles.menuContainer}>
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
    left: -20,
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  menuItem: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
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
