import React, { useState, useCallback } from 'react';
import { View, FlatList, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import styles from './styles';
import { USERLIST } from '../../config/FakeData';
import CustomHeader from '../../Components/CustomHeader';
import Stories from '../../Components/Stories/Stories';
import UsersCards from './UsersCards';
import Assests from '../../constants/imagePath';
import commonStyles from '../../styles/commonStyles';
import TextLabel from '../../Components/Label';



export default function SearchResult(props) {
  const navigation = useNavigation()
  const UserDetails = useSelector((state) => state?.AuthReducer?.UserDetail);
  return (

    <ImageBackground source={Assests.greenbackground} style={[commonStyles.backgroundImage]}>
      <CustomHeader label={'Search Filter'} color={'#fff'} />
      <TextLabel label={'Teachers'} marginLeft={20} marginTop={20} />
      <FlatList
        data={USERLIST}
        renderItem={({ item, index }) => <UsersCards item={item} index={index} UserID={UserDetails?.UserID} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ marginTop: 20, paddingBottom: 20 }}
      />
    </ImageBackground>

  );
}
