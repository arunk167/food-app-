import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import SliderComponent from '../../Components/SliderComponent';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import {height, moderateScale, width} from '../../styles/responsiveSize';
import Modal from 'react-native-modal'
import PhoneNumberInput from '../../Components/PhoneNumberInput';
import fontFamily from '../../styles/fontFamily';
import navigationStrings from '../../constants/navigationStrings';

export default class OuterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      isModalVisible:false,
      isFill:true
    };
  }
  _openModal=()=>{
    this.setState({
      isModalVisible:true
    })
  }
  _closeModal=()=>{
    this.setState({
      isModalVisible:false
    })
  }
  _onPress=()=>{
    const {navigation}=this.props
    navigation.navigate(navigationStrings.SIGN_UP)
  }
 

  render() {
    const {active,isModalVisible,isFill} = this.state;
    return (
      <View style={styles.container}>
        <View>
          <SliderComponent
            viewStyle={styles.viewStyle}
            imgHight={height / 1.7}
          />
        </View>

        <View style={{marginVertical: moderateScale(26)}}>
          <Text style={styles.textStyle}>{strings.READY_TO_ORDER}</Text>
          <ButtonWithLoader
            btnText={strings.SET_DELIVERY_LOCATION}
            btnStyle={styles.btnStyle}
          />
          
          <TouchableOpacity onPress={this._openModal}>
              <View style={styles.accountViewStyle}>
            <Text style={{color: colors.textGreyB}}>
              {strings.HAVE_AN_ACCOUNT}
            </Text>
           
              <Text style={{color: colors.themeColor}}>{strings.LOGIN}</Text>
               </View>
            </TouchableOpacity>
        
        </View>
        <Modal 
          
          isVisible={isModalVisible}
          onBackdropPress={this._closeModal}
          onRequestClose={this._closeModal}
          style={{margin:0,justifyContent:'flex-end'}}
          animationIn={'fadeInUp'}
          onSwipeComplete={this._closeModal}
          swipeDirection="up"

         >
         <View style={{backgroundColor:'white'}}>
          <View style={{margin:moderateScale(12)}}>
          <Text style={styles.logintext}>{strings.LOGIN}</Text>
          <Text style={styles.enterText}>{strings.ENTER_YOUR_NUMBER}</Text>
          <PhoneNumberInput 
            cca2={'IN'}
            
          />
          <ButtonWithLoader
             btnStyle={{
               marginBottom:moderateScale(16),
               backgroundColor:isFill?colors.themeColor:colors.textGreyB,
               
               
            }}
             btnText={strings.ENTER_PHONE_NUMBER}
             onPress={this._onPress}    
          />
          </View>

           
         </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },

  textStyle: {
    alignSelf: 'center',
    color: colors.textGreyB,
  },
  btnStyle: {
    marginHorizontal: moderateScale(58),
    height: moderateScale(48),
  },
  accountViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(16),
  },
  logintext:{
    fontSize:moderateScale(20),
    fontFamily:fontFamily.bold
  },
  viewStyle: {},
  enterText:{
    marginBottom:moderateScale(12),
    marginTop:moderateScale(4),
    color:colors.textGreyB
  }
});
