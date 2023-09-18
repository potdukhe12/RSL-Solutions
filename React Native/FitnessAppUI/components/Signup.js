import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from './Background'
import { purple } from './Constants'
import Field from './Field'
import Btn from './Btn'

const Signup = (props) => {
    return (
        <Background>
            <View style={{ alignItems: 'center', width: 410 }}>
                <Text style={{ 
                    color: 'white', 
                    fontSize: 60, 
                    fontWeight: 'bold', 
                    marginVertical: 10 }}>
                        Register
                </Text>
                <View style={{
                        backgroundColor: 'white', 
                        height: 700,
                        width: 415,
                        borderTopLeftRadius: 60,
                        borderTopRightRadius: 60,
                        paddingTop: 20,
                        alignItems: 'center' }}>
                    <Text style={{ 
                            color: 'grey',
                            fontSize: 19,
                            fontWeight: 'bold',
                            marginBottom: 10 }}>
                        Create a new account
                    </Text>
                    <Field placeholder="First Name"/>
                    <Field placeholder="Last Name"/>
                    <Field placeholder="Email / Username"
                           keyboardType={'email-address'}/>
                    <Field placeholder="Contact Number"
                           keyboardType={'number'}/>
                    <Field placeholder="Password"
                           secureTextEntry={true}/>
                    <Field placeholder="Confirm Password"
                           secureTextEntry={true} />
                    <Text></Text>
                    {/* <View style={{ alignItems: 'flex-end', 
                                   width: '75%',
                                   paddingRight: 16,
                                   marginBottom: 100 }}>
                        <Text style={{ color: purple,
                                       fontWeight: 'bold',
                                       fontSize: 16 }}>
                            Forgot Password ?
                        </Text>
                    </View> */}
                    <Btn textColor='white' 
                         bgColor={purple}
                         btnLabel='Submit'
                         Press={() => { alert("Accout created")
                                        props.navigation.navigate('Login')} 
                         } />
                    <View style={{ display: 'flex',
                                   flexDirection: 'row',
                                   justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16 }}>Already have an account ? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Login")} >
                            <Text style={{ color: purple, 
                                           fontWeight: 'bold',
                                           marginBottom: 100,
                                           fontSize: 16 }}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    )
}

export default Signup;