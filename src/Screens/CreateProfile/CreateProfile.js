import React, { useState } from 'react'
import { View, Image, ImageBackground, Text, Pressable } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSelector } from 'react-redux';

import Assets from '../../constants/imagePath';
import commonStyles from '../../styles/commonStyles';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';
import Assests from '../../constants/imagePath'
import ButtonComp from '../../Components/ButtonComp';
import TextLabel from '../../Components/Label';
import UserForm from './Forms/UserForm';
import BusinessForm from './Forms/BusinessForm';

function CreateProfile() {
    const [isEnabled, setIsEnabled] = useState(true);
    const [profile, setprofile] = useState(null)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const UserDetail = useSelector(state => state?.AuthReducer?.UserDetail?.Data);

    const uploadphoto = async () => {

        const options = {
            width: 300,
            height: 400,
            includeBase64: false,
            selectionLimit: 1,
            mediaType: 'photo'
        };

        const result = await launchImageLibrary(options);

        console.log('UPLOAD IMAGES===>', result)
        setprofile(result)
    }

    return (
        <WrapperContainer>

            <ImageBackground source={Assets.greenbackground} style={[commonStyles.backgroundImage]}>
                <KeyboardAwareScrollView>
                    <View style={styles.container}>
                        <View style={styles.switchcontainer}>
                            <ToggleSwitch
                                isOn={isEnabled}
                                onColor="#fff"
                                offColor="#fff"
                                size="large"
                                icon={<View style={styles.switch} />}
                                onToggle={isOn => toggleSwitch()}
                            />
                            <Text style={[commonStyles.fontSizewhite13]}>{!isEnabled ? 'Business Form' : 'User Form'}</Text>
                        </View>

                        <Pressable style={styles.thumbnailcontainer} onPress={() => uploadphoto()}>
                            {profile != null && profile?.assets != undefined && profile?.assets[0]?.uri != undefined ?
                                <Image source={{ uri: profile?.assets[0]?.uri }} style={styles.profile} resizeMode={'cover'} />
                                :
                                <Image source={Assests.UploadThumbnail} style={styles.thumbnail} resizeMode={'contain'} />
                            }
                        </Pressable>

                        <ButtonComp
                            btnText='Upload Photo'
                            onPress={uploadphoto}
                            type={'3'}
                            width={'30%'}
                        />

                        <TextLabel label={UserDetail?.Username} textAlign={'center'} marginTop={10} fontSize={22} />

                        {!isEnabled ? <BusinessForm profile={profile} /> : <UserForm profile={profile} />}

                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>

        </WrapperContainer>
    )
}

export default CreateProfile