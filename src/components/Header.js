import React from "react";
import { colours, paramerters } from '../consts/colors';
import {View, StyleSheet, Text, Dimensions, TouchableWithoutFeedback} from "react-native"
// import {Icon} from "react-native-elements"
// import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors'
export default function Header({title, type,navigation}) {
    return (
        <View style = {styles.header}>
            {/* <View style= {{marginLeft:17}}>
                <Icon
                type = "material-community"
                name = {type}
                color = {colours.headerText}
                size = {28}
                onPress = {() => {navigation.goBack()} }
                />
            
              
            </View> */}
            {/* <View style= {{marginLeft:17}}>
                        <TouchableWithoutFeedback 
                        // title = "SIGN IN"
                        style = {{size:28}}
                        // Style = {paramerters.buttonTitle}
                        onPress = {() =>{}}
                        >
                                <Text style={paramerters.buttonTitle}>SIGN IN</Text>
                        </TouchableWithoutFeedback>
                    </View> */}

                    <View>
                    {/* <Ionicons name="arrow-back-circle" size={24} color="black" /> */}
                    </View>
            <View>
                    <Text style={styles.headerText}>
                        {title}
                    </Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    header : {
        flexDirection: "row",
        backgroundColor: COLORS.primary,
        height: paramerters.headerHeight,
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 23,
    },

    // headerTitle: {
    //     color: COLORS.white,
    //     fontWeight: 'bold',
    //     fontSize: 23,
    //   },

    headerText: {
        color: colours.headerText,
        fontSize: 22, 
        fontWeight:"bold",
        marginLeft: 30
    }
})