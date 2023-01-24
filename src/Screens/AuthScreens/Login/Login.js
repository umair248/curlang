//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import ButtonComp from '../../../Components/ButtonComp';
import WrapperContainer from '../../../Components/WrapperContainer';
import navigationStrings from '../../../constants/navigationStrings';
import Assets from '../../../constants/imagePath'
import commonStyles from '../../../styles/commonStyles';
import TextInput from '../../../Components/TextInputs';
import AppDefaultGrdiantContainer from '../../../Components/GrdiantView';
import { moderateScale } from '../../../styles/responsiveSize';
import { login } from '../../../store/Action/AuthFunctions';
import { AccessKey } from '../../../config/urls';
import Loader from '../../../Components/Loader';


const Login = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [username, setusername] = useState();
    const [pass, setpass] = useState();
    const [isLoading, SetisLoading] = useState(false)


    const Login = () => {
        SetisLoading(true)
        if (username?.length != undefined && pass?.length != undefined) {
            const data = `login?AccessKey=${AccessKey}&Email=${username}&Password=${pass}`
            login(data, SetisLoading, dispatch)
        }
        else {
            Alert.alert('Please fill all required field');
            SetisLoading(false);
        }
    }


    const Signup = () => {
        navigation.navigate(navigationStrings.SIGNUP)
    }

    return (
        <WrapperContainer>

            <View style={styles.container}>

                <ImageBackground source={Assets.AuthBg} style={[commonStyles.backgroundImage, { justifyContent: "center", }]}>

                    <Image source={Assets.AppIcons2} style={commonStyles.AppIcons2} resizeMethod={'resize'} resizeMode={'contain'} />

                    <TextInput
                        value={username}
                        onChangeText={(e) => setusername(e)}
                        placeholder={'Email'} />

                    <TextInput
                        value={pass}
                        secureTextEntry={true}
                        onChangeText={(e) => setpass(e)}
                        placeholder={'Password'} />

                    <ButtonComp
                        btnText='Forgot Password'
                        onPress={() => { }}
                        type={'0'}
                    />

                    <AppDefaultGrdiantContainer style={styles.gradinatButton}>
                        <ButtonComp
                            btnText='Login'
                            onPress={Login}
                            type={'1'} />
                    </AppDefaultGrdiantContainer>

                    <ButtonComp
                        btnText='Create Account'
                        onPress={Signup}
                        type={'2'}
                    />

                </ImageBackground>
            </View>
            <Loader isLoading={isLoading} />
        </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradinatButton: {
        width: "80%",
        alignSelf: "center",
        height: moderateScale(48),
        marginBottom: moderateScale(20),
        borderRadius: moderateScale(30),
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: moderateScale(8),
    },
});

//make this component available to the app
export default Login;
