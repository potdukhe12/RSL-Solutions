import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView, Dimensions } from 'react-native';
import React, { useState } from 'react';
import BtnMenu from '../BtnMenu2';
import Background from '../Background2';
import { purple } from '../Constants';
import dumbbellExercisesMen from './dumbbellExercisesMen';
import gymExercisesMen from './gymExercisesMen';
import noEquipmentExercisesMen from './noEquipmentExercisesMen';
import dumbbellExercisesWomen from './dumbbellExercisesWomen';
import gymExercisesWomen from './gymExercisesWomen';
import noEquipmentExercisesWomen from './noEquipmentExercisesWomen';

export default ExerciseScreen = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const { selectedDay, selectedGender, exerciseType, selectedMode } = props.route.params; 
  
  const gender = selectedGender === 'Male' ? 'Men' : 'Women';
  const selectedExercise = (exerciseType === 'Gym Exercise') ? 'gymExercises' : ( exerciseType === 'Dumbbells Exercise' ? 'dumbbellExercises' : 'noEquipmentExercises' );
  
  const fileName = selectedExercise+gender;
  let fileOpt;
  if(fileName === 'gymExercisesMen')
    fileOpt = gymExercisesMen;
  else if(fileName === 'noEquipmentExercisesMen')
    fileOpt = noEquipmentExercisesMen;
  else if(fileName === 'dumbbellExercisesWomen')
    fileOpt = dumbbellExercisesWomen;
  else if(fileName === 'gymExercisesWomen')
    fileOpt = gymExercisesWomen;
  else if(fileName === 'noEquipmentExercisesWomen')
    fileOpt = noEquipmentExercisesWomen;
  else
    fileOpt = dumbbellExercisesMen;

  let exercises;
  if(selectedMode === 'Intermediate')
    exercises = fileOpt.intermediate.exercises;
  else if(selectedMode === 'Advanced')
    exercises = fileOpt.advanced.exercises;
  else
      exercises = fileOpt.beginner.exercises;
  
  const handleExercisePress = (exercise) => {
    props.navigation.navigate('ExerciseDetail', {
      exercise: exercise,
      fileName: fileName,
      // selectedDay: selectedDay,
      // selectedGender: selectedGender,
      // exerciseType: exerciseType,
      // selectedMode: selectedMode,
    });
  };

  return (
    <Background>
          <View style={{ marginHorizontal: 48, marginVertical: 40, width:'80%' }}>
            <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
              <Text style={styles.menuButtonText}>III</Text>
            </TouchableOpacity>
            <Text style={{ color: purple, fontSize: 40, marginBottom: 25 }}>
              Exercise Screen
            </Text>

            <ScrollView style={{ height: Dimensions.get('window').height * 0.75, marginBottom: 50 }}>

                {/* <Text>{selectedDay}</Text>
                <Text>{selectedGender}</Text>  
                <Text>{exerciseType}</Text>  
                <Text>{selectedMode}</Text>   */}

              {exercises.map((exercise, index) => (
                <BtnMenu
                  key={index}
                  bgColor={purple}
                  textColor="white"
                  btnLabel={exercise.name}
                  Press={() => handleExercisePress(exercise)} // Use the handleExercisePress function
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
        {/* </ScrollView> */}
      </Background>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    top: -25,
    right: -20,
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
