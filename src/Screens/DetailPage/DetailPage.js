import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, ActionSheetIOS} from 'react-native';

import ButtonWithLoader from '../../Components/ButtonWithLoader';
import Header from '../../Components/Header';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../../styles/responsiveSize';





const DetailPage = props => {
  const {item} = props.route.params;
  

  const addToCart=(item)=>{
       console.log("detail page",item)
       actions.addToCart(item);
  }
  return (
    <View style={{backgroundColor:colors.white,flex:1}}>
        <Header  centerTitle={"Detail Page"}/>
     <View>
     <Image source={{uri: item.img}} style={styles.imgStyle} />
     <Image source={imagePath.heart} style={styles.heartImgStyle} />
     </View>
      <View style={styles.viewStyle}>
        <View style={styles.priceView}>
          <Text style={styles.textStyle}>{item.title}</Text>
          <Text style={styles.textStyle}>$ {item.price}</Text>
        </View>
        <Text style={{fontSize: textScale(12), color: colors.textGreyLight}}>
          By Pizza hut
        </Text>
      </View>
      <ButtonWithLoader 
         btnText={ strings.ADD_TO_CART}
         btnStyle={styles.btnStyle}
         onPress={()=>addToCart(item)}
      />
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  imgStyle: {
    height:moderateScaleVertical(240),
    width: width-moderateScale(12),
    borderRadius: moderateScaleVertical(24),
    marginStart:moderateScale(6)
    
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(16),
  },
  viewStyle: {
    marginHorizontal: moderateScale(20),
    marginVertical: moderateScaleVertical(16),
  },
  btnStyle:{
    marginHorizontal: moderateScale(18),
    marginVertical: moderateScaleVertical(16),
    borderRadius:moderateScale(20) 
  },
  heartImgStyle: {
    position: 'absolute',
    top: 16,
    right: 16,
    height: 25,
    width: 25,
    tintColor: colors.themeColor,
  },
});
