import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BtnMenu from '../BtnMenu2'
import Background from '../Background'
import { purple } from '../Constants'
import dumbbellExercisesMen from './dumbbellExercisesMen'

export default ExerciseScreen = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const beginner = dumbbellExercisesMen.beginner;
  const exercises = beginner.exercises;
  
  const selectedDay = props.route.params.selectedDay || 'Sunday'; 

  return (
    <View>
    {/* <Background> */}
      <ScrollView>
        <View style={{ marginHorizontal: 40, marginVertical: 70 }}>
          <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
            <Text style={styles.menuButtonText}>III</Text>
          </TouchableOpacity>
          <Text style={{ color: purple, fontSize: 45, marginBottom: 25 }}>
            Exercise Screen
          </Text>

          {exercises.map((exercise, index) => (
            <BtnMenu
              key={index}
              bgColor={purple}
              textColor="white"
              btnLabel={exercise.name}
              Press={() => { 
                // alert(exercise.name);
                props.navigation.navigate('ExerciseDetail', { exercise }); // Pass the exercise object to ExerciseDetail
              }}
            />
          ))}

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
    {/* </Background> */}
    </View>
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
