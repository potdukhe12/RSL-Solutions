import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Background from '../Background2';
import { purple } from '../Constants';
import BtnMenu from '../BtnMenu2';
import MenuModal from './MenuModal'; // Import the MenuModal component

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
      <View style={{ marginHorizontal: 60, marginVertical: 25 }}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Text style={styles.menuButtonText}>III</Text>
        </TouchableOpacity>
        <Text style={{ color: purple, fontSize: 50, marginBottom: 10 }}>
          Select your Gender
        </Text>

        {genderOptions.map((option) => (
          <View key={option} style={{ alignItems: 'center', marginBottom: 20 }}>
            <Image
              style={{
                width: 150,
                height: 230,
                marginBottom: 5,
              }}
              source={
                option === 'Male'
                  ? require('../images/male_character.png')
                  : require('../images/female_character.png')
              }
            />
            <BtnMenu
              bgColor={option === gender ? 'green' : purple}
              textColor="white"
              btnLabel={option}
              Press={() => {
                handleGenderSelection(option);
              }}
            />
          </View>
        ))}
      </View>

      {/* Use the MenuModal component here */}
      <MenuModal isVisible={menuVisible} toggleMenu={toggleMenu} navigation={props.navigation} />
    </Background>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    top: -10,
    right: -55,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  menuButtonText: {
    color: purple,
    fontSize: 22,
    transform: [{ rotate: '90deg' }],
  },
});
