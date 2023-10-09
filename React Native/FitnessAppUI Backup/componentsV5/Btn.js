import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Btn({ bgColor, btnLabel, textColor, Press }) {
  return (
    <TouchableOpacity
        onPress={Press}
        style={{
            backgroundColor: bgColor,
            borderColor: 'black',
            borderWidth: 0.1,
            borderRadius: 100,
            alignItems: 'center',
            width: '75%',
            paddingVertical: 5,
            marginBottom: 13,
        }}>

        <Text style={{ color: textColor, 
              fontSize: 28, 
              fontWeight: 'bold' }}>
          {btnLabel}
        </Text>

    </TouchableOpacity>
  )
}