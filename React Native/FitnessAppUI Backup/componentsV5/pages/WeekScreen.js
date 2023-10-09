import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import BtnMenu from '../BtnMenu2';
import Background from '../Background2';
import { purple } from '../Constants';
import MenuModal from './MenuModal'; // Import the MenuModal component

export default WeekScreen = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const handleDaySelection = (day) => {
    setSelectedDay(day);
    const { selectedGender, exerciseType, selectedMode } = props.route.params;
    props.navigation.navigate('ExerciseScreen', {
      selectedGender: selectedGender,
      exerciseType: exerciseType,
      selectedMode: selectedMode,
      selectedDay: day,
    });
  };

  return (
    <Background>
      <View style={{ marginHorizontal: 45, marginVertical: 40, width: 300 }}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Text style={styles.menuButtonText}>III</Text>
        </TouchableOpacity>
        <Text style={{ color: purple, fontSize: 60, marginBottom: 45 }}>
          Select Day
        </Text>

        <ScrollView style={{ height: Dimensions.get('window').height * 0.75 }}>

          {daysOfWeek.map((day) => (
            <BtnMenu
              key={day}
              bgColor={day === selectedDay ? 'green' : purple}
              textColor="white"
              btnLabel={day}
              Press={() => handleDaySelection(day)}
            />
          ))}

        </ScrollView>

      </View>

      {/* Use the MenuModal component here */}
      <MenuModal isVisible={menuVisible} toggleMenu={toggleMenu} navigation={props.navigation} />
    </Background>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    top: -20,
    right: -40,
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
});
