import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import BtnMenu from '../BtnMenu';
import Background from '../Background2';
import { purple } from '../Constants';

export default function HomeScreen(props) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedExerciseType, setSelectedExerciseType] = useState('');

  const selectedGender = props.route.params.selectedGender || 'Male';

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleExerciseTypeSelection = (exerciseType) => {
    setSelectedExerciseType(exerciseType);
    props.navigation.navigate("ModeScreen", { selectedGender: selectedGender,
                                              exerciseType: exerciseType, });
  };

  const exerciseTypeOptions = [
    'Gym Exercise',
    'Dumbbells Exercise',
    'Exercise without Equipments',
  ];

  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 70 }}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Text style={styles.menuButtonText}>III</Text>
        </TouchableOpacity>
        <Text style={{ color: purple, fontSize: 50, marginBottom: 25 }}>
          Home Screen {selectedGender}
        </Text>

        {exerciseTypeOptions.map((option) => (
          <BtnMenu
            key={option}
            bgColor={option === selectedExerciseType ? 'green' : purple}
            textColor="white"
            btnLabel={option}
            Press={() => handleExerciseTypeSelection(option)}
          />
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
