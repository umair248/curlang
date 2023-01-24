import React from 'react';
import {
    View,
    ImageBackground,
    Image,
    Text,
    TouchableOpacity,
    Pressable,
    ScrollView,
    TextInput
} from 'react-native';


import CustomHeader from '../../Components/CustomHeader';
import AppDefaultGrdiantContainer from '../../Components/GrdiantView';
import TextLabel from '../../Components/Label';
import colors from '../../styles/colors';
import styles from './styles';
import Asests from '../../constants/imagePath'

function AudioCall() {
    return (
        <View style={styles.container}>
            <CustomHeader label={'Jhon Mick'} header2={true} type={'chat'} call={true} />
            <AppDefaultGrdiantContainer style={styles.callbody}>

                <Image source={require('../../assets/images/beat.png')} style={styles.beat} resizeMode={'contain'} />
                <Image source={require('../../assets/images/calluser.png')} style={styles.calluser} resizeMode={'contain'} />

                <TextLabel label={'Audio Call'} fontSize={29} fontWeight={'bold'} textAlign={'center'} marginTop={20} />
                <TextLabel label={'Ringing...'} fontSize={19} textAlign={'center'} marginTop={0} color={colors.orange1} />


                <View style={styles.bottomWithRow}>
                    <Image source={Asests.VoiceClose} resizeMode={'contain'} />
                    <Image source={Asests.CallReject} resizeMode={'contain'} />
                    <Image source={Asests.Speaker} resizeMode={'contain'} />
                </View>

            </AppDefaultGrdiantContainer>
        </View>
    )
}

export default AudioCall