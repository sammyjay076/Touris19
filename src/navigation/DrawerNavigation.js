// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import ServicesScreen from '../views/screens/ServicesScreen';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import COLORS, { colours } from '../consts/colors';
// const Drawer = createDrawerNavigator() 

// export default function DrawerNavigator() {

//     return (
//         <Drawer.Navigator>
//             <Drawer.Screen
//             name = "servicesScreen"
//             component={ServicesScreen}
//             options = {{
//                 title : 'services',
//                 drawerIcon: ({focussed, size}) => (
//                     // <Icon
//                     // name='servicestack'
//                     // color={focussed ? '#7cc' :colours.grey1 }
//                     // size = {size}
//                     // />
//                     <Icon name="room-service" size={size} color={colours.grey2} />
//                 )
//             }}
//             />
//         </Drawer.Navigator>
//     )
// }