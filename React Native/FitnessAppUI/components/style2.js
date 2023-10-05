import { Dimensions, StyleSheet } from "react-native"
import { purple } from "./Constants"

{/* 3. External Styling */}
export default styles=StyleSheet.create({
  screenStyle: {
    // padding: 40,
    paddingVertical: 40,
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  title: {
    color: purple, 
    fontSize: 40, 
    marginBottom: 30,
    paddingHorizontal: 40,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  scrollStyle: {
    height: 580,
    width: Dimensions.get('window').width*1,
    paddingHorizontal: Dimensions.get('window').width*0.1,
    marginBottom: 10,
    alignContent: 'center',
    // alignItems: 'center',
  },
  menuButton: {
    position: 'absolute',
    top: 15,
    right: 15,
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
    fontFamily: 'Cochin',
  },
  })

  