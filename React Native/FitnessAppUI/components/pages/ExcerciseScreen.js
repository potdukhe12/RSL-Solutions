import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BtnMenu from '../BtnMenu'
import Background from '../Background'
import { purple } from '../Constants'

export default ExcerciseScreen = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const exerciseData = {
    Sunday: [
      'Bench Press',
      'Incline Dumbbell Press',
      'Chest Flyes',
      'Tricep Dips',
      'Tricep Pushdowns',
      'Skull Crushers',
      'Cable Crossovers',
      'Push-Ups',
      'Tricep Kickbacks',
      'Decline Bench Press',
    ],
    Monday: [
      'Deadlifts',
      'Pull-Ups',
      'Barbell Rows',
      'Seated Cable Rows',
      'Face Pulls',
      'Bicep Curls (Barbell or Dumbbell)',
      'Hammer Curls',
      'Preacher Curls',
      'Concentration Curls',
      '21s (a bicep curl variation)',
    ],
    Tuesday: [
      'Squats',
      'Leg Press',
      'Lunges',
      'Leg Curls',
      'Leg Extensions',
      'Calf Raises (seated or standing)',
      'Bulgarian Split Squats',
      'Glute Bridges',
      'Deadlifts (if not done on Monday)',
      'Box Jumps',
    ],
    Wednesday: [
      'Military Press (Overhead Press)',
      'Lateral Raises',
      'Front Raises',
      'Rear Delt Flyes',
      'Shrugs',
      'Planks (with variations)',
      'Russian Twists',
      'Hanging Leg Raises',
      'Cable Crunches',
      'Ab Wheel Rollouts',
    ],
    Thursday: [
      'Bench Press (Different Variation)',
      'Incline Bench Press',
      'Chest Flyes',
      'Close-Grip Bench Press',
      'Tricep Dips',
      'Tricep Pushdowns',
      'Skull Crushers',
      'Cable Crossovers',
      'Push-Ups (weighted if needed)',
      'Decline Bench Press (Different Variation)',
    ],
    Friday: [
      'Deadlifts (Different Variation)',
      'Pull-Ups or Lat Pulldowns',
      'T-Bar Rows',
      'One-Arm Dumbbell Rows',
      'Face Pulls',
      'Bicep Curls (Different Variation)',
      'Hammer Curls',
      'Cable Curls',
      'Spider Curls',
      'Reverse Curls',
    ],
    Saturday: [
      'Squats (Different Variation)',
      'Leg Press',
      'Step-Ups',
      'Romanian Deadlifts',
      'Leg Curls',
      'Leg Extensions',
      'Seated Calf Raises',
      'Walking Lunges',
      'Sumo Squats',
      'Plyometric Jumps',
    ],
  };
  
  const selectedDay = props.route.params.selectedDay || 'Sunday'; 

  return (
    <View>
        <ImageBackground source={require("../images/bg3_2.jpg")}
                       style={{ height: '100%' }} />
        <View style={{ position: 'absolute' }}>
{/* <Background> */}
      <ScrollView>
        <View style={{ marginHorizontal: 40, marginVertical: 70 }}>
          <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
            <Text style={styles.menuButtonText}>III</Text>
          </TouchableOpacity>
          <Text style={{ color: purple, fontSize: 50, marginBottom: 25 }}>
            Exercise Screen
          </Text>

          {exerciseData[selectedDay].map((exercise, index) => (
            <BtnMenu
              key={index}
              bgColor={purple}
              textColor="white"
              btnLabel={exercise}
              Press={() => alert(exercise)}
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
