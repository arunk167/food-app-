import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonWithLoader from '../../Components/ButtonWithLoader';

import HeaderComponent from '../../Components/HeaderComponent';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';

const Signup = () => {
  const [state,setState]=useState({
    phonenumber:'',
    email:'',
    name:'',
    btnText:strings.SIGNUP,

  })
  const {btnText,phonenumber,email,name}=state

  const updateState=data=>setState(state=>({...state,...data}))
  
  useEffect(() => {
        if( email ==''  && name =="" && phonenumber ==""){
             updateState({
               btnText:strings.ENTER_PHONE_NUMBER
             })
        }
        else if( email==''  && name =="" && phonenumber !=""){
          updateState({
            btnText:strings. ENTER_EMAIL_ADDRESS
          })
     }
     else if( email !=''  && name =="" && phonenumber !=""){
      updateState({
        btnText:strings. ENTER_NAME
      })
    }
    else if( email ==''  && name !="" && phonenumber ==""){
      updateState({
        btnText:strings.ENTER_PHONE_NUMBER
      })
    }
    else if( email ==''  && name !="" && phonenumber !=""){
      updateState({
        btnText:strings.ENTER_EMAIL_ADDRESS
      })
    }
    else if( email !=''  && name =="" && phonenumber ==""){
      updateState({
        btnText:strings. ENTER_PHONE_NUMBER
      })
    }
      else {
        updateState({
          btnText:strings.SIGNUP
        })
 }

  }, [email,phonenumber,name]);

  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.white,
      }}>
      <View>
        <HeaderComponent headerText={strings.SIGNUP} />
        <View
          style={{
            marginHorizontal: moderateScale(22),
            marginTop: moderateScaleVertical(42),
          }}>
          <TextInputWithLabel
          value={phonenumber}
            label={strings.TEN_DIGIT_NUMBER}
            onChangeText={phonenumber=>updateState({phonenumber})}
            customTextStyle={{
              borderWidth: 0,
              borderBottomWidth: 1.5,
              borderColor: colors.themeColor,
              height: moderateScaleVertical(24),
              paddingHorizontal: moderateScaleVertical(0),
            }}
          />
          <TextInputWithLabel
            value={email}
            label={strings.EMAIL_ADDRESS}
            onChangeText={email=>updateState({email})}
            customTextStyle={{
              borderWidth: 0,
              borderBottomWidth: 1.5,
              borderColor: colors.themeColor,
              height: moderateScaleVertical(24),
              paddingHorizontal: moderateScaleVertical(4),
            }}
          />
          <TextInputWithLabel
            value={name}
            label={strings.NAME}
            onChangeText={name=>updateState({name})}
            customTextStyle={{
              borderWidth: 0,
              borderBottomWidth: 1.5,
              borderColor: colors.themeColor,
              height: moderateScaleVertical(24),
              paddingHorizontal: moderateScaleVertical(4),
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.textStyle}>{strings.BY_CREATING}</Text>
            <Text style={{...styles.textStyle, color: colors.btnBBlue}}>
              {strings.TERMS_AND_CONDITIONS}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{marginVertical: moderateScale(10), justifyContent: 'flex-end'}}>
        <ButtonWithLoader
          btnText={btnText}
          btnStyle={{marginHorizontal: moderateScale(22)}}
          onPress={() => {
           
            navigation.navigate(navigationStrings.OTP_VERIFY);
          }}
        />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: moderateScale(12),
  },
});
