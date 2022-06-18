import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function CreateAccountScreen() {
    return(
        <View style={{flex:1,}}>
          
           <View>

            <Text style={{fontSize:40, marginTop:10, color:'black', marginLeft:25, marginBottom:10}}>
                Register
            </Text>

           </View>

           <View style = {{justifyContent:'center', alignContent:'center', marginLeft:40}}>
            <Text>Email</Text>
            </View>
                <View>
                <TextInput
                style = {{
                    borderWidth:1,
                    borderColor:'#0d0c0c',
                    marginHorizontal:20,
                    borderRadius:12, 
                    marginBottom:20,
                    height: 45,
                    paddingLeft:15,
                    marginBottom:15
                }}
                placeholder = "Type in Email"
                keyboardType='email-address'
                />
                </View>

           <View style = {{justifyContent:'center', alignContent:'center', marginLeft:40}}>
            <Text>Password</Text>
            </View>
                <View>
                <TextInput
                style = {{
                    borderWidth:1,
                    borderColor:'#0d0c0c',
                    marginHorizontal:20,
                    borderRadius:12, 
                    marginBottom:20,
                    height: 45,
                    paddingLeft:15,
                    marginBottom:15
                }}
                placeholder = "Input Password"
                secureTextEntry = {true}
               />
                
                </View>
               

           <View style = {{justifyContent:'center', alignContent:'center', marginLeft:40}}>
            <Text>Phone Number</Text>
            </View>
                <View>
                <TextInput
                style = {{
                    borderWidth:1,
                    borderColor:'#0d0c0c',
                    marginHorizontal:20,
                    borderRadius:12, 
                    marginBottom:20,
                    height: 45,
                    paddingLeft:15,
                    marginBottom:15
                }}
                placeholder = "Input Password"
               keyboardType='numeric'
                />
                </View>
               
           

        </View>
    )
}