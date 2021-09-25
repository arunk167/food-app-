import React,{useState,useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import HeaderComponent from '../../Components/HeaderComponent';
import strings from '../../constants/lang';


import { moderateScale,moderateScaleVertical,textScale } from '../../styles/responsiveSize';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import {otpTimerCounter} from '../../utils/helperFunctions';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import navigationStrings from '../../constants/navigationStrings';
  const CELL_COUNT = 6;

const OtpVerify = (props) => {
  const {navigation}=props;
  const [state, setState] = useState({
    timer: 100,
    otp: '',
    isLoading:false
  });

  const updateState = data => setState(state => ({...state, ...data}));
  //TO SHOW THE TIMER SO THAT USER HAS TO WAIT FOR A WHILE BEFORE REQUSTING A NEW OTP AND HE DON'T KEEP ON REQUESTING OTP AGAIN AND AGAIN
  useEffect(() => {
    let timerId;
    if (timer > 0) {
      timerId = setTimeout(() => {
        updateState({timer: timer - 1});
      }, 1000);
    }

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [state.timer]);

  //RESTING THE TIMER AND REQUEST FOR NEW OTP
  const _onResend = () => {
    updateState({timer: 120});
  };

  const onChangeOtp = otp => {
    updateState({otp});

  };
  //THIS ARE DEFAULT METHOD REQUIRED BY OTP MODULE TO WORK PROPERLY INCASE MOVE FROM ON BOX TO ANOTHER OR INCASE OF BLUR
  const ref = useBlurOnFulfill({otp: state.otp, cellCount: CELL_COUNT});
  const [propsOtp = props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: state.otp,
    setValue: onChangeOtp,
  });

 const onMove=()=>{
      navigation.navigate(navigationStrings.TAB_ROUTES )
 }  
  const {timer} = state;
  return (
    <View style={{backgroundColor:colors.white}}>
          <HeaderComponent headerText={strings.VERIFY_DETAILS} />
           <View style={{marginTop:moderateScaleVertical(18),marginLeft:moderateScale(12)}}>
           <Text style={{color:colors.textGreyB,textTransform:'uppercase'}}> {strings.ENTER_OTP} </Text>
           </View>
           <View style={{height: moderateScaleVertical(50)}} />
        <CodeField
          ref={ref}
          {...propsOtp}
          value={state.otp}
          onChangeText={onChangeOtp}
          cellCount={CELL_COUNT}
          rootStyle={styles.root}
          blurOnSubmit
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          selectionColor={colors.themeColor}
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
       
           <ButtonWithLoader btnText={strings.VERIFY_OTP} 
          
            btnStyle={styles.btnStyle}
            onPress={onMove}
            />
    </View>
  );
};

export default OtpVerify;

const styles = StyleSheet.create({
    btnStyle:{
        marginHorizontal:moderateScale(22)
    },
    root: {
        marginHorizontal: moderateScale(16),
        marginVertical: 30,
        justifyContent: 'space-between',
      },
      cell: {
        width: textScale(40),
        height: textScale(60),
        fontFamily: fontFamily.regular,
        lineHeight: textScale(57),
        fontSize: 24,
        borderBottomWidth:1,
     
        borderColor: colors.black,
        color: colors.black,
        textAlign: 'center',
        marginRight: 10,
      },
      focusCell: {
        borderColor: colors.themeColor,
        borderBottomWidth:2
      },
});
