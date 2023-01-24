import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
  TextInput,
  Alert,
  FlatList,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import {useSelector} from 'react-redux';
import styles from './styles';
import CustomHeader from '../../Components/CustomHeader';
import colors from '../../styles/colors';
import TextLabel from '../../Components/Label';
import Assets from '../../constants/imagePath';
import AppDefaultGrdiantContainer from '../../Components/GrdiantView';
import navigationStrings from '../../constants/navigationStrings';

const data = [
  {label: 'Englisg', value: 'en'},
  {label: 'Urdu', value: 'ur'},
  {label: 'Hindi', value: 'hi'},
  {label: 'Arabic', value: 'ar'},

];
const Item = ({title, id}) => (
  <View style={id == 20 ? styles.mymsg : styles.othermsg}>
    <TextLabel label={title} color={id == 20 ? '#000' : '#fff'} />
  </View>
);
export default function UserList(props) {
  const navigation = useNavigation();
  const [Message, setMessage] = useState('');
  const [recievingmsg, setrecievingmsg] = useState({output: []});
  const counter = useSelector(state => state.AuthReducer.UserDetail.ProfileID);
  
  const [value, setValue] = useState(null);
  const renderItem = ({item}) => (
    <Item title={item.MessageText} id={item.SenderID} />
  );

  const getRequest = () => {
  
    fetch(
      `http://107.180.1.24/plesk-site-preview/curlingapp.scitforte.net/get-messages-by-userid?AccessKey=31u289371892e89qwed93748912u7e89duqw9uq9w3ye89qwdy9q&userID=${counter}&otherUserID=3`,
    )
      .then(response => response.json())
      .then(recievingmsg => setrecievingmsg(recievingmsg))
      .catch(error => console.log('error', error));
  };
  useEffect(() => {
    getRequest();
  }, []);

  const sendMessage = () => {
    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
    };
    var requestOption = {
      method: 'GET',
      redirect: 'follow',
    };
  
    fetch(
      `http://107.180.1.24/plesk-site-preview/curlingapp.scitforte.net/send-message?AccessKey=31u289371892e89qwed93748912u7e89duqw9uq9w3ye89qwdy9q&MessageType=Text&UserID=${counter}&sendToUserID=3&message=${Message}`,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      fetch(
        `http://107.180.1.24/plesk-site-preview/curlingapp.scitforte.net/get-messages-by-userid?AccessKey=31u289371892e89qwed93748912u7e89duqw9uq9w3ye89qwdy9q&userID=${counter}&otherUserID=3`,
        requestOption,
      )
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        alert("Your message has sent");
  };

  const setChange = (item) => {
    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
    };
    var requestOption = {
      method: 'GET',
      redirect: 'follow',
    };
    setValue(item.value);
    console.log("Value is"+value)
    fetch(
      `http://107.180.1.24/plesk-site-preview/curlingapp.scitforte.net/set-chat-languages?AccessKey=31u289371892e89qwed93748912u7e89duqw9uq9w3ye89qwdy9q&UserID=${counter}&sendMessageIn=${item.value}&receiveMessageIn=${item.value}`,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    fetch(
      `http://107.180.1.24/plesk-site-preview/curlingapp.scitforte.net/get-chat-languages?AccessKey=31u289371892e89qwed93748912u7e89duqw9uq9w3ye89qwdy9q&UserID=${counter}`,
      requestOption,
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    fetch(
      `http://107.180.1.24/plesk-site-preview/curlingapp.scitforte.net/get-messages-by-userid?AccessKey=31u289371892e89qwed93748912u7e89duqw9uq9w3ye89qwdy9q&userID=${counter}&otherUserID=3`,
      requestOption,
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };
  return (
    <View style={styles.container}>
      <CustomHeader label={'Jhon Mick'} header2={true} type={'chat'} />
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={(item)=>setChange(item)}
      />
      <AppDefaultGrdiantContainer style={styles.callcontainer}>
     

        <Pressable
          onPress={() => navigation.navigate(navigationStrings.AudioCall)}>
          <Image
            source={Assets.Call}
            style={[styles.icons, {marginLeft: 10}]}
            resizeMode={'contain'}
          />
        </Pressable>
        <View style={styles.whitelines} />
        <Pressable
          onPress={() => navigation.navigate(navigationStrings.VideoCall)}>
          <Image
            source={Assets.Vcall}
            style={[styles.icons, {marginLeft: 10}]}
            resizeMode={'contain'}
          />
        </Pressable>
      </AppDefaultGrdiantContainer>

      <ScrollView
        style={styles.ScrollView}
        contentContainerStyle={{marginTop: 20}}>
        <FlatList
          data={recievingmsg.Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

        {/* {chats.map((value, index) => {
          return (
            <>
              {value.id == 1 ? (
                <View
                  key={index}
                  style={[
                    styles.msgcontainer,
                    {alignItems: 'flex-start', flexDirection: 'row'},
                  ]}>
                  <Image
                    source={Assets.User}
                    style={styles.userimage}
                    resizeMode={'contain'}
                  />

                  {value?.type != 'media' ? (
                    <View
                      style={value.id == 1 ? styles.mymsg : styles.othermsg}>
                      <TextLabel
                        label={value.msg}
                        color={value.id == 1 ? '#000' : '#fff'}
                      />
                    </View>
                  ) : (
                    <>
                      {value?.image != undefined ? (
                        <Image source={value.image} style={styles.imgechat} />
                      ) : null}
                    </>
                  )}
                </View>
              ) : (
                <View
                  key={index}
                  style={[styles.msgcontainer, {alignItems: 'flex-end'}]}>
                  {value?.type != 'media' ? (
                    <View
                      style={value.id == 1 ? styles.mymsg : styles.othermsg}>
                      <TextLabel
                        label={value.msg}
                        color={value.id == 1 ? '#000' : '#fff'}
                      />
                    </View>
                  ) : (
                    <>
                      {value?.image != undefined ? (
                        <Image source={value.image} style={styles.imgechat} />
                      ) : null}
                    </>
                  )}
                </View>
              )}
            </>
          );
        })} */}
      </ScrollView>

      {/* <AppDefaultGrdiantContainer style={styles.lines2}/> */}

      <AppDefaultGrdiantContainer style={styles.SendMsgContainer}>
        <View style={styles.chatcontainer}>
          <Image
            source={Assets.Attachments}
            style={[styles.icons, {marginRight: 10}]}
            resizeMode={'contain'}
          />
          <View style={styles.chatmessage}>
            <TextInput
              numberOfLines={2}
              placeholder="Write a message"
              placeholderTextColor={colors.white}
              style={styles.TextInput}
              value={Message}
              onChangeText={e => {
                setMessage(e);
              }}
            />
            <TouchableOpacity onPress={sendMessage}>
              <Image
                source={Assets.Sendmsg}
                style={styles.SendMessage}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>

          <Image
            source={Assets.Emojie}
            style={[styles.icons, {marginLeft: 10}]}
            resizeMode={'contain'}
          />
        </View>
      </AppDefaultGrdiantContainer>
    </View>
  );
}
