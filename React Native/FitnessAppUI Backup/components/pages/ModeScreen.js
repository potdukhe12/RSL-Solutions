import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BtnMenu from '../BtnMenu';
import Background from '../Background2';
import { purple } from '../Constants';
import MenuModal from './MenuModal'; // Import the MenuModal component

export default function ModeScreen(props) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedMode, setSelectedMode] = useState('');

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const selectedGender = props.route.params.selectedGender || 'Male';
  const exerciseType = props.route.params.exerciseType || 'Gym Exercise';

  const handleModeSelection = (mode) => {
    setSelectedMode(mode);
    props.navigation.navigate('WeekScreen', {
      selectedGender: selectedGender,
      exerciseType: exerciseType,
      selectedMode: mode,
    });
  };

  const modeOptions = ['Beginner', 'Intermediate', 'Advanced'];

  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 50 }}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Text style={styles.menuButtonText}>III</Text>
        </TouchableOpacity>
        <Text style={{ color: purple, fontSize: 55, marginBottom: 65 }}>
          Select Mode
        </Text>

        {modeOptions.map((option) => (
          <BtnMenu
            key={option}
            bgColor={option === selectedMode ? 'green' : purple}
            textColor="white"
            btnLabel={option}
            Press={() => handleModeSelection(option)}
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
    top: -30,
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
