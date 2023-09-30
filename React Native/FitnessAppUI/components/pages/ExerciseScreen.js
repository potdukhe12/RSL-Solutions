import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import BtnMenu from '../BtnMenu2';
import Background from '../Background2';
import { purple } from '../Constants';
import MenuModal from './MenuModal';
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

  let exercises = fileOpt[selectedMode].exercises;
  // let exercises;
  // if(selectedMode === 'Intermediate')
  //   exercises = fileOpt.intermediate.exercises;
  // else if(selectedMode === 'Advanced')
  //   exercises = fileOpt.advanced.exercises;
  // else
  //     exercises = fileOpt.beginner.exercises;
  
  const handleExercisePress = (exercise) => {
    props.navigation.navigate('ExerciseDetail', {
      exercise: exercise,
      // fileName: fileName,
      // selectedDay: selectedDay,
      // selectedGender: selectedGender,
      // exerciseType: exerciseType,
      // selectedMode: selectedMode,
    });
  };

  return (
    <Background>
      <View style={{ marginHorizontal: 45, marginVertical: 30, width: 305  }}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Text style={styles.menuButtonText}>III</Text>
        </TouchableOpacity>
        <Text style={{ color: purple, fontSize: 50, marginBottom: 10 }}>
          Exercise Screen
        </Text>

        <ScrollView style={{ height: Dimensions.get('window').height * 0.85, 
                    marginBottom: 10, }}
                    showsVerticalScrollIndicator={false} >
          <View style={{ marginBottom: 100, marginTop: 30 }}>
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

          </View>
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
    top: -15,
    right: -30,
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
