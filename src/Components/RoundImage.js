import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import imagePath from '../constants/imagePath'

import { moderateScaleVertical } from '../styles/responsiveSize'

const RoundImage = (
    {
        image,
        size=40,
        color
    }
) => {
    return (
        <Image 
              source={{uri: image}}
               style={{
                
                height:moderateScaleVertical(size),
                width:moderateScaleVertical(size),
                borderRadius:moderateScaleVertical(size/2),
               
        
        }}
        
        />
    )
}

export default RoundImage


