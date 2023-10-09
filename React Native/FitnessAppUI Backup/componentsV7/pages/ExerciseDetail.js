import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView, Dimensions } from 'react-native'
import WebView from 'react-native-webview';
import React, { useEffect, useState } from 'react'
import BtnMenu from '../others/BtnMenu'
import Background from '../others/Background2'
import { purple, white } from '../others/Constants'
import Video from 'react-native-video';
import MenuModal from '../others/MenuModal';
import InfoModal from '../modals/InfoModal';
import style from '../others/style2';
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
 const DumbbellBentOverRows = "../Videos/dumbbellExercisesMen/DumbbellBentOverRows.mp4";
 const DumbbellLunges = "../Videos/dumbbellExercisesMen/DumbbellLunges.mp4";
 const DumbbellShoulderPress = "../Videos/dumbbellExercisesMen/DumbbellShoulderPress.mp4";
 const DumbbellRomanianDeadlifts = "../Videos/dumbbellExercisesMen/DumbbellRomanianDeadlifts.mp4";
 const DumbbellBicepCurls = "../Videos/dumbbellExercisesMen/DumbbellBicepCurls.mp4";
 const TricepDipswithDumbbells = "../Videos/dumbbellExercisesMen/TricepDipswithDumbbells.mp4";
 const DumbbellRussianTwists = "../Videos/dumbbellExercisesMen/DumbbellRussianTwists.mp4";
 const DumbbellPlankRows = "../Videos/dumbbellExercisesMen/DumbbellPlankRows.mp4";

 // dumbbellExercisesMen (intermediate)
const DumbbellFrontSquats = "../Videos/dumbbellExercisesMen/DumbbellFrontSquats.mp4";
const DumbbellRenegadeRows = "../Videos/dumbbellExercisesMen/DumbbellRenegadeRows.mp4";
const DumbbellPushPress = "../Videos/dumbbellExercisesMen/DumbbellPushPress.mp4";
const DumbbellBulgarianSplitSquats = "../Videos/dumbbellExercisesMen/DumbbellBulgarianSplitSquats.mp4";
const DumbbellHammerCurls = "../Videos/dumbbellExercisesMen/DumbbellHammerCurls.mp4";
const DumbbellSkullCrushers = "../Videos/dumbbellExercisesMen/DumbbellSkullCrushers.mp4";
const DumbbellFarmersWalk = "../Videos/dumbbellExercisesMen/DumbbellFarmersWalk.mp4";

// dumbbellExercisesMen (advanced)
const DumbbellThrusters = "../Videos/dumbbellExercisesMen/DumbbellThrusters.mp4";
const DumbbellCleanandPress = "../Videos/dumbbellExercisesMen/DumbbellCleanandPress.mp4";
const DumbbellRomanianDeadliftswithSingleLegBalance = "../Videos/dumbbellExercisesMen/DumbbellRomanianDeadliftswithSingleLegBalance.mp4";


////////////////////////

//  gymExercisesMen (beginner)
const BarbellSquats = "../Videos/gymExercisesMen/BarbellSquats.mp4";
const LatPulldowns = "../Videos/gymExercisesMen/LatPulldowns.mp4";
const SeatedLegPress = "../Videos/gymExercisesMen/SeatedLegPress.mp4";
const DumbbellRows = "../Videos/gymExercisesMen/DumbbellRows.mp4";
const MachineChestFlyes = "../Videos/gymExercisesMen/MachineChestFlyes.mp4";
const CableFacePulls = "../Videos/gymExercisesMen/CableFacePulls.mp4";
const LegExtensions = "../Videos/gymExercisesMen/LegExtensions.mp4";
const Plank = "../Videos/gymExercisesMen/Plank.mp4";

// gymExercisesMen (intermediate)
const BarbellBackSquats = "../Videos/gymExercisesMen/BarbellBackSquats.mp4";
const AssistedPullUps = "../Videos/gymExercisesMen/AssistedPullUps.mp4";
const BarbellBenchPress = "../Videos/gymExercisesMen/BarbellBenchPress.mp4";
const BarbellRows = "../Videos/gymExercisesMen/BarbellRows.mp4";
const Deadlifts = "../Videos/gymExercisesMen/Deadlifts.mp4";
const InclineDumbbellPress = "../Videos/gymExercisesMen/InclineDumbbellPress.mp4";
const BarbellBentOverRows = "../Videos/gymExercisesMen/BarbellBentOverRows.mp4";
const LegPress = "../Videos/gymExercisesMen/LegPress.mp4";
const HangingLegRaises = "../Videos/gymExercisesMen/HangingLegRaises.mp4";

// gymExercisesMen (advanced)
const WeightedPullUps = "../Videos/gymExercisesMen/WeightedPullUps.mp4";
const BarbellLunges = "../Videos/gymExercisesMen/BarbellLunges.mp4";
const WeightedHangingLegRaises = "../Videos/gymExercisesMen/WeightedHangingLegRaises.mp4";

///////////////////////

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

// noEquipmentExercisesMen (intermediate)
const WidePushUps = "../Videos/noEquipmentExercisesMen/WidePushUps.mp4";
const PistolSquats = "../Videos/noEquipmentExercisesMen/PistolSquats.mp4";
const PlankWithShoulderTaps = "../Videos/noEquipmentExercisesMen/PlankWithShoulderTaps.mp4";
const JumpingLunges = "../Videos/noEquipmentExercisesMen/JumpingLunges.mp4";
const DiamondPushUps = "../Videos/noEquipmentExercisesMen/DiamondPushUps.mp4";
const HinduPushUps = "../Videos/noEquipmentExercisesMen/HinduPushUps.mp4";
const BodyweightRows = "../Videos/noEquipmentExercisesMen/BodyweightRows.mp4";
const BicycleCrunches = "../Videos/noEquipmentExercisesMen/BicycleCrunches.mp4";
const Burpees = "../Videos/noEquipmentExercisesMen/Burpees.mp4";
const SidePlankWithLegLift = "../Videos/noEquipmentExercisesMen/SidePlankWithLegLift.mp4";

// noEquipmentExercisesMen (advanced)
const OneArmPushUps = "../Videos/noEquipmentExercisesMen/OneArmPushUps.mp4";
const PlyometricSquats = "../Videos/noEquipmentExercisesMen/PlyometricSquats.mp4";
const HandstandPikePushUps = "../Videos/noEquipmentExercisesMen/HandstandPikePushUps.mp4";
const PlyometricLunges = "../Videos/noEquipmentExercisesMen/PlyometricLunges.mp4";
const ClappingPushUps = "../Videos/noEquipmentExercisesMen/ClappingPushUps.mp4";
const MuscleUpsPullUps = "../Videos/noEquipmentExercisesMen/PullUps.mp4";
const DragonFlags = "../Videos/noEquipmentExercisesMen/DragonFlags.mp4";
const LSitHangingLegRaises = "../Videos/noEquipmentExercisesMen/LSitHangingLegRaises.mp4";
const ExplosiveBurpees = "../Videos/noEquipmentExercisesMen/Burpees.mp4";
const PlankArmLegLift = "../Videos/noEquipmentExercisesMen/PlankArmLegLift.mp4";


 
///////////////////////////////////////////////////


let videoUri;
let pathUri;

switch (pathUrl) {
  // Beginner dumbbell
  case "GobletSquats":            
        videoUri = require(GobletSquats); 
        pathUri = 'https://media.tenor.com/qFbKc6Uh8ewAAAAd/gobletsquats.gif'; break;
  case "DumbbellBenchPress":      
        videoUri = require(DumbbellBenchPress); 
        pathUri = 'https://media.tenor.com/p_R7ZPIF2s8AAAAC/dumbbellbenchpress.gif'; break;
  case "BentOverRows":            
        videoUri = require(DumbbellBentOverRows); 
        pathUri = 'https://media.tenor.com/BUTY_prSQAoAAAAC/dumbbellrows.gif'; break;
  case "DumbbellLunges":          
        videoUri = require(DumbbellLunges); 
        pathUri = 'https://media.tenor.com/8tiJ9jjB8U4AAAAd/dumbbelllunges.gif'; break;
  case "DumbbellShoulderPress":   
        videoUri = require(DumbbellShoulderPress); 
        pathUri = 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif'; break;
  case "DumbbellRomanianDeadlifts":
        videoUri = require(DumbbellRomanianDeadlifts); 
        pathUri = 'https://media.tenor.com/1S6xA-aeHiQAAAAC/dumbbellromaniandeadlifts.gif'; break;
  case "DumbbellBicepCurls":      
        videoUri = require(DumbbellBicepCurls); 
        pathUri = 'https://media.tenor.com/dQ0q45CW-twAAAAC/dumbbellbicepcurls.gif'; break;
  case "TricepDipswithDumbbells": 
        videoUri = require(TricepDipswithDumbbells); 
        pathUri = 'https://media.tenor.com/B1KE8Bne6f4AAAAC/noequipmentexercisesmen-tricepdips.gif'; break;
  case "DumbbellRussianTwists":   
        videoUri = require(DumbbellRussianTwists); 
        pathUri = 'https://media.tenor.com/Fmh1xemYphAAAAAd/dumbbellrussiantwists.gif'; break;
  case "DumbbellPlankRows":       
        videoUri = require(DumbbellPlankRows); 
        pathUri = 'https://www.inspireusafoundation.org/wp-content/uploads/2022/08/renegade-row.gif'; break;
  
  // Intermediate dumbbell
  case "DumbbellFrontSquats":   
        videoUri = require(DumbbellFrontSquats); 
        pathUri = 'https://media.tenor.com/7rVN5X68EMQAAAAC/dumbbellfrontsquats.gif'; break;
  case "DumbbellRenegadeRows":  
        videoUri = require(DumbbellRenegadeRows); 
        pathUri = 'https://media.tenor.com/eSPsUGjc-h0AAAAd/dumbbellrenegaderows.gif'; break;
  case "DumbbellPushPress":       
        videoUri = require(DumbbellPushPress); 
        pathUri = 'https://media.tenor.com/LXB21EhZuZkAAAAC/dumbbellpushpress.gif'; break;
  case "DumbbellBulgarianSplitSquats": 
        videoUri = require(DumbbellBulgarianSplitSquats); 
        pathUri = 'https://media.tenor.com/nBAROZqmTYMAAAAC/dumbbellbulgariansplitsquats.gif'; break;
  case "DumbbellHammerCurls":   
        videoUri = require(DumbbellHammerCurls); 
        pathUri = 'https://media.tenor.com/QsbI3bt31_4AAAAC/dumbbellhammercurls.gif'; break;
  case "DumbbellSkullCrushers": 
        videoUri = require(DumbbellSkullCrushers); 
        pathUri = 'https://media.tenor.com/4hBiIf3Lr9wAAAAC/dumbbellskullcrushers.gif'; break;
  case "DumbbellFarmersWalk":   
        videoUri = require(DumbbellFarmersWalk); 
        pathUri = 'https://media.tenor.com/OC3OCZAAZL4AAAAC/dumbbellfarmerswalk.gif'; break;
    
  // Advanced dumbbell
  case "DumbbellThrusters":     
        videoUri = require(DumbbellThrusters); 
        pathUri = 'https://media.tenor.com/i3i6sFchZ2AAAAAC/dumbbellthrusters.gif'; break;
  case "DumbbellCleanandPress": 
        videoUri = require(DumbbellCleanandPress); 
        pathUri = 'https://media.tenor.com/R7yoN5qL3QQAAAAC/dumbbellcleanandpress.gif'; break;
  case "DumbbellRomanianDeadliftswithSingleLegBalance": 
        videoUri = require(DumbbellRomanianDeadliftswithSingleLegBalance); 
        pathUri = 'https://media.tenor.com/bTgzUy4xXDQAAAAC/dumbbellromaniandeadliftswithsinglelegbalance.gif'; break;
  
  // Beginner gym
  case "BarbellSquats":     
        videoUri = require(BarbellSquats);
        pathUri = 'https://media.tenor.com/Re3T3B66V9UAAAAd/barbellsquats-gymexercisesmen.gif'; break;
  case "LatPulldowns":      
        videoUri = require(LatPulldowns);
        pathUri = 'https://fitnessvolt.com/wp-content/uploads/2023/09/wide-grip-lat-pulldown.gif'; break;
  case "SeatedLegPress":    
        videoUri = require(SeatedLegPress);
        pathUri = 'https://www.inspireusafoundation.org/wp-content/uploads/2022/10/leg-press.gif'; break;
  case "DumbbellRows":      
        videoUri = require(DumbbellRows);
        pathUri = 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Upright-Row.gif'; break;
  case "MachineChestFlyes": 
        videoUri = require(MachineChestFlyes);
        pathUri = 'https://newlife.com.cy/wp-content/uploads/2019/11/22551301-Lever-Seated-Fly-female_Chest_360.gif'; break;
  case "CableFacePulls":    
        videoUri = require(CableFacePulls);
        pathUri = 'https://i.pinimg.com/originals/bb/ad/ae/bbadae1b92108a8024ab8a709e711e14.gif'; break;
  case "LegExtensions":     
        videoUri = require(LegExtensions);
        pathUri = 'https://fitnessprogramer.com/wp-content/uploads/2021/02/LEG-EXTENSION.gif'; break;
  case "Plank":             
        videoUri = require(Plank);
        pathUri = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a8048480486129.5ce2e67ba3247.gif'; break;
  
  // Intermediate gym
  case "BarbellBackSquats":   
        videoUri = require(BarbellBackSquats);
        pathUri = 'https://media.tenor.com/3TLVyHMQKVoAAAAC/barbellbacksquats-gymexercisesmen.gif'; break;
  case "AssistedPullUps":     
        videoUri = require(AssistedPullUps);
        pathUri = 'https://media.tenor.com/P4VvJvjWYPMAAAAC/assistedpullups-gymexercisesmen.gif'; break;
  case "BarbellBenchPress":   
        videoUri = require(BarbellBenchPress);
        pathUri = 'https://media.tenor.com/oaRRq3lgB-wAAAAd/barbellbenchpress-gymexercisesmen.gif'; break;
  case "Deadlifts":           
        videoUri = require(Deadlifts);
        pathUri = 'https://media.tenor.com/V3n5nfP10_QAAAAd/deadlifts-gymexercisesmen.gif'; break;
  case "InclineDumbbellPress":
        videoUri = require(InclineDumbbellPress);
        pathUri = 'https://media.tenor.com/aZA3ic0doecAAAAC/gymexercisesmen-inclinedumbbellpress.gif'; break;
  case "BarbellBentOverRows": 
        videoUri = require(BarbellBentOverRows);
        pathUri = 'https://media.tenor.com/xD4Lm41haCEAAAAC/barbellbentoverrows-gymexercisesmen.gif'; break;
  case "LegPress":            
        videoUri = require(LegPress);
        pathUri = 'https://media.tenor.com/wU4Q0HEV8YIAAAAd/gymexercisesmen-legpress.gif'; break;
  case "HangingLegRaises":    
        videoUri = require(HangingLegRaises);
        pathUri = 'https://media.tenor.com/kLC3ct0whf8AAAAC/gymexercisesmen-hanginglegraises.gif'; break;
  
  // Advanced gym
  case "WeightedPullUps":     
        videoUri = require(WeightedPullUps);
        pathUri = 'https://media.tenor.com/nEjPwsjdEMwAAAAd/archerpullups-gymexercisesmen.gif'; break;
  case "BarbellRows":         
        videoUri = require(BarbellRows);
        pathUri = 'https://media.tenor.com/z2db2cIRxXgAAAAC/barbellrows-gymexercisesmen.gif'; break;
  case "BarbellLunges":       
        videoUri = require(BarbellLunges);
        pathUri = 'https://media.tenor.com/9ZSZ5WCZ-uQAAAAd/barbelllunges-gymexercisesmen.gif'; break;
  case "WeightedHangingLegRaises": 
        videoUri = require(WeightedHangingLegRaises);
        pathUri = 'https://media.tenor.com/YSCameXoya0AAAAC/weightedhanginglegraises-gymexercisesmen.gif'; break;
  
  // Beginner noEquipments
  case "PushUps":           
        videoUri = require(PushUps);
        pathUri = 'https://media.tenor.com/0xCguCJWdYMAAAAd/noequipmentexercisesmen-pushups.gif'; break;
  case "BodyweightSquats":  
        videoUri = require(BodyweightSquats);
        pathUri = 'https://media.tenor.com/5VAiLZhxaHYAAAAC/bodyweightsquats-noequipmentexercisesmen.gif'; break;
  case "Lunges":            
        videoUri = require(Lunges);
        pathUri = 'https://media.tenor.com/HATy7iboOZ4AAAAC/lunges-noequipmentexercisesmen.gif'; break;
  case "MountainClimbers":  
        videoUri = require(MountainClimbers);
        pathUri = 'https://media.tenor.com/En3iqGhFVrUAAAAC/mountainclimbers-noequipmentexercisesmen.gif'; break;
  case "GluteBridges":      
        videoUri = require(GluteBridges);
        pathUri = 'https://media.tenor.com/jLvLvHZyIuwAAAAd/glutebridges-noequipmentexercisesmen.gif'; break;
  case "TricepDips":        
        videoUri = require(TricepDips);
        pathUri = 'https://media.tenor.com/B1KE8Bne6f4AAAAC/noequipmentexercisesmen-tricepdips.gif'; break;
  case "Supermans":         
        videoUri = require(Supermans);
        pathUri = 'https://media.tenor.com/mju5ewyZa0UAAAAd/noequipmentexercisesmen-supermans.gif'; break;
  case "HighKnees":         
        videoUri = require(HighKnees);
        pathUri = 'https://media.tenor.com/Tild4YQUweAAAAAC/highknees-noequipmentexercisesmen.gif'; break;
  case "SidePlanks":        
        videoUri = require(SidePlanks);
        pathUri = 'https://media.tenor.com/r9cqd_wnQmMAAAAC/noequipmentexercisesmen-sideplanks.gif'; break;

  // Intermediate noEquipments
  case "WidePushUps":           
        videoUri = require(WidePushUps);
        pathUri = 'https://media.tenor.com/BBfXKyT6XFwAAAAC/noequipmentexercisesmen-widepushups.gif'; break;
  case "PistolSquats":          
        videoUri = require(PistolSquats);
        pathUri = 'https://media.tenor.com/ENMApuzr7lEAAAAC/pistolsquats-noequipmentexercisesmen.gif'; break;
  case "PlankWithShoulderTaps": 
        videoUri = require(PlankWithShoulderTaps);
        pathUri = 'https://media.tenor.com/Fsu8BIKJWQQAAAAC/plankwithshouldertaps-noequipmentexercisesmen.gif'; break;
  case "JumpingLunges":         
        videoUri = require(JumpingLunges);
        pathUri = 'https://media.tenor.com/3QhRBuBZhowAAAAC/jumpinglunges-noequipmentexercisesmen.gif'; break;
  case "DiamondPushUps":        
        videoUri = require(DiamondPushUps);
        pathUri = 'https://media.tenor.com/7JnImp72Jw0AAAAC/diamondpushups-noequipmentexercisesmen.gif'; break;
  case "HinduPushUps":          
        videoUri = require(HinduPushUps);
        pathUri = 'https://media.tenor.com/0Qra-jBOI80AAAAC/hindupushups-noequipmentexercisesmen.gif'; break;
  case "BodyweightRows":        
        videoUri = require(BodyweightRows);
        pathUri = 'https://media.tenor.com/EdRFzxcgAJAAAAAC/bodyweightrows-noequipmentexercisesmen.gif'; break;
  case "BicycleCrunches":       
        videoUri = require(BicycleCrunches);
        pathUri = 'https://media.tenor.com/Pvk6sdP9Q7gAAAAC/bicyclecrunches-noequipmentexercisesmen.gif'; break;
  case "Burpees":                
        videoUri = require(Burpees);
        pathUri = 'https://media.tenor.com/bx0KQ_SUtWMAAAAC/burpees-noequipmentexercisesmen.gif'; break;
  case "SidePlankWithLegLift":  
        videoUri = require(SidePlankWithLegLift);
        pathUri = 'https://media.tenor.com/MnlsRsMm5OgAAAAC/noequipmentexercisesmen-sideplankwithleglift.gif'; break;
  
  // Advanced noEquipments
  case "OneArmPushUps":       
        videoUri = require(OneArmPushUps);
        pathUri = 'https://media.tenor.com/RPlAGEwiEAcAAAAd/onearmpushups-noequipmentexercisesmen.gif'; break;
  case "PlyometricSquats":    
        videoUri = require(PlyometricSquats);
        pathUri = 'https://media.tenor.com/ClEeYj2r8qkAAAAd/noequipmentexercisesmen-plyometricsquats.gif'; break;
  case "HandstandPikePushUps":
        videoUri = require(HandstandPikePushUps);
        pathUri = 'https://media.tenor.com/-n8ulyKB77MAAAAd/handstandpikepushups-noequipmentexercisesmen.gif'; break;
  case "PlyometricLunges":    
        videoUri = require(PlyometricLunges);
        pathUri = 'https://media.tenor.com/wLhkRvCnj38AAAAd/plyometriclunges-noequipmentexercisesmen.gif'; break;
  case "ClappingPushUps":     
        videoUri = require(ClappingPushUps);
        pathUri = 'https://media.tenor.com/55pfbJMCkKAAAAAC/clappingpushups-noequipmentexercisesmen.gif'; break;
  case "MuscleUpsPullUps":    
        videoUri = require(MuscleUpsPullUps);
        pathUri = 'https://media.tenor.com/nEjPwsjdEMwAAAAd/archerpullups-gymexercisesmen.gif'; break;
  case "DragonFlags":         
        videoUri = require(DragonFlags);
        pathUri = 'https://www.oldschoollabs.com/wp-content/uploads/2021/02/40581301-Leg-Raise-Dragon-Flag_Waist_720.gif'; break;
  case "LSitHangingLegRaises":
        videoUri = require(LSitHangingLegRaises);
        pathUri = 'https://media.tenor.com/E2m2qFASwisAAAAC/lsithanginglegraises-noequipmentexercisesmen.gif'; break;
  case "ExplosiveBurpees":    
        videoUri = require(ExplosiveBurpees);
        pathUri = 'https://media.tenor.com/bx0KQ_SUtWMAAAAC/burpees-noequipmentexercisesmen.gif'; break;
  case "PlankArmLegLift":     
        videoUri = require(PlankArmLegLift);
        pathUri = 'https://media.tenor.com/tznEgror2VkAAAAC/plankarmleglift-noequipmentexercisesmen.gif'; break;
  
  default: videoUri = require("../Videos/BenchPress.mp4");
           pathUri = 'https://media.tenor.com/K37Z3kLOHlwAAAAC/benchpress-animated.gif'; break;
}

/////////////////////////////////////////////////////

    useEffect(() => {
      setPathUrl(exercise.path);
      
    }, [exercise.path]);

  return (
    <Background>
      <View style={style.screenStyle2}>
        <TouchableOpacity style={style.menuButton} onPress={toggleMenu}>
          <Text style={style.menuButtonText}>III</Text>
        </TouchableOpacity>
        {/* <ScrollView style={{ height: Dimensions.get('window').height * 0.85, 
                    marginBottom: 10, }}
                    showsVerticalScrollIndicator={false} > */}
          <ScrollView style={style.scrollStyle}
                    showsVerticalScrollIndicator={false} >
          <Text style={style.subTitle}>
              {exercise.name}
          </Text>
          <View style={style.videoContainer}>
            {/* <Video
                source={videoUri}
                paused={false} // make it start
                repeat={true} // make it a loop
                style={style.video}
                resizeMode= "contain"
            /> */}
            <FastImage
                source={{
                  uri: pathUri,
                  priority: FastImage.priority.normal,
                }}
                style={style.video}
                resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <Text style={style.infoModalTitle}>
              Instruction : {exercise.reps}
          </Text>
          <TouchableOpacity
            style={style.customButton}
            onPress={toggleInfoModal}
          >
            <Text style={style.customButtonText}>View Steps</Text>
          </TouchableOpacity>
          <View style={{ marginBottom: 60 }}></View>
        </ScrollView>


      </View>

        {/* Info Modal */}
        <InfoModal isVisible={infoModalVisible}
          toggleInfoModal={toggleInfoModal}
          exercise={exercise}
        />

      <MenuModal isVisible={menuVisible} toggleMenu={toggleMenu} navigation={props.navigation} />
    </Background>
  )
}

const styles = StyleSheet.create({
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
