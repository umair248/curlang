import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../styles/colors';

const AppDefaultGrdiantContainer = ({ children, style, header2 }) => {
  return (
    <LinearGradient
      colors={header2 ? ['#F2F3F4', '#F2F3F4', '#E5E7E9'] : ['#027b76', '#027b76', '#0E6251']}
      style={style ? style : styleS.container}>
      {children}
    </LinearGradient>
  );
};

export default AppDefaultGrdiantContainer;

const styleS = StyleSheet.create({
  container: {
    width: '80%',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom: 20,
    borderRadius: 20,
    alignSelf: 'center',
  },
});