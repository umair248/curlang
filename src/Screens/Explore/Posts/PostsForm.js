import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import WrapperContainer from '../../../Components/WrapperContainer';
import Assests from '../../../constants/imagePath';
import commonStyles from '../../../styles/commonStyles';
import {useNavigation} from '@react-navigation/native';
import styles from '../../CreateProfile/styles.js';
import ButtonComp from '../../../Components/ButtonComp';
import TextInputWithLabel from '../../../Components/TextInputWithLabel';
import navigationStrings from '../../../constants/navigationStrings';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {moderateScale, verticalScale} from '../../../styles/commonStyles';
import Loader from '../../../Components/Loader';
const PostsForm = () => {
  const [profile, setprofile] = useState(null);
  const [title, settitle] = useState(null);
  const [result, setresult] = useState(null);
  const [loading, setloading] = useState(false);
  const navigation = useNavigation();
  const counter = useSelector(state => state.AuthReducer.UserDetail.ProfileID);
  const data = useSelector(state => state.AuthReducer.UserDetail.Username);

  const uploadphoto = async () => {
    const options = {
      width: 300,
      height: 400,
      includeBase64: false,
      selectionLimit: 1,
      mediaType: 'photo',
    };

    const result = await launchImageLibrary(options);

    console.log('UPLOAD IMAGES===>', result.assets[0].uri);
    setprofile(result);
  };

  const UploadPost = () => {
    var formdata = new FormData();
    setloading(true);
    formdata.append(
      'accessKey',
      '31u289371892e89qwed93748912u7e89duqw9uq9w3ye89qwdy9q',
    );
    formdata.append('UserID', counter);
    formdata.append('Username',data);
    formdata.append('Title', title);
    formdata.append('PostPic', {
      uri: profile?.assets[0]?.uri,
      type: profile?.assets[0]?.type,
      name: profile?.assets[0]?.fileName,
    });
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'multipart/form-data');
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };
    fetch(
      `http://107.180.1.24/plesk-site-preview/curlingapp.scitforte.net/add-post?AccessKey=`,
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {setresult(result);setloading(false);navigation.navigate(navigationStrings.HOME);})
      .catch(error => {setloading(false)});
    if (profile == null || title == null) {
      setloading(false)
      alert('Please fill all fields');
    }
    if (result) {
      
      alert('Your post has successfully created');
      
    }
    
    var requestOption = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`http://107.180.1.24/plesk-site-preview/curlingapp.scitforte.net/get-all-posts?AccessKey=31u289371892e89qwed93748912u7e89duqw9uq9w3ye89qwdy9q&userID=20`, requestOption)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };
  return (
    
    <WrapperContainer>
      <ImageBackground
        source={Assests.greenbackground}
        style={[commonStyles.backgroundImage]}>
          <Loader isLoading={loading}/>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
          }}>
          {/* <KeyboardAwareScrollView> */}
          <Pressable
            style={styles.thumbnailcontainer}
            onPress={() => uploadphoto()}>
            {profile != null &&
            profile?.assets != undefined &&
            profile?.assets[0]?.uri != undefined ? (
              <Image
                source={{uri: profile?.assets[0]?.uri}}
                style={styles.profile}
                resizeMode={'cover'}
              />
            ) : (
              <>
              <View style={{zIndex:1000,alignItems:'center'}}>
                <Text style={{color:'white',fontSize:7}}>Upload Image </Text>
              <Image
                source={Assests.UploadThumbnail}
                style={styles.thumbnail}
                resizeMode={'contain'}
              />
              </View>
            </>
            )}
          </Pressable>
          <View style={{marginTop: 10, width: '100%'}}>
            <TextInput
              style={styles.textarea}
              value={title}
              type={'white'}
              onChangeText={e => settitle(e)}
              placeholder={'Create Post Here'}
            />
          </View>
          {/* </KeyboardAwareScrollView> */}
          <ButtonComp
            btnText="Upload Post"
            onPress={UploadPost}
            type={'3'}
            width={'30%'}
          />
        </View>
      </ImageBackground>
    </WrapperContainer>
  );
};

export default PostsForm;
