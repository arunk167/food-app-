import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, Image} from 'react-native';
import React from 'react';

import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';

import colors from '../styles/colors';

import { Cart, Home } from '../Screens';
import { moderateScale, textScale } from '../styles/responsiveSize';
import {connect} from 'react-redux'


const Tab = createBottomTabNavigator();
function TabRoutes(props) {
  const {cartItems}=props
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOME}
      tabBarOptions={{
        // style: {backgroundColor: colors.themeColor},
        
      
      }}>
      <Tab.Screen
         
        name={navigationStrings.HOME}
        component={Home}
        options={{
          
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={imagePath.home}
              style={{
                width: size,
                height: size,
                tintColor: focused ? colors.themeColor : colors.black,
              }}
            />
          ),
            }}
      />
      <Tab.Screen
        name={navigationStrings.CART}
        component={Cart}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <>
            <Text style={{position:'absolute',top:-5,left:98,right:0,bottom:0,fontSize:textScale(20)}}>
              {cartItems.length}
              </Text>
            <Image
              source={imagePath.cart}
              style={{
                position:'relative',
                width: size,
                height: size,
                tintColor: focused ? colors.themeColor : colors.black,
              }}
            />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const mapStateToProps=(state)=>{
  return {
        cartItems:state.cart.cartItems
  }
}
export default connect(mapStateToProps)(TabRoutes);
