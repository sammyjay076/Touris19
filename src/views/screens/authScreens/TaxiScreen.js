import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, Alert,Linking } from 'react-native'
import COLORS from '../../../consts/colors';

export default function TaxiScreen() {

    const url1 = "https://bolt.eu/"


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
                    source = {require("../../../assets/Taxi.jpg")}
                    style = {styles.images}
                    >
                         <Text
                         style = {styles.Text}
                         > Order A Taxi</Text>
                    </ImageBackground>

                    <Text style = {{fontSize:20, marginTop: 30, fontStyle:'italic'}}>
                        Bolt for short transfers e.g from the airport to the 
                        business appointment. When you use the button, you will be redirected to the corresponding
                        smartphone app of the provider. If the provider is not available at the destination
                        ,it is possible to use a local taxi service provider
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
                        <Text>Order A Ride Now</Text>
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