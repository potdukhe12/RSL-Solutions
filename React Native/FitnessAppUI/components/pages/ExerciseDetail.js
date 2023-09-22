import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import BtnMenu from '../BtnMenu'
import Background from '../Background2'
import { purple } from '../Constants'
import Video from 'react-native-video';
import video from '../Videos/BenchPress.mp4';
// import video2 from '../Videos/dumbbellExercisesMen/DumbbelBenchPress.mp4';

export default function ExerciseDetail(props) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleInfoModal = () => {
    setInfoModalVisible(!infoModalVisible);
  };

  const exercise = props.route.params.exercise;
  const fileOpt = props.route.params.fileOpt;
  const link = '../Videos/'+fileOpt+'/'+exercise.name+'.mp4'
  const link2 = '../Videos/dumbbellExercisesMen/DumbbellBenchPress.mp4'
  const link3 = "../Videos/BenchPress.mp4"

  return (
    <Background>
      <View style={styles.container}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Text style={styles.menuButtonText}>III</Text>
        </TouchableOpacity>
        <Text style={{ color: purple, fontSize: 50, marginBottom: 25 }}>
            Exercise Detail
        </Text>
        <Text>link3 = {link3}</Text>
        <View style={styles.videoContainer}>
          <Video
            source={{link3}} // the video file
            paused={false} // make it start
            repeat={true} // make it a loop
            style={styles.video} // style the video component
            resizeMode="cover" // Crop the video to cover the container
          />
        </View>

        <TouchableOpacity
          style={styles.customButton}
          onPress={toggleInfoModal} // Open the info modal when BtnMenu is pressed
        >
          <Text style={styles.customButtonText}>{exercise.name}</Text>
        </TouchableOpacity>

        {/* Info Modal */}
        <Modal
          visible={infoModalVisible}
          // onBackdropPress={toggleInfoModal} // Close the modal when tapping outside
          animationIn="fadeIn"
          animationOut="fadeOut"
          onRequestClose={toggleInfoModal}
        >
          <View style={styles.infoModal}>
            <Text style={styles.infoModalTitle}>{exercise.name}</Text>
            <Text style={styles.infoModalDescription}>
              {exercise.description}
            </Text>
            <TouchableOpacity
              style={styles.infoModalCloseButton}
              onPress={toggleInfoModal} // Close the modal when the close button is pressed
            >
              <Text style={styles.infoModalCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginVertical: 70,
  },
  menuButton: {
    position: 'absolute',
    top: -50,
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
  // Style for the video container
  videoContainer: {
    flex: 1, // Fill the entire available space
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    marginBottom: 50,
  },
  // Style for the Video component
  video: {
    width: '100%', // Set the video width to 100%
    aspectRatio: 1 / 1, // Adjust aspect ratio as needed
  },
  customButton: {
    backgroundColor: purple,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  customButtonText: {
    color: 'white',
    fontSize: 20,
  },
  infoModal: {
    // backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%', // Cover 80% of the screen width
    alignSelf: 'center', // Center horizontally
    marginTop: '30%', // Push the modal down to cover 60% of the screen
    elevation: 5, // Add a shadow
  },
  infoModalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: purple,
  },
  infoModalDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  infoModalCloseButton: {
    alignSelf: 'flex-end',
  },
  infoModalCloseButtonText: {
    fontSize: 18,
    color: purple,
  },
});
