import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Animated,
} from 'react-native';

import { height } from '../../../styles/responsiveSize';
import CustomHeader from '../../../Components/CustomHeader';
import ProfileHeader from './ProfileHeader';
import PostPage from '../Tabs/Post'


export default ({ navigation }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const bannerAnimation = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [-200, 0],
          outputRange: [2, 1],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const searchInputContainerAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 40],
      outputRange: [0, 1],
    }),
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1, 40],
          outputRange: [0, 1, 1],
          extrapolate: 'clamp',
        }),
      },
    ],
  };


  return (
    <View style={styles.container}>

      <Animated.View
        style={[styles.searchInputContainer, searchInputContainerAnimation]}>
        <CustomHeader />
      </Animated.View>


      <Animated.View style={[styles.bannerContainer, bannerAnimation]}>
        <ProfileHeader />
      </Animated.View>

      <ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: animatedValue },
              },
            },
          ],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}>
        <PostPage />
      </ScrollView>
    </View>
  );
};

const BANNER_HEIGHT = 224;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchButton: {
    position: 'absolute',
    right: 0,
    top: 48,
    width: 48,
    height: 48,
    zIndex: 100,
  },
  searchIcon: {
    width: 32,
    height: 32,
    zIndex: 50,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 48,
    width: 48,
    height: 48,
    zIndex: 100,
  },
  backIcon: {
    width: 16,
    height: 16,
    // tintColor: 'white',
    zIndex: 50,
  },
  searchInputContainer: {
    position: 'absolute',
    zIndex: 100,
    width: '100%',
  },
  bannerContainer: {
    // position: 'absolute',
    // height: '100%',
    width: '100%',
    backgroundColor: "pink"
  },
  banner: {
    width: '100%',
    height: '100%',
  },
  paddingForBanner: {
    height: BANNER_HEIGHT,
  },
  scrollViewContent: {
    height: height,
    backgroundColor: 'white',
  },
});