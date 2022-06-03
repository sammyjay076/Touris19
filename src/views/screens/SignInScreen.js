import React, {useState, useRef} from "react";
import COLORS, { colours, paramerters, title } from '../../consts/colors';
import {View, Alert, Linking, StyleSheet, Text, Dimensions, TextInput, TouchableOpacity} from "react-native"
// import {Icon, SocialIcon, Button} from "react-native-elements"
import Header from "../../components/Header";
import * as Animatable from "react-native-animatable";



export function SignInScreen ({navigation}) {

    const url1 = "https://www.tourist-mobile.com/#/home"

    

    const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url);
        } else {
            Alert.alert("Don't kow how to open this url: ${url}");
        }
    }


    const [textInput2Focussed, setTextInput2Focussed] = useState(false)

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    return (
        <View style= {styles.container}>
                 
        

     <View>

         <Text style = {title}>
             Sign-In
         </Text>

     </View>

     <View style = {{alignItems: 'center', marginTop: 10}}>
         <Text style = {styles.text1}>
             Please enter the email and password
         </Text>
         <Text style = {styles.text1}>
             Register with your account
         </Text>
     </View>

        <View>
            <View style = {{marginTop:20}}>
                <TextInput style = {styles.TextInput1} 
                placeholder = "Email"
                ref = {textInput1}
                >
                
                </TextInput>
            </View>

            <View style = {styles.TextInput2}>
            <Animatable.View animation = {textInput2Focussed?"":"fadeInLeft"} duration={400}>
                {/* <Icon
                name = 'lock'
                iconStyle = {{color:colours.grey3}}
                type = 'material'
                /> */}
               
            </Animatable.View>

                 <TextInput style={{width:'80%'}} 
                 placeholder = "Password"
                 ref = {textInput2}
                onFocus = {() => {
                    setTextInput2Focussed(false)
                }}

                onBlur = {() => {
                    setTextInput2Focussed(true)
                }}
                 >
                </TextInput>
            
            <Animatable.View animation = {textInput2Focussed?"":"fadeInLeft"} duration={400}>
            {/* <Icon
                name = 'visibility-off'
                iconStyle = {{color:colours.grey3}}
                type = 'material'
                style = {{marginRight:10 }}
                /> */}
            </Animatable.View>
            </View>

        </View>

                    <View style= {{marginHorizontal:20, marginTop:20}}>
                        <TouchableOpacity 
                        // title = "SIGN IN"
                        style = {paramerters.styledButton}
                        // Style = {paramerters.buttonTitle}
                        onPress = {() =>{navigation.navigate('HomeScreen')}}
                        >
                                <Text style={paramerters.buttonTitle}>SIGN IN</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{alignItems:'center', marginTop:25}}>
                        <Text style={{...styles.text1, textDecorationLine:"underline"}}>Forgot Password ?</Text>
                    </View>
                <View style={{alignItems:'center', marginTop:25, marginBottom:20}}>
                    <Text style={{fontSize:20, fontWeight:'bold',  }}>OR</Text>
                </View>

                   
                <View style={{marginTop:20, marginLeft:10}}>
                        <Text style={{...styles.text2, textDecorationLine:"underline"}}>New on Tourist 19 ?</Text>
                    </View>

                    {/* last button on the screen */}


                    <View style= {{marginHorizontal:20, marginTop:20}}>
                    <TouchableOpacity 
                    // title = "SIGN IN"
                    style = {paramerters.styledButton}
                    // Style = {paramerters.buttonTitle}
                    onPress = {() =>{navigation.navigate('')}}
                    >
                            <Text style={paramerters.buttonTitle}>create an account</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginTop:40,
        backgroundColor: COLORS.primary
    },

    text1: {
        color: colours.grey4,
        fontSize: 16,
    },

    text2: {
        color: colours.grey4,
        fontSize: 16,
        justifyContent:'flex-start'
    },
    
    TextInput1: {
        borderWidth:1,
        borderColor: "#86939e",
        marginHorizontal:20,
        borderRadius:12, 
        marginBottom:20,
        height: 45,
        paddingLeft:15,
    },

    TextInput2: {
        borderWidth:1, 
        borderRadius:12, 
        marginHorizontal:20,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        height: 45,
        paddingLeft: 15,
    },

    social: {
        borderRadius:12,
        height:50
    }, 

    createButton:{
        backgroundColor: 'white',
        alignContent:'center',
        justifyContent:'center',
        borderRadius: 12,
        borderWidth:1,
        borderColor:'#ff8c52',
        height:40,
        paddingHorizontal: 20,
    },

    createButtonTitle:{
        color:'#ff8c52',
        fontSize:16,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
        justifyContent:'center',
        marginTop:-3
    }
})