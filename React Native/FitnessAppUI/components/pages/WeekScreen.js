import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import BtnMenu from '../BtnMenu2';
import Background from '../Background2';
import { purple } from '../Constants';

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
    props.navigation.navigate('ExerciseScreen', { selectedGender: selectedGender,
                                                  exerciseType: exerciseType,
                                                  selectedMode: selectedMode,
                                                  selectedDay: day, });
  };

  return (
    <Background>
        <View style={{ marginHorizontal: 75, marginVertical: 40 }}>
          <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
            <Text style={styles.menuButtonText}>III</Text>
          </TouchableOpacity>
          <Text style={{ color: purple, fontSize: 45, marginBottom: 35 }}>
            Select a Day
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
};

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    top: -20,
    right: -70,
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
