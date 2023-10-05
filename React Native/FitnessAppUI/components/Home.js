import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Background from "./others/Background";
import Btn from './others/Btn'
import { purple, white } from './others/Constants'

const Home = (props) => {

    return (
        <Background>
            <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
                <Text style={{ color: purple, fontSize: 60 }}>Let's Get</Text>
                <Text style={{ color: purple, fontSize: 60, marginBottom: 25 }}>Fit Together</Text>
                <Btn textColor={white} 
                    btnLabel='Login'
                    Press={() => props.navigation.navigate("Login")} />
                <Btn textColor={purple}
                    btnLabel='Register'
                    Press={() => props.navigation.navigate("Signup")} />
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({})

export default Home;