import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function BtnMenu({ bgColor, btnLabel, textColor, Press }) {
  return (
    <TouchableOpacity
        onPress={Press}
        style={{
            backgroundColor: bgColor,
            borderWidth: 0.1,
            borderRadius: 50,
            // alignItems: 'flex-start',
            alignItems: 'center',
            justifyContent: 'center',
            width: '105%',
            paddingVertical: 7,
            paddingHorizontal: 25,
            marginBottom: 13,
        }}>

        <Text style={{ color: textColor, 
              fontSize: 24, 
              fontWeight: 'bold' }}>
          {btnLabel}
        </Text>

    </TouchableOpacity>
  )
}