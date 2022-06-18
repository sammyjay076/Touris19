import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, Alert,Linking } from 'react-native'
import COLORS from '../../../consts/colors';

export default function RestaurantScreen() {

    const url1 = "https://www.opentable.com/"


    const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url);
        } else {
            Alert.alert("Don't kow how to open this url: ${url}");
        }
    }


    return (
        <View   style = {{height: 200, width:'100%', backgroundColor:'pink'}}>
            <ImageBackground
                    source = {require("../../../assets/Restaurant.jpg")}
                    style = {styles.images}
                    >
                         <Text
                         style = {styles.Text}
                         > Find A Table</Text>
                    </ImageBackground>

                    <Text style = {{fontSize:20, marginTop: 30}}>
                      The open Table booking platform offers a way to book a Table
                      online at one of more than 6,000 Restaurants. When using the button, you will be redirected to a
                      Restaurant Website
                    </Text>
                    
                    <View 
                    style = {{backgroundColor: COLORS.orange,
                    alignContent: "center",
                    justifyContent:"center",
                    borderRadius:40,
                    borderWidth:1,
                    borderColor: "#ff8c52",
                    height:50,
                    paddingHorizontal:20,
                    width:'80%', 
                    alignItems:'center',
                    marginTop: 30,
                    marginLeft: 30

                }}
                    >
                    <TouchableOpacity 
                    onPress =  {() => {openUrl (url1)}}
                    >
                        <Text>Reserve A Table Now</Text>
                    </TouchableOpacity>
                    </View>
                   
        </View>
    )
}


const styles = StyleSheet.create({
    // Image:{
    //     {height:'100%',
    //      width:'100%'
    // },
    
    images : {
        height : '100%',
    },
    
    Text: {
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute', // child
        bottom: 0, // position where you want
        left: 0,
        fontSize: 40
    },

})