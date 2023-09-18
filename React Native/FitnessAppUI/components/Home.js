import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Background from "./Background";
import Btn from './Btn'
import { purple } from './Constants'

const Home = (props) => {

    return (
        <Background>
            <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
                <Text style={{ color: purple, fontSize: 60 }}>Let's Get</Text>
                <Text style={{ color: purple, fontSize: 60, marginBottom: 25 }}>Fit Together</Text>
                <Btn bgColor={purple} textColor='white' 
                    btnLabel='Login'
                    Press={() => props.navigation.navigate("Login")} />
                <Btn  bgColor='white' textColor={purple}
                    btnLabel='Register'
                    Press={() => props.navigation.navigate("Signup")} />
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({})

export default Home;