import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient'; // Import the LinearGradient component
import { purple } from './Constants';

// purple = '#953553'

export default function Btn({ bgColor1, bgColor2, bgColor3 , btnLabel, textColor, Press }) {
  return (
    <TouchableOpacity onPress={Press}>
      {/* Wrap the TouchableOpacity in a View */}
      <LinearGradient
        colors={[bgColor1, '#953553', '#EF96B2']} // Define your gradient colors
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          borderRadius: 100,
          overflow: 'hidden', // Hide the gradient overflow
          elevation: 3, // Add shadow
          marginBottom: 13,
          width: Dimensions.get('window').width * 0.5,
          paddingVertical: 5,
          alignItems: 'center',
        }}
      >
        <View
          style={{
            // backgroundColor: bgColor,
            // borderRadius: 100,
            // width: Dimensions.get('window').width * 0.5,
            // paddingVertical: 5,
            // alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: textColor,
              fontSize: 28,
              fontWeight: 'bold',
            }}
          >
            {btnLabel}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
