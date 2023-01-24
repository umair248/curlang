import React from 'react';
import {Image, StyleSheet, Pressable, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Assets from '../constants/imagePath';
import AppDefaultGrdiantContainer from './GrdiantView';
import {moderateScale, verticalScale, scale} from '../styles/responsiveSize';
import StatusBarHeight from '../styles/responsiveSize';
import colors from '../styles/colors';
import TextLabel from './Label';
import navigationStrings from '../constants/navigationStrings';

function CustomHeader({label, header2, color, type, call, onPress}) {
  const navigation = useNavigation();
  return (
    <AppDefaultGrdiantContainer style={styles.container} header2={header2}>
      {
        type == 'chat' ? (
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={Assets.Chatback}
              style={[
                styles.icon,
                header2 == true ? {tintColor: colors.darkgreen} : {},
              ]}
              resizeMode={'contain'}
            />
          </Pressable>
        ) : (
          <Pressable></Pressable>
        )
        // <Image source={Assets.HeaderAdd} style={[styles.icon,
        // header2 == true ? { tintColor: colors.darkgreen } : {}
        // ]} resizeMode={'contain'} />
      }
      {label ? (
        <TextLabel
          label={label}
          fontSize={19}
          color={color ? color : colors.black}
          fontWeight={'500'}
        />
      ) : (
        <Image
          source={Assets.AppIcons2}
          style={styles.appicon}
          resizeMode={'contain'}
        />
      )}

      {type == 'chat' && call != true ? (
        <Pressable onPress={() => alert('Search')}>
          <Image
            source={Assets.ChatSearch}
            style={[
              styles.icon,
              header2 == true ? {tintColor: colors.darkgreen} : {},
            ]}
            resizeMode={'contain'}
          />
        </Pressable>
      ) : (
        <>
          {call != true ? (
            <Pressable
              onPress={() => navigation.navigate(navigationStrings.UserList)}>
              <Image
                source={Assets.HeaderChat}
                style={[
                  styles.icon,
                  header2 == true ? {tintColor: colors.darkgreen} : {},
                ]}
                resizeMode={'contain'}
              />
            </Pressable>
          ) : (
            <View />
          )}
        </>
      )}
    </AppDefaultGrdiantContainer>
  );
}

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: verticalScale(100),
    paddingTop: 10 - StatusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20),
  },
  icon: {
    height: verticalScale(25),
    width: moderateScale(25),
  },
  appicon: {
    height: verticalScale(80),
    width: moderateScale(100),
  },
  label: {
    color: colors.white,
    fontSize: scale(20),
  },
});
