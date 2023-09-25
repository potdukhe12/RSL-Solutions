import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import BtnMenu from '../BtnMenu'
import Background from '../Background2'
import { purple } from '../Constants'
import Video from 'react-native-video';
import MenuModal from './MenuModal'

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
  const fileName = props.route.params.fileName;
    
    
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

    // let videoUri;
    // if (pathUrl == "GobletSquats")
    //   videoUri = require(GobletSquats);
    // else if (pathUrl == "DumbbellBenchPress")
    //   videoUri = require(DumbbellBenchPress);
    // else if (pathUrl == "BentOverRows")
    //   videoUri = require(BentOverRows);
    // else if (pathUrl == "DumbbellLunges")
    //   videoUri = require(DumbbellLunges);
    // else if (pathUrl == "DumbbellShoulderPress")
    //   videoUri = require(DumbbellShoulderPress);
    // else if (pathUrl == "DumbbellRomanianDeadlifts")
    //   videoUri = require(DumbbellRomanianDeadlifts);
    // else if (pathUrl == "DumbbellBicepCurls")
    //   videoUri = require(DumbbellBicepCurls);
    // else if (pathUrl == "TricepDipswithDumbbells")
    //   videoUri = require(TricepDipswithDumbbells);
    // else if (pathUrl == "DumbbellRussianTwists")
    //   videoUri = require(DumbbellRussianTwists);
    // else if (pathUrl == "DumbbellPlankRows")
    //   videoUri = require(DumbbellPlankRows);

    // else if (pathUrl == "BarbellSquats")
    //   videoUri = require(BarbellSquats);
    // else if (pathUrl == "LatPulldowns")
    //   videoUri = require(LatPulldowns);
    // else if (pathUrl == "SeatedLegPress")
    //   videoUri = require(SeatedLegPress);
    // else if (pathUrl == "DumbbellRows")
    //   videoUri = require(DumbbellRows);
    // else if (pathUrl == "MachineChestFlyes")
    //   videoUri = require(MachineChestFlyes);
    // else if (pathUrl == "CableFacePulls")
    //   videoUri = require(CableFacePulls);
    // else if (pathUrl == "LegExtensions")
    //   videoUri = require(LegExtensions);
    // else if (pathUrl == "Plank")
    //   videoUri = require(Plank);

    // else if (pathUrl == "PushUps")
    //   videoUri = require(PushUps);
    // else if (pathUrl == "BodyweightSquats")
    //   videoUri = require(BodyweightSquats);
    // else if (pathUrl == "Lunges")
    //   videoUri = require(Lunges);
    // else if (pathUrl == "MountainClimbers")
    //   videoUri = require(MountainClimbers);
    // else if (pathUrl == "GluteBridges")
    //   videoUri = require(GluteBridges);
    // else if (pathUrl == "TricepDips")
    //   videoUri = require(TricepDips);
    // else if (pathUrl == "Supermans")
    //   videoUri = require(Supermans);
    // else if (pathUrl == "HighKnees")
    //   videoUri = require(HighKnees);
    // else if (pathUrl == "SidePlanks")
    //   videoUri = require(SidePlanks);

    // else
    //   videoUri = require(GobletSquats); // Default exercise

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
    videoUri = require(GobletSquats); // Default exercise
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
        <Text style={{ color: purple, fontSize: 50, marginBottom: 25 }}>
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
        </View>
        <Text style={styles.infoModalTitle}>Instruction : {exercise.reps}</Text>
        <TouchableOpacity
          style={styles.customButton}
          onPress={toggleInfoModal} // Open the info modal when BtnMenu is pressed
        >
          <Text style={styles.customButtonText}>View Steps</Text>
        </TouchableOpacity>

        {/* Info Modal */}
        <Modal
          visible={infoModalVisible}
          transparent={true}
          onBackdropPress={toggleInfoModal} // Close the modal when tapping outside
          animationIn="fadeIn"
          animationOut="fadeOut"
          onRequestClose={toggleInfoModal}
        >
          <View style={styles.infoModal}>
            <Text style={styles.infoModalTitle}>Follow this steps :</Text>
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
    elevation: 10, // Add a shadow
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
    alignItems: 'center',
  },
  customButtonText: {
    color: 'white',
    fontSize: 20,
  },
  infoModal: {
    position: 'absolute',
    bottom: 80,
    padding: 30,
    borderRadius: 10,
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center', 
    elevation: 20, // Add a shadow
  },
  infoModalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: purple,
    alignSelf: 'center'
  },
  infoModalDescription: {
    fontSize: 18,
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
