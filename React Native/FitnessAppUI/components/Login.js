import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from './Background'
import { purple } from './Constants'
import Field from './Field'
import Btn from './Btn'

const Login = (props) => {
    return (
        <Background>
            <View style={{ alignItems: 'center', width: 410 }}>
                <Text style={{ 
                    color: 'white', 
                    fontSize: 60, 
                    fontWeight: 'bold', 
                    marginVertical: 10 }}>
                        Login
                </Text>
                <View style={{
                        backgroundColor: 'white', 
                        height: 700,
                        width: 415,
                        borderTopLeftRadius: 60,
                        borderTopRightRadius: 60,
                        paddingTop: 70,
                        alignItems: 'center' }}>
                    <Text style={{ 
                            fontSize: 40, 
                            color: purple, 
                            fontWeight: 'bold' }}>
                        Welcome Back
                    </Text>
                    <Text style={{ 
                            color: 'grey',
                            fontSize: 19,
                            fontWeight: 'bold',
                            marginBottom: 30 }}>
                        Login to your account
                    </Text>
                    <Field placeholder="Email / Username"
                           keyboardType={'email-address'}/>
                    <Field placeholder="Password"
                           secureTextEntry={true}/>
                    <View style={{ alignItems: 'flex-end', 
                                   width: '75%',
                                   paddingRight: 16,
                                   marginBottom: 120 }}>
                        <Text style={{ color: purple,
                                       fontWeight: 'bold',
                                       fontSize: 16 }}>
                            Forgot Password ?
                        </Text>
                    </View>
                    <Btn textColor='white' 
                         bgColor={purple}
                         btnLabel='Login'
                         Press={() => { alert("Logged In")
                                        props.navigation.navigate("GenderScreen") }
                         } />
                    <View style={{ display: 'flex',
                                   flexDirection: 'row',
                                   justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16 }}>Don't have an account ? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Signup")} >
                            <Text style={{ color: purple, 
                                           fontWeight: 'bold',
                                           marginBottom: 100,
                                           fontSize: 16 }}>
                                Signup
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    )
}

export default Login;