import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import BtnMenu from '../BtnMenu'
import Background from '../Background2'
import { purple, white } from '../Constants'
import Video from 'react-native-video';
import MenuModal from './MenuModal';
import FastImage from 'react-native-fast-image'

export default function ExerciseDetail(props) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [pathUrl, setPathUrl] = useState("../Videos/BenchPress.mp4");

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleInfoModal = () => {
    setInfoModalVisible(!infoModalVisible);
  };
  
  const exercise = props.route.params.exercise;
  // const fileName = props.route.params.fileName;
    
    
///////////////////////////////////////////////////

// dumbbellExercisesMen (beginner)
 const GobletSquats= "../Videos/dumbbellExercisesMen/GobletSquats.mp4";
 const DumbbellBenchPress = "../Videos/dumbbellExercisesMen/DumbbellBenchPress.mp4";
 const BentOverRows = "../Videos/dumbbellExercisesMen/BentOverRows.mp4";
 const DumbbellLunges = "../Videos/dumbbellExercisesMen/DumbbellLunges.mp4";
 const DumbbellShoulderPress = "../Videos/dumbbellExercisesMen/DumbbellShoulderPress.mp4";
 const DumbbellRomanianDeadlifts = "../Videos/dumbbellExercisesMen/DumbbellRomanianDeadlifts.mp4";
 const DumbbellBicepCurls = "../Videos/dumbbellExercisesMen/DumbbellBicepCurls.mp4";
 const TricepDipswithDumbbells = "../Videos/dumbbellExercisesMen/TricepDipswithDumbbells.mp4";
 const DumbbellRussianTwists = "../Videos/dumbbellExercisesMen/DumbbellRussianTwists.mp4";
 const DumbbellPlankRows = "../Videos/dumbbellExercisesMen/DumbbellPlankRows.mp4";

//  gymExercisesMen (beginner)
 const BarbellSquats = "../Videos/gymExercisesMen/BarbellSquats.mp4";
 const LatPulldowns = "../Videos/gymExercisesMen/LatPulldowns.mp4";
 const SeatedLegPress = "../Videos/gymExercisesMen/SeatedLegPress.mp4";
 const DumbbellRows = "../Videos/gymExercisesMen/DumbbellRows.mp4";
 const MachineChestFlyes = "../Videos/gymExercisesMen/MachineChestFlyes.mp4";
 const CableFacePulls = "../Videos/gymExercisesMen/CableFacePulls.mp4";
 const LegExtensions = "../Videos/gymExercisesMen/LegExtensions.mp4";
 const Plank = "../Videos/gymExercisesMen/Plank.mp4";

//  noEquipmentExercisesMen (beginner)
 const PushUps = "../Videos/noEquipmentExercisesMen/PushUps.mp4";
const BodyweightSquats = "../Videos/noEquipmentExercisesMen/BodyweightSquats.mp4";
const Lunges = "../Videos/noEquipmentExercisesMen/Lunges.mp4";
const MountainClimbers = "../Videos/noEquipmentExercisesMen/MountainClimbers.mp4";
const GluteBridges = "../Videos/noEquipmentExercisesMen/GluteBridges.mp4";
const TricepDips = "../Videos/noEquipmentExercisesMen/TricepDips.mp4";
const Supermans = "../Videos/noEquipmentExercisesMen/Supermans.mp4";
const HighKnees = "../Videos/noEquipmentExercisesMen/HighKnees.mp4";
const SidePlanks = "../Videos/noEquipmentExercisesMen/SidePlanks.mp4";

 
///////////////////////////////////////////////////

    // const link2 = require(`../Videos/dumbbellExercisesMen/DumbbellBenchPress.mp4`);
    // const link3 = require(`../Videos/BenchPress.mp4`);
    // let link4 = "../Videos/dumbbellExercisesMen/DumbbellBicepCurls.mp4";
    // let videoUri = require(link4);

    let videoUri;
    
switch (pathUrl) {
  case "GobletSquats":
    videoUri = require(GobletSquats);
    break;
  case "DumbbellBenchPress":
    videoUri = require(DumbbellBenchPress);
    break;
  case "BentOverRows":
    videoUri = require(BentOverRows);
    break;
  case "DumbbellLunges":
    videoUri = require(DumbbellLunges);
    break;
  case "DumbbellShoulderPress":
    videoUri = require(DumbbellShoulderPress);
    break;
  case "DumbbellRomanianDeadlifts":
    videoUri = require(DumbbellRomanianDeadlifts);
    break;
  case "DumbbellBicepCurls":
    videoUri = require(DumbbellBicepCurls);
    break;
  case "TricepDipswithDumbbells":
    videoUri = require(TricepDipswithDumbbells);
    break;
  case "DumbbellRussianTwists":
    videoUri = require(DumbbellRussianTwists);
    break;
  case "DumbbellPlankRows":
    videoUri = require(DumbbellPlankRows);
    break;
  case "BarbellSquats":
    videoUri = require(BarbellSquats);
    break;
  case "LatPulldowns":
    videoUri = require(LatPulldowns);
    break;
  case "SeatedLegPress":
    videoUri = require(SeatedLegPress);
    break;
  case "DumbbellRows":
    videoUri = require(DumbbellRows);
    break;
  case "MachineChestFlyes":
    videoUri = require(MachineChestFlyes);
    break;
  case "CableFacePulls":
    videoUri = require(CableFacePulls);
    break;
  case "LegExtensions":
    videoUri = require(LegExtensions);
    break;
  case "Plank":
    videoUri = require(Plank);
    break;
  case "PushUps":
    videoUri = require(PushUps);
    break;
  case "BodyweightSquats":
    videoUri = require(BodyweightSquats);
    break;
  case "Lunges":
    videoUri = require(Lunges);
    break;
  case "MountainClimbers":
    videoUri = require(MountainClimbers);
    break;
  case "GluteBridges":
    videoUri = require(GluteBridges);
    break;
  case "TricepDips":
    videoUri = require(TricepDips);
    break;
  case "Supermans":
    videoUri = require(Supermans);
    break;
  case "HighKnees":
    videoUri = require(HighKnees);
    break;
  case "SidePlanks":
    videoUri = require(SidePlanks);
    break;
  default:
    videoUri = require("../Videos/BenchPress.mp4");
    break;
}



/////////////////////////////////////////////////////

    useEffect(() => {
      setPathUrl(exercise.path);
      // const videoUri = require(pathUrl);
    }, [exercise.path]);

    // let videoUri = require(pathUrl);

  return (
    <Background>
      <View style={styles.container}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Text style={styles.menuButtonText}>III</Text>
        </TouchableOpacity>
        <ScrollView style={{ height: Dimensions.get('window').height * 0.85, 
                    marginBottom: 10, }}
                    showsVerticalScrollIndicator={false} >
          <Text style={{ color: purple, fontSize: 50, marginBottom: 25, }}>
              {exercise.name}
          </Text>
          <View style={styles.videoContainer}>
            <Video
                // source={link2}
                source={videoUri}
                paused={false} // make it start
                repeat={true} // make it a loop
                style={styles.video}
                resizeMode= "contain"
            />
            {/* <FastImage
                source={{
                uri: 'https://i.makeagif.com/media/12-13-2016/2G2Qfr.gif',
                priority: FastImage.priority.normal,
                }}
                style={{ width: 350, height: 200 }}
                resizeMode={FastImage.resizeMode.contain}
                /> */}
          </View>
          <Text style={styles.infoModalTitle}>Instruction : {exercise.reps}</Text>
          <TouchableOpacity
            style={styles.customButton}
            onPress={toggleInfoModal} // Open the info modal when BtnMenu is pressed
          >
            <Text style={styles.customButtonText}>View Steps</Text>
          </TouchableOpacity>
        </ScrollView>
        {/* Info Modal */}
        <Modal
          visible={infoModalVisible}
          transparent={true}
          onBackdropPress={toggleInfoModal} // Close the modal when tapping outside
          animationIn="fadeIn"
          animationOut="fadeOut"
          onRequestClose={toggleInfoModal}
        >
          <View style={styles.infoContainer}>
              <View style={styles.infoModal}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.infoModalTitle}>Follow this steps :</Text>
                <View>
                  {exercise.description.split('. ').map((point, index) => (
                    <Text key={index} style={styles.infoModalDescription}>
                      • {' '}{point}
                    </Text>
                  ))}
                </View>
        
                <Text style={styles.infoModalTitle}>Uses :</Text>
                <View>
                  <Text style={styles.infoModalDescription}>{exercise.use}</Text>
                </View>
                </ScrollView>
                <View style={styles.infoModalButtonContainer}>
                  <Text style={styles.arrowButtonText}>Scroll Down<Text style={{transform: [{ rotate: '90deg' }]}}>{'>'}</Text></Text>
                  <TouchableOpacity
                    style={styles.infoModalCloseButton}
                    onPress={toggleInfoModal} // Close the modal when the close button is pressed
                  >
                    <Text style={styles.infoModalCloseButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </View>
        </Modal>
      </View>

      <MenuModal isVisible={menuVisible} toggleMenu={toggleMenu} navigation={props.navigation} />
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 45, 
    marginVertical: 55, 
    width: 305 
  },
  menuButton: {
    position: 'absolute',
    top: -35,
    right: -30,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
    elevation: 3, // Add a shadow
  },
  menuButtonText: {
    color: purple,
    fontSize: 22,
    transform: [{ rotate: '90deg' }],
  },
  
  // Style for the video container
  videoContainer: {
    flex: 1, // Fill the entire available space
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    marginBottom: 30,
    borderRadius: 20,
    elevation: 1,
    padding: 10,
  },
  // Style for the Video component
  video: {
    width: '100%', // Set the video width to 100%
    aspectRatio: 1 / 1, // Adjust aspect ratio as needed
    borderRadius: 10,
  },
  customButton: {
    backgroundColor: purple,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 50,
    alignItems: 'center',
    // borderRadius: 10,
    elevation: 5,
  },
  customButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  infoModal: {
    position: 'absolute',
    bottom: 80,
    padding: 30,
    borderRadius: 10,
    backgroundColor: 'white',
    width: '80%',
    height: '65%',
    alignSelf: 'center', 
    elevation: 20, // Add a shadow
  },
  infoModalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: purple,
    alignSelf: 'center'
  },
  infoModalDescription: {
    fontSize: 20,
    marginBottom: 15,
  },
  infoModalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowButtonText: {
    alignSelf: 'flex-start',
    color: 'gray',
    fontSize: 16,
    marginTop: 20,
  },
  infoModalCloseButton: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    borderRadius: 10,
    elevation: 10,
  },
  
  infoModalCloseButtonText: {
    fontSize: 18,
    color: 'white',
    backgroundColor: purple,
    borderRadius: 7,
    padding: 5
  },
});
