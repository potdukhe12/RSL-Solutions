import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import BtnMenu from '../others/BtnMenu';
import Background from '../others/Background2';
import { purple } from '../others/Constants';
import MenuModal from '../others/MenuModal';
import style from '../others/style';

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
      <View style={style.screenStyle}>
        <TouchableOpacity style={style.menuButton} onPress={toggleMenu}>
          <Text style={style.menuButtonText}>III</Text>
        </TouchableOpacity>
        <Text style={style.title}>
          Select Mode :
        </Text>

        <ScrollView style={style.scrollStyle}
                    showsVerticalScrollIndicator={false} >
            {modeOptions.map((option) => (
            <BtnMenu
              key={option}
              bgColor={option === selectedMode ? 'green' : purple}
              textColor="white"
              btnLabel={option}
              Press={() => handleModeSelection(option)}
            />
          ))}
        </ScrollView>
      </View>

      {/* Use the MenuModal component here */}
      <MenuModal isVisible={menuVisible} toggleMenu={toggleMenu} navigation={props.navigation} />
    </Background>
  );
}

