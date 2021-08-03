import React from 'react';
import { OtpVerify, OuterScreen, Signup} from '../Screens';
import navigationStrings from '../constants/navigationStrings';


export default function (Stack) {
  return (
    <>
     <Stack.Screen
        name={navigationStrings.OUTER_SCREEN}
        component={OuterScreen}
        options={{headerShown: false}}
      />
      
    <Stack.Screen
        name={navigationStrings.SIGN_UP}
        component={Signup}
        options={{headerShown: false}}
      />
     
       <Stack.Screen
        name={navigationStrings.OTP_VERIFY}
        component={OtpVerify}
        options={{headerShown: false}}
      />
     

    </>
  );
}
