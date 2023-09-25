import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BtnMenu from '../BtnMenu';
import Background from '../Background2';
import { purple } from '../Constants';
import MenuModal from './MenuModal'; // Import the MenuModal component

export default function HomeScreen(props) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedExerciseType, setSelectedExerciseType] = useState('');

  const selectedGender = props.route.params.selectedGender || 'Male';

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleExerciseTypeSelection = (exerciseType) => {
    setSelectedExerciseType(exerciseType);
    props.navigation.navigate("ModeScreen", {
      selectedGender: selectedGender,
      exerciseType: exerciseType,
    });
  };

  const exerciseTypeOptions = [
    'Gym Exercise',
    'Dumbbells Exercise',
    'Exercise without Equipments',
  ];

  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 35, width: 295 }}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Text style={styles.menuButtonText}>III</Text>
        </TouchableOpacity>
        <Text style={{ color: purple, fontSize: 48, marginBottom: 50 }}>
          Select Exercise Type
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

      {/* Use the MenuModal component here */}
      <MenuModal isVisible={menuVisible} toggleMenu={toggleMenu} navigation={props.navigation} />
    </Background>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    top: -10,
    right: -50,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  menuButtonText: {
    color: purple,
    fontSize: 22,
    transform: [{ rotate: '90deg' }],
  },
});
