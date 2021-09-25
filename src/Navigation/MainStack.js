import React from 'react';

import navigationStrings from '../constants/navigationStrings';
import { Cart, DetailPage, FBGoogleLogin, Home } from '../Screens';
import TabRoutes from './TabRoutes';


export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.TAB_ROUTES}
        component={TabRoutes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.DETAIL_PAGE}
        component={DetailPage}
        options={{headerShown: false}}
      />
      
     
     

    </>
  );
}
