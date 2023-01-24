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

function VideoCall() {
    return (
        <View style={styles.container}>
            <CustomHeader label={'Jhon Mick'} header2={true} type={'chat'} call={true} />
            <AppDefaultGrdiantContainer style={styles.callbody}>

                <Image source={require('../../assets/images/beat.png')} style={styles.beat} resizeMode={'contain'} />
                <Image source={require('../../assets/images/calluser.png')} style={styles.calluser} resizeMode={'contain'} />

                <TextLabel label={'Video Call'} fontSize={29} fontWeight={'bold'} textAlign={'center'} marginTop={20} />

                <View style={styles.bottom}>
                    <Image source={require('../../assets/images/linki.png')} style={styles.linki} resizeMode={'contain'} />

                    <Pressable style={styles.CreateLink}>
                        <TextLabel fontSize={9} label={'Create Link:'} color={colors.green}/>
                    </Pressable>

                    <Pressable style={styles.LinkView}>
                        <TextLabel fontSize={14} label={'https/asbjsaf/shdusa/csajdsa/badb'} color={colors.orange1}/>
                    </Pressable>

                </View>

            </AppDefaultGrdiantContainer>
        </View>
    )
}

export default VideoCall