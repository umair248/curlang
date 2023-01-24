import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import colors from '../styles/colors';
import StatusBarHeight, { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';
import Loader from './Loader';

const WrapperContainer = ({ headerStyle, children, isLoading, backgroundColor }) => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor ? backgroundColor : colors.white }}>
      {/* <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} /> */}
      <SafeAreaView style={styles.container}>
        {children}
      </SafeAreaView>
      <Loader isLoading={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: moderateScale(16)
  },
  headerStyle: {
    alignItems: 'center',
    paddingHorizontal: 0,
    marginBottom: moderateScaleVertical(24)
  }
});


export default WrapperContainer;
