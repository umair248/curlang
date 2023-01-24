import React, { useState, useCallback,useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import UserChatCards from './UserChatCards';
import { USERLIST } from '../../config/FakeData';
import CustomHeader from '../../Components/CustomHeader';
import Stories from '../../Components/Stories/Stories';
import AppDefaultGrdiantContainer from '../../Components/GrdiantView';


export default function UserList(props) {
  const navigation = useNavigation();
  const [data, setdata] = useState();
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  useEffect(() => {
    fetch("http://107.180.1.24/plesk-site-preview/curlingapp.scitforte.net/get-all-profiles?accesskey=31u289371892e89qwed93748912u7e89duqw9uq9w3ye89qwdy9q&userID=22", requestOptions)
  .then(response => response.text())
  .then(data => setdata(data))
  .catch(error => console.log('error', error));
  }, [])
 
  return (

    <View style={styles.container}>
      <CustomHeader label={'Messages'} header2={true} />
      <Stories/>
      <AppDefaultGrdiantContainer style={styles.lines}/>
      <FlatList
        data={USERLIST}
        renderItem={({item,index})=><UserChatCards item={item} index={index} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ marginTop: 20, paddingBottom: 80 }}
      />
    </View>

  );
}
