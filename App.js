/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import HomeScreen from './src/views/screens/HomeScreen';
import DetailsScreen from './src/views/screens/DetailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons'
import AccountsScreen from './src/views/screens/AccountScreen';
import ServicesScreen from './src/views/screens/ServicesScreen';
import SettingsScreen from './src/views/screens/SettingsScreen';
import BookingsScreen from './src/views/screens/BookingsScreen';
import COLORS from './src/consts/colors';
import { SignInScreen } from './src/views/screens/SignInScreen';
import DrawerNavigator from './src/navigation/DrawerNavigation';
import Hotelscreen from './src/views/screens/authScreens/HotelScreen';
import TaxiScreen from './src/views/screens/authScreens/TaxiScreen';
import RestaurantScreen from './src/views/screens/authScreens/RestaurantScreen';
import FlightScreen from './src/views/screens/authScreens/FlightScreen';

const Stack = createStackNavigator();

// const App = () => {
//   const Tab = createBottomTabNavigator();
//   return (
//     <NavigationContainer>
      
//       <Tab.Navigator 

//       screenOptions= {({route}) => ({
//         tabBarIcon : ({focused, size, colour}) => {
//           let iconName; 
//           if (route.name == 'Home') {
//             iconName = focused ? 'ios-home' : 'ios-home-outline';
//           } else if (route.name == 'OnBoard') {
//             iconName = focused ? 'search-sharp' : 'search-outline';
//           } else if (route.name == 'Details') {
//             iconName = focused ? 'ios-home' : 'ios-home-outline';
//           }else if (route.name == 'Service') {
//             iconName = focused ? 'ios-home' : 'ios-home-outline';
//           }
//           return <Ionic name= {iconName} size = {size} color = {colour} />
//         }
//       })}

    
      

//       tabBarOptions = {{
//         activeTintColor: COLORS.dark,
//         inactiveTintColor : COLORS.red,
//         showLabel : false, 
//         style: {
//           backgroundColor: 'yellow',
//           height: 60,
//         }
//       }}


//       >


//         <Tab.Screen name="OnBoard" component={OnBoardScreen} />
//         <Tab.Screen name="Home" component={HomeScreen} />
//         {/* <Tab.Screen name="Details" component={DetailsScreen} /> */}
//         <Tab.Screen name="Account" component={AccountsScreen} />
//         <Tab.Screen name="Service" component={ServicesScreen} />
//         <Tab.Screen name="Setting" component={SettingsScreen} />
//         <Tab.Screen name="Bookings" component={BookingsScreen} />
//         <Tab.Screen name="SignIn" component={SignInScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="BookingsScreen" component={BookingsScreen} />
        <Stack.Screen name="HotelScreen" component={Hotelscreen} />
        <Stack.Screen name="TaxiScreen" component={TaxiScreen} />
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
        <Stack.Screen name="FlightScreen" component={FlightScreen} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
