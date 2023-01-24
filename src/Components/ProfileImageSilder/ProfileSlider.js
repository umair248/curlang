import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';

import DotIndicator from './DotIndictior';
import Assets from '../../constants/imagePath'
// import { Verify } from '../../constants/Images';
import { height, moderateScale, verticalScale, width } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import TextLabel from '../Label';

export default function Index({image}) {
  

  const Markers = [
    {
      id: 0,
      image: require('../../assets/images/avatar.png'),
    },
    {
      id: 1,
      image: require('../../assets/images/avatar.png'),
    },
    {
      id: 2,
      image: require('../../assets/images/avatar.png'),
    },
    {
      id: 3,
      image: require('../../assets/images/avatar.png'),
    },
  ];

  const _renderItem = ({ item, index }) => {
    console.log("abc here")
    
    return (
      <>
        <ImageBackground
          resizeMode='stretch'
          source={{uri:`http://107.180.1.24/plesk-site-preview/curlingapp.scitforte.net${image}`}}
          style={styles.img}>
          {/* <View style={styles.topfixed}>
            <TextLabel label={`${index + 1} / ${Markers?.length}`} color={'#fff'} fontSize={12} />
          </View> */}

          <View style={styles.bottomfixed}>
            <View style={styles.row}>

              {/* <View style={styles.row2}>

                <View style={styles.cover}>
                  <Image
                    source={Assets.LikeHear}
                    style={styles.LikeHear}
                    resizeMode={'contain'}
                  />
                </View>

                <View style={styles.likeView}>
                  <TextLabel label={'4,558'} color={colors.black} />
                </View>

              </View> */}

              {/* <View style={[styles.cover, { backgroundColor: '#fff' }]}>
                <Image
                  source={Assets.HeaderChat}
                  style={[styles.LikeHear, { tintColor: colors.green }]}
                  resizeMode={'contain'}
                />
              </View> */}

            </View>

{/* 
            <DotIndicator
              currentIndex={index}
              list={Markers}
              highlightedDotColor="#fff"
              unhighlightedDotColor="#BDC3C7"
              highlightedDotHeight={5}
              highlightedDotWidth={5}
              unhighlightedDotWidth={5}
              unhighlightedDotHeight={5}
            /> */}

          </View>
        </ImageBackground>
      </>
    );
  };

  return (
    <FlatList
      horizontal
      pagingEnabled
      scrollEnabled
      snapToAlignment='center'
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      decelerationRate={'fast'}
      data={Markers}
      renderItem={_renderItem}
    />
  );
}

const styles = StyleSheet.create({
  img: {
    width: width / 1.2,
    margin: 15,
    alignSelf: 'center',
    height: verticalScale(200),
    borderRadius: moderateScale(20),
    overflow: 'hidden',
  },
  bottomfixed: {
    position: 'absolute',
    bottom: moderateScale(10),
    width: '100%',
    // marginLeft: 20,
  },
  row: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  LikeHear: {
    height: verticalScale(15),
    width: moderateScale(15),
    // marginLeft: 10,
    tintColor: '#fff'
  },
  cover: {
    backgroundColor: 'red',
    height: verticalScale(30),
    width: moderateScale(30),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(20)
  },
  row2: {
    flexDirection: 'row',
    alignItems: "center"
  },
  likeView: {
    backgroundColor: '#A6ACAF',
    marginLeft: moderateScale(10),
    borderRadius: moderateScale(20)
  },
  topfixed:{
    alignSelf:"flex-end",
    marginRight: moderateScale(10),
    marginTop:moderateScale(10)
  }
});
