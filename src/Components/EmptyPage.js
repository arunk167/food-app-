import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import imagePath from '../constants/imagePath'
import colors from '../styles/colors'
import {height} from '../styles/responsiveSize'

const EmptyPage = ({
    text='',
    image
}) => {
    return (
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            marginTop:height/4
            
        }}>
           <Image
             source={image}
            style={{
                height:200,
                width:200,
               
            }}
             />
        </View>
    )
}

export default EmptyPage

const styles = StyleSheet.create({})
