import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import Background from '../Background2';
import { purple } from '../Constants';
import BtnMenu from '../BtnMenu2';
import MenuModal from './MenuModal';
import style from '../style';

export default function GenderScreen(props) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [gender, setGender] = useState('');

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleGenderSelection = (selectedGender) => {
    setGender(selectedGender);
    props.navigation.navigate("HomeScreen", { selectedGender: selectedGender });
  };

  const genderOptions = ['Male', 'Female'];

  return (
    <Background>
      <View style={style.screenStyle}>
        <TouchableOpacity style={style.menuButton} onPress={toggleMenu}>
          <Text style={style.menuButtonText}>III</Text>
        </TouchableOpacity>
        
        <Text style={style.title}>
          Select Gender : 
        </Text>
        <ScrollView style={style.scrollStyle}
                    showsVerticalScrollIndicator={false} >
        { genderOptions.map((option) => (
          <View key={option} style={{ alignItems: 'center', marginBottom: 20 }}>
            <Image
              style={{ width: 150, height: 210, }}
              source={ option === 'Male'
                          ? require('../images/male_character.png')
                          : require('../images/female_character.png')
                     }
            />
            <BtnMenu
              bgColor={option === gender ? 'green' : purple}
              textColor="white"
              btnLabel={option}
              Press={() => {handleGenderSelection(option);}}
            />
          </View>
        ))}
        <View style={{ marginBottom: 60 }}></View>
       </ScrollView>
      </View>

      {/* Use the MenuModal component here */}
      <MenuModal isVisible={menuVisible} toggleMenu={toggleMenu} navigation={props.navigation} />
    </Background>
  );
}
