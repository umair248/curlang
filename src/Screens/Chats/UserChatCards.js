import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import TextLabel from '../../Components/Label';
import colors from '../../styles/colors';
import Assets from '../../constants/imagePath'
import navigationStrings from '../../constants/navigationStrings';

export default function UserChatCards({ item, index }) {
    const navigation = useNavigation();
    
    return (
        <Pressable style={styles.container} onPress={() => {navigation.navigate(navigationStrings.StartChat)}}>
            <View style={styles.row}>
                <Image source={Assets.LikeUser} style={styles.profile} resizeMode={'contain'} />
                <View style={styles.innerrow}>
                    <TextLabel label={item.name} color={'#000'} fontSize={17} fontWeight={'bold'} />
                    <View style={styles.row}>
                        <TextLabel label={"Hi! how are you?"} color={colors.black} fontSize={12} />
                    </View>
                </View>
            </View>
            <View style={styles.innerrow2}>
                <View style={styles.row}>
                    <TextLabel label={item.timestap} color={colors.black} fontSize={12} fontWeight={'bold'} />
                </View>
                {item?.newmsg > 0 ?
                    <View style={styles.newmessage}>
                        <Text style={styles.newmsg}>{item?.newmsg}</Text>
                    </View> : null}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 10
    },
    profile: {
        height: 54,
        width: 54,
        // borderRadius: 40
    },
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    innerrow: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 10
    },
    innerrow2: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    Clock: {
        height: 10,
        width: 10,
        tintColor: "green",
        marginRight: -5
    },
    newmessage: {
        backgroundColor: 'red',
        height: 15,
        width: 15,
        alignSelf: 'flex-end',
        marginRight:10,
        borderRadius: 15,
        justifyContent:"center",
        alignItems:'center'
    },
    newmsg:{
        color:'#fff',
        fontSize:10,
    }
})
