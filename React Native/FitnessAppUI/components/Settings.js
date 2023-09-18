import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { purple } from './Constants';

const Settings = (props) => {
  const [pushNotificationEnabled, setPushNotificationEnabled] = useState(true);

  const togglePushNotification = () => {
    setPushNotificationEnabled(!pushNotificationEnabled);
  };

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Text style={styles.menuButtonText}>III</Text>
        </TouchableOpacity>
        <Text style={{ color: purple, fontSize: 50, marginBottom: 25, marginTop: 55 }}>Settings</Text>
        
      <TouchableOpacity style={styles.item} 
            onPress={() => {/* Navigate to Update Profile screen */
                             alert("Update Profile") }} >
        <Text>Update Profile</Text>
      </TouchableOpacity>
      
      <View style={styles.item}>
        <Text>Push Notifications</Text>
        <Switch
          value={pushNotificationEnabled}
          onValueChange={togglePushNotification}
        />
      </View>

      <TouchableOpacity style={styles.item} 
                            onPress={() => {/* Navigate to Feedback screen */
                            alert("Feedback page") }} >
        <Text>Give Feedback</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} 
                            onPress={() => {/* Navigate to Help & Support screen */
                            alert("Help & Support") }} >
        <Text>Help & Support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} 
                            onPress={() => {/* Navigate to About screen */
                            alert("About Page") }} >
        <Text>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} 
                            onPress={() => {props.navigation.navigate("Home")
                            alert("You have logged out") }} >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="slide"
        visible={menuVisible}
        onRequestClose={toggleMenu}
      >
        <View style={styles.menuContainer} >
          <Text style={styles.menuItem} onPress={() => props.navigation.navigate("HomeScreen")}>Home</Text>
          <Text style={styles.menuItem} onPress={() => props.navigation.navigate("ModeScreen")}>Exercise with equipment</Text>
          <Text style={styles.menuItem} onPress={() => props.navigation.navigate("ModeScreen")}>Exercise without equipment</Text>
          <Text style={styles.menuItem} onPress={() => alert("Reset password")}>Reset password</Text>
          <Text style={styles.menuItem} onPress={() => alert("Settings")}>Settings</Text>
          <Text style={styles.menuItem} onPress={() => {alert("You are logged out!");props.navigation.navigate("Home") }}>Logout</Text>
          <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: purple,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 17,
    zIndex: 1,
    backgroundColor: purple,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  menuButtonText: {
    color: 'white',
    fontSize: 22,
    transform: [{ rotate: '90deg' }],
  },
  menuContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
    fontWeight: 'bold',
    top: 22,
    left: 25,
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
});

export default Settings;
