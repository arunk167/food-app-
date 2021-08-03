import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Image ,TouchableOpacity} from 'react-native'
import imagePath from '../constants/imagePath'
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize'
import {useNavigation} from '@react-navigation/native';
import {hitSlopProp} from '../styles/commonStyles';
import strings from '../constants/lang';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';

const HeaderComponent = ({
    headerText
}) => {
    const navigation=useNavigation()
    return (
        <ImageBackground
            source={imagePath.back4}
            style={styles.imageStyle}
        >  
        <View style={{marginHorizontal:moderateScale(12),marginVertical:moderateScale(12)}}>
        <TouchableOpacity
          onPress={()=>navigation.goBack()}
        >
         <Image 
             source={imagePath.back}
           />
         </TouchableOpacity>
        </View>
        <Text style={styles.textStyle}>
            {headerText}
        </Text>
        </ImageBackground>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({
    imageStyle:{
        minHeight:moderateScaleVertical(140),
        resizeMode:'contain'
    },
    textStyle:{
        marginHorizontal:moderateScale(12),
        fontFamily:fontFamily.bold,
        fontSize:moderateScale(18),
        textTransform:'uppercase'      
    }
})
