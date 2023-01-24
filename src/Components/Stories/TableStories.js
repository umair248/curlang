import React from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import colors from '../../styles/colors';
import { moderateScale, verticalScale } from '../../styles/responsiveSize';
import Assets from '../../constants/imagePath'

export default function Stories() {
  const StoriesData = [
    { icon: require('../../assets/images/avatar.png'), Id: 6 },
    { icon: require('../../assets/images/user.png'), Id: 0 },
    { icon: require('../../assets/images/user2.png'), Id: 1 },
    { icon: require('../../assets/images/LikeUser.png'), Id: 2 },
    { icon: require('../../assets/images/user.png'), Id: 3 },
    { icon: require('../../assets/images/LikeUser.png'), Id: 4 },
    { icon: require('../../assets/images/user.png'), Id: 5 },
  ];
  const renderItem = val => {
    return (
      <TouchableOpacity style={[styles.imgcontainer, val.Id == 6 ? { borderColor: '#fff' } : {}]}>
        <Image source={val.icon} style={styles.image} />
        {val?.Id == 6 ?
          <View style={styles.pluscontainer}><Image source={Assets.Plus} style={styles.plus} resizeMode={'contain'} /></View>
          : null
        }
      </TouchableOpacity >
    );
  };

  return (
    <View style={{ height: verticalScale(120) }}>
      <ScrollView horizontal={true} style={{ marginTop: 10, marginBottom: 10 }} showsHorizontalScrollIndicator={false}>
        {StoriesData.map((val, ind) => {
          return <View key={ind}>{renderItem(val)}</View>;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imgcontainer: {
    marginLeft: 7,
    marginRight: 7,
    borderWidth: 2,
    borderRadius: moderateScale(81),
    height: verticalScale(81),
    width: moderateScale(81),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.orange1,
    overflow: "visible"
  },
  image: {
    height: verticalScale(75),
    width: moderateScale(75),
    borderRadius: moderateScale(75),
  },
  plus: {
    height: verticalScale(12),
    width: moderateScale(12),
    tintColor: colors.white
  },
  pluscontainer: {
    backgroundColor: colors.darkgreen,
    height: verticalScale(20),
    width: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 2,
    position: "absolute",
    bottom: -10,
    borderWidth: 1,
    borderColor: '#fff'
  }
});
