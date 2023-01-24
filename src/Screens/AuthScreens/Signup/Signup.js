//import liraries
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

import ButtonComp from '../../../Components/ButtonComp';
import WrapperContainer from '../../../Components/WrapperContainer';
import Assets from '../../../constants/imagePath'
import commonStyles from '../../../styles/commonStyles';
import TextInput from '../../../Components/TextInputs';
import TextInputWithLabel from '../../../Components/TextInputWithLabel'
import AppDefaultGrdiantContainer from '../../../Components/GrdiantView';
import { moderateScale } from '../../../styles/responsiveSize';
import CustomDropDown from '../../../Components/CustomDropDown';
import { cityies } from '../../../config/FakeData';
import { apiPost } from '../../../utils/utils';
import { signUp } from '../../../store/Action/AuthFunctions';
import Loader from '../../../Components/Loader';
import { AccessKey } from '../../../config/urls';


const Login = () => {

    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [username, setusername] = useState();
    const [number, setnumber] = useState();
    const [pass, setpass] = useState();
    const [cpass, setcpass] = useState();
    const [city, setcity] = useState();
    const [state, setstate] = useState();
    const [isLoading, SetisLoading] = useState(false);
    const navigation = useNavigation()


    const signup = () => {

        // navigation.navigate('CreateProfile')
        SetisLoading(true)
        if (username?.length != undefined && email?.length != undefined && pass?.length != undefined) {
            const data = `signup?AccessKey=${AccessKey}&username=${username}&Email=${email}&Designation=${'0'}&Password=${pass}&City=${city}&Country=${'country'}&State=${state}`
            signUp(data, SetisLoading, navigation)
        }
        else if (pass != cpass) {
            Alert.alert('Password does not match');
        }
        else {
            Alert.alert('Please fill all required field');
            SetisLoading(false);
        }
    }

    const back = () => {
        navigation.goBack()
    }


    return (

        <WrapperContainer>
            <KeyboardAwareScrollView>
                <View style={styles.container}>

                    <ImageBackground source={Assets.AuthBg} resizeMode={'cover'} style={[commonStyles.backgroundImage]}>

                        {/* <Image source={Assets.AppIcons2} style={commonStyles.AppIcons2} resizeMethod={'resize'} resizeMode={'contain'} /> */}

                        <TextInputWithLabel
                            label={'Enter Your Name *'}
                            value={name}
                            TopWidth={true}
                            width={'80%'}
                            onChangeText={(e) => setname(e)}
                            placeholder={'Your Name Here'} />

                        <TextInputWithLabel
                            label={'Enter Your Email *'}
                            value={email}
                            width={'80%'}
                            keyboardType={'email-address'}
                            onChangeText={(e) => setemail(e)}
                            placeholder={'Your Email Here'} />

                        <TextInputWithLabel
                            label={'Username *'}
                            value={username}
                            width={'80%'}
                            onChangeText={(e) => setusername(e)}
                            placeholder={'@username'} />


                        <TextInputWithLabel
                            label={'Enter Your Number'}
                            value={number}
                            width={'80%'}
                            keyboardType={'name-phone-pad'}
                            onChangeText={(e) => setnumber(e)}
                            placeholder={'Your Number Here'} />


                        <TextInputWithLabel
                            label={'Password *'}
                            value={pass}
                            width={'80%'}
                            // secureTextEntry={true}
                            onChangeText={(e) => setpass(e)}
                            placeholder={'Enter Password'} />


                        <TextInputWithLabel
                            label={'Confirm Password *'}
                            value={cpass}
                            width={'80%'}
                            // secureTextEntry={true}
                            onChangeText={(e) => setcpass(e)}
                            placeholder={'Confirm Password'} />

                        <View style={commonStyles.row}>

                            <TextInputWithLabel
                                label={'Enter Your City'}
                                value={city}
                                type={'1'}
                                onChangeText={(e) => setcity(e)}
                                placeholder={'Your City'} />

                            <TextInputWithLabel
                                label={'Enter Your State'}
                                value={state}
                                type={'1'}
                                onChangeText={(e) => setstate(e)}
                                placeholder={'State'} />

                        </View>

                        <AppDefaultGrdiantContainer style={styles.gradinatButton}>
                            <ButtonComp
                                btnText='Sign Up'
                                onPress={() => signup()}
                                type={'1'}
                            />
                        </AppDefaultGrdiantContainer>

                        <ButtonComp
                            btnText='Already have an account ?'
                            onPress={back}
                            type={'0'}

                        />



                    </ImageBackground>
                </View>
                <Loader isLoading={isLoading} />
            </KeyboardAwareScrollView>
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
