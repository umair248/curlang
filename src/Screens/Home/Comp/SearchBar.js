import React from 'react';
import { Image, View, TextInput, ImageBackground, Pressable, ScrollView, StyleSheet } from 'react-native';

import TextLabel from '../../../Components/Label';
import Assets from '../../../constants/imagePath'
import colors from '../../../styles/colors';
import { moderateScale, verticalScale } from '../../../styles/responsiveSize';


function SearchBar() {
    return (
        <View style={styles.container}>
            <TextLabel label={'Explore'} fontSize={25} fontWeight={'bold'} />
            <View style={styles.TextinputContainer}>
                <Image source={Assets.Search} style={styles.Search} />
                <TextInput style={styles.input} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '95%',
        alignItems: 'center',
        alignSelf: "center"
    },
    TextinputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '60%',
        alignItems: 'center',
        backgroundColor: colors.blackOpacity60,
        borderRadius: moderateScale(30),
    },
    input: {
        color: colors.white,
        // textAlign:'left'
        width:'100%',
        paddingLeft:15
    },
    Search: {
        height: verticalScale(15),
        width: moderateScale(15),
        marginLeft: 20
    },
    TextInput: {
        width: '100%',

    }
})
export default SearchBar