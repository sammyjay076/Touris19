/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import COLORS from '../../consts/colors';
export default function OnBoardScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/onboardImage.jpg')}>
        <View style={style.details}>
          <Text style={{color: COLORS.white, fontSize: 35, fontWeight: 'bold'}}>
            Explore
          </Text>
          <Text style={{color: COLORS.white, fontSize: 35, fontWeight: 'bold'}}>
            Ghana with us
          </Text>
          <Text style={{color: COLORS.white, lineHeight: 25, marginTop: 15}}>
            Ghana, a West African country has a lot to offer you in terms of Tourism. 
            Roam the streets of the Cities in Ghana and find expore the amazing sights in 
            the country
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('SignInScreen')}>
            <View style={style.btn}>
              <Text style={{fontWeight: 'bold'}}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  details: {
    height: '50%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: COLORS.white,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
// export default OnBoardScreen;
