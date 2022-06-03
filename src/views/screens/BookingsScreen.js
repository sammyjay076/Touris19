import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import COLORS from '../../consts/colors';

export default function BookingsScreen({navigation})  {
    return (
        <View style = {{flex:1, backgroundColor: COLORS.white}}>
            <ScrollView
            
            showsVerticalScrollIndicator={false}
            >

                {/* Creating views for various bookings */}
                    <View 
                    style = {{height:50, width:'100%', backgroundColor: COLORS.primary}}
                    >
                                <Text style = {{fontSize: 30, marginTop: 10}}>
                                    Make Your Bookings
                                </Text>
                    </View>

                    <TouchableOpacity
                    onPress = {() =>{navigation.navigate('HotelScreen')}}
                    >
                    <View
                    style = {{height: 200, marginTop:40, width:'100%', backgroundColor:'pink'}}>
                        <ImageBackground
                    source = {require("../../assets/Hotel.jpg")}
                    style = {styles.images}
                    >
                         <Text
                         style = {styles.Text}
                         > Book A Hotel</Text>
                    </ImageBackground>
               
                    </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                    onPress = {() =>{navigation.navigate('RestaurantScreen')}}
                    >
                                 <View
                    style = {{height: 200, marginTop:40, width:'100%', backgroundColor:'pink'}}>
                        <ImageBackground
                    source = {require("../../assets/Restaurant.jpg")}
                    style = {styles.images}
                    >
                         <Text
                         style = {styles.Text}
                         > Find A Table</Text>
                    </ImageBackground>
               
                    </View>
                    </TouchableOpacity>
                   

                    <TouchableOpacity
                    onPress = {() =>{navigation.navigate('TaxiScreen')}}
                    >
                                 <View
                    style = {{height: 200, marginTop:40, width:'100%', backgroundColor:'pink'}}>
                        <ImageBackground
                    source = {require("../../assets/Taxi.jpg")}
                    style = {styles.images}
                    >
                         <Text
                         style = {styles.Text}
                         > Order Taxi</Text>
                    </ImageBackground>
               
                    </View>
                    </TouchableOpacity>
                   


                    <TouchableOpacity
                    onPress = {() =>{navigation.navigate('FlightScreen')}}
                    >
                          <View
                    style = {{height: 200, marginTop:40, width:'100%', backgroundColor:'pink'}}>
                        <ImageBackground
                    source = {require("../../assets/Flight.jpg")}
                    style = {styles.images}
                    >
                         <Text
                         style = {styles.Text}
                         > Your Travel Agency</Text>
                    </ImageBackground>
               
                    </View>
                    </TouchableOpacity>
                  

                    <View
                    style = {{height: 20, marginTop:20, width:'100%', backgroundColor:'white'}}>
                        {/* <ImageBackground
                    source = {require("../../assets/location4.jpg")}
                    style = {styles.images}
                    >
                         <Text
                         style = {styles.Text}
                         > Book A Hotel</Text>
                    </ImageBackground> */}
               
                    </View>

            </ScrollView>
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