import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
  useNavigation
} from 'react-native';
import RoundImage from '../../Components/RoundImage';
import SearchBar from '../../Components/SearchBar';
import WrapperContainer from '../../Components/WrapperContainer';
import data from '../../constants/data';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../../styles/responsiveSize';

const Home = ({navigation}) => {
  
  const renderItem = ({item, index}) => {
    return (
      <View>
        <View style={styles.roundImageView}>
          <RoundImage image={item.img} size={60} />
        </View>
        <Text style={{alignSelf: 'center'}}>{item.title}</Text>
      </View>
    );
  };
  const movetoScreen=(item)=>{
    
       navigation.navigate(navigationStrings.DETAIL_PAGE,item={item})
  }
  const populerFood = ({item, index}) => {
    return (
     <TouchableOpacity 
        onPress={()=>movetoScreen(item)}
     >
        <View
        style={{
          backgroundColor: colors.lightGreyBg,
          marginHorizontal: moderateScale(8),
          borderRadius: moderateScale(10),
        }}>
        <View
          style={{
            alignSelf: 'center',
            marginHorizontal: moderateScale(32),
            marginVertical: moderateScaleVertical(12),
          }}>
          <RoundImage image={item.img} size={100} />
        </View>
        <Text style={styles.foodText}>{item.title}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: moderateScale(8),
            marginVertical: moderateScaleVertical(6),
          }}>
          <Text>star</Text>
          <Text style={{fontFamily: fontFamily.bold}}>Rs.{item.price}</Text>
        </View>
        <Image source={imagePath.heart} style={styles.heartImgStyle} />
      </View>
     </TouchableOpacity>
    );
  };
  const bestFood = ({item, index}) => {
    return (
      <ImageBackground
        source={{uri: item.img}}
        style={{
          height: moderateScaleVertical(200),
          width: width / 1.3,
          flex: 1,
        }}>
        <View
          style={{
            justifyContent: 'flex-end',
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
          }}>
          <Text style={styles.foodText}>{item.title}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: moderateScale(8),
              marginVertical: moderateScaleVertical(6),
            }}>
            <Text>star</Text>
            <Text style={{fontFamily: fontFamily.bold}}>Rs.{item.price}</Text>
          </View>
        </View>
        <Image source={imagePath.heart} style={styles.heartImgStyle} />
      </ImageBackground>
    );
  };
  return (
    <WrapperContainer style={{flex:1}}>
      <View >
        <Text style={styles.headerText}>What would you like to eat ?</Text>
        <SearchBar
          placeholder={'Search'}
          containerStyle={styles.containerStyle}
        />
        <View style={{marginVertical: moderateScaleVertical(12)}}>
          <FlatList
            horizontal
            data={data}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text style={styles.headerText}>Popular Food</Text>
        <View style={{marginStart: moderateScale(10)}}>
          <FlatList
            horizontal
            data={data}
            renderItem={populerFood}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{marginStart: moderateScale(16)}}>
          <Text style={styles.headerText}>Best Food</Text>
          <FlatList
            horizontal
            data={data}
            renderItem={bestFood}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => {
              return <View style={{width: 6}} />;
            }}
          />
        </View>
        
      </View>
    </WrapperContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerText: {
    fontSize: moderateScale(18),
    fontFamily: fontFamily.bold,
    marginStart: moderateScale(16),
    marginVertical: moderateScaleVertical(14),
  },
  containerStyle: {
    elevation: moderateScale(4),
    marginHorizontal: moderateScale(16),
    borderRadius: moderateScale(10),
    marginVertical: moderateScaleVertical(16),
  },
  roundImageView: {
    marginHorizontal: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(34),
  },
  foodText: {
    fontFamily: fontFamily.bold,
    marginStart: moderateScale(8),
    fontSize: textScale(14),
  },
  heartImgStyle: {
    position: 'absolute',
    top: 6,
    right: 6,
    height: 25,
    width: 25,
    tintColor: colors.themeColor,
  },
});
