import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import EmptyPage from '../../Components/EmptyPage';
import Header from '../../Components/Header';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import {moderateScale, textScale} from '../../styles/responsiveSize';

const Cart = props => {
  const {cartItems} = props;

  useEffect(() => {});
  const _renderItem = ({item}) => {
    return (
      <View
        style={{
          marginHorizontal: moderateScale(12),
          backgroundColor: colors.white,
          marginBottom: moderateScale(12),
          elevation: moderateScale(2),
          borderRadius: moderateScale(12),
        }}>
        <View style={{flexDirection: 'row', padding: moderateScale(12)}}>
          <Image
            source={{uri: item.img}}
            style={{
              height: moderateScale(100),
              width: moderateScale(100),
              borderRadius: moderateScale(50),
            }}
          />
          <View
            style={{
              marginLeft: moderateScale(16),
            }}>
            <Text style={{fontSize: textScale(16),fontFamily:fontFamily.bold}}>{item.title}</Text>
            <Text>By Pizza Hut</Text>
            <Text style={{marginVertical: moderateScale(8),fontFamily:fontFamily.bold}}>
              $ {item.price}
            </Text>
           
            <View style={{flexDirection:'row'}}>
             <TouchableOpacity
              style={{
                justifyContent:'center',
                alignItems:'center',
                marginRight:moderateScale(4)
              }}
             >
           
             <Image 
                 source={imagePath.minus}
              />
            
             </TouchableOpacity>

              <View style={{
                backgroundColor:colors.textGreyB,
               
                justifyContent:'center',
                alignItems:'center',
                marginHorizontal:moderateScale(12)
              }}>
                <Text style={{marginHorizontal:moderateScale(20),
                  marginVertical:moderateScale(6),
                  color:colors.white
                  }}>0</Text>
              </View>
             <TouchableOpacity
                  style={{
                    justifyContent:'center',
                    alignItems:'center',
                    marginLeft:moderateScale(4)
                  }}
             >
            
             <Image 
                 source={imagePath.plus}
              />
            
             </TouchableOpacity>
            </View>
           
           
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <Header centerTitle={strings.CART} />
     
     <FlatList data={cartItems} renderItem={_renderItem}  ListEmptyComponent={
        ()=>{
          return (
           
              <EmptyPage text={"Empty Cart"} image={imagePath.emptyCart} />
             
          )
        }
      }/>
 
    </View>
  );
};
const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
  };
};
export default connect(mapStateToProps)(Cart);

const styles = StyleSheet.create({});
