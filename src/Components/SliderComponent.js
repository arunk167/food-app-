import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,

} from 'react-native';
import data from '../constants/data';
import fontFamily from '../styles/fontFamily';

import {height, moderateScale, width} from '../styles/responsiveSize';
import colors from '../styles/colors';



export default class SliderComponent extends Component {
    constructor(props){
        super(props);
        this.state={
          active:0
        }
    }
  _renderItem = ({item, index}) => {
      const {imgHight}=this.props
      const {active}=this.state
    return (
      <View >
        <Image
          source={item.img}
          style={{
            width: width,
            height:imgHight,
           
          }}
        />
       <View style={{marginVertical:moderateScale(12)}}>
       <Text style={styles.textStyle}>{item.caption}</Text>
       <Text style={styles.textStyle}>{item.caption2}</Text>
      
       </View>
       
      </View>
    );
  };
  render() {
    const {active}=this.state
    return (
    <>
        <FlatList
          data={data}
          renderItem={this._renderItem}
          horizontal={true}
          pagingEnabled={true}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item=>item.id.toString()}
          initialScrollIndex={1}
          
        />
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          {
            data.map((item,index)=>{
              return(
                <View  style={{
                  
                  height:10,
                  width:10,
                  borderRadius:5,
                  backgroundColor:index == active?colors.themeColor:colors.textGreyB,
                  marginHorizontal:4
                }}/>
              )
            })
          }
        </View>
        </>
   
    );
  }
}

const styles = StyleSheet.create({

    textStyle:{
        fontSize:moderateScale(24),
     
        alignSelf:'center',
        fontFamily:fontFamily.bold,
       
      
    }
});
