import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import Background from '../Background2';
import { purple } from '../Constants';
import BtnMenu from '../BtnMenu2';

export default function GenderScreen(props) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [gender, setGender] = useState('');

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleGenderSelection = (selectedGender) => {
    setGender(selectedGender);
    props.navigation.navigate("HomeScreen", { selectedGender: selectedGender });
  };

  const genderOptions = ['Male', 'Female'];

  return (
    <Background>
      <View style={{ marginLeft: 65, marginTop: 40 }}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Text style={styles.menuButtonText}>III</Text>
        </TouchableOpacity>
        <Text style={{ color: purple, fontSize: 50, marginBottom: 20 }}>
          Select your Gender
        </Text>

        { genderOptions.map((option) => (
          <View key={option} style={{ alignItems: 'center', marginBottom: 20 }}>
            {/* Use option as the key and label */}
            <Image
              style={{
                width: 100,
                height: 150,
                marginBottom: 5,
              }}
              source={
                option === 'Male'
                  ? require('../images/male_character.png')
                  : require('../images/female_character.png')
              }
            />
            <BtnMenu
              bgColor={option === gender ? 'green' : purple}
              textColor="white"
              btnLabel={option}
              Press={() => {
                handleGenderSelection(option);
              }}
            />
          </View>
        ))}
      </View>

      <Modal
        transparent={true}
        animationType="slide"
        visible={menuVisible}
        onRequestClose={toggleMenu}
      >
        <View style={styles.menuContainer}>
          <Text style={styles.menuItem} onPress={() => props.navigation.navigate("HomeScreen")}>Home</Text>
          <Text style={styles.menuItem} onPress={() => alert("Reset password")}>Reset password</Text>
          <Text style={styles.menuItem} onPress={() => props.navigation.navigate("Settings")}>Settings</Text>
          <Text style={styles.menuItem} onPress={() => {alert("You are logged out!");props.navigation.navigate("Home") }}>Logout</Text>
          <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </Background>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    top: -20,
    right: -60,
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
    right: 25,
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
