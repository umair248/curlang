import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale } from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles, { hitSlopProp } from '../styles/commonStyles';

const ButtonComp = ({
  onPress = () => { },
  btnText,
  type,
  width,
  borderColor,
  backgroundColor,
  height
}) => {
  return (
    <TouchableOpacity
      style={[type == 0 ? styles.btnStyle0 : type == 1 ? styles.btnStyleGradinat : type == 3 ? styles.smallround : styles.btnStyle2,
      width ? { width } : {},
      borderColor ? { borderColor } : {},
      backgroundColor ? { backgroundColor, borderColor: backgroundColor } : {},
      height ? { height } : {}
      ]}
      hitSlop={hitSlopProp}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={
        [styles.btnTextStyle,
        type == 1 ? { color: colors.white } : {},
        type == 3 ? { color: colors.darkgreen, fontSize: 12 } : {},
        type == 4 ? { color: colors.darkgreen } : {},
        borderColor ? { color: borderColor } : {},
       


        ]}>{btnText}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnStyle0: {
    // width: "80%",
    alignSelf: "center",
    // height: moderateScale(48),
    marginBottom: moderateScale(20),
    // borderRadius: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1.5,
    // paddingHorizontal: moderateScale(8),
  },
  btnStyle1: {
    backgroundColor: colors.darkgreen,
    width: "80%",
    alignSelf: "center",
    height: moderateScale(48),
    marginBottom: moderateScale(20),
    borderRadius: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(8),
  },
  btnStyle2: {
    // backgroundColor: colors.theme,
    width: "80%",
    alignSelf: "center",
    height: moderateScale(48),
    marginBottom: moderateScale(20),
    borderRadius: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: colors.green,
    paddingHorizontal: moderateScale(8),
  },
  btnStyleGradinat: {
    // backgroundColor: colors.theme,
    width: "100%",
    alignSelf: "center",
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallround: {
    width: "30%",
    alignSelf: "center",
    height: moderateScale(28),
    marginTop: moderateScale(6),
    borderRadius: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1.5,
    backgroundColor: colors.orange1
    // borderColor: colors.green,
    // paddingHorizontal: moderateScale(8),
  },
  btnTextStyle: {
    ...commonStyles.fontSize16,
    // textTransform: 'uppercase'
  },
  btnTextStyle3: {
    ...commonStyles.fontSize11,
    // textTransform: 'uppercase'
  },
});
export default ButtonComp;
