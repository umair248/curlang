//import liraries
import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';

import CustomHeader from '../../Components/CustomHeader';
import Assets from '../../constants/imagePath';
import TextLabel from '../../Components/Label';
import { moderateScale, verticalScale } from '../../styles/responsiveSize';


const DATA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];


const Search = () => {

    const renderItem = () => (
        <View style={styles.row}>
            <Image source={Assets.LikeUser} style={styles.LikeUser} resizeMode={'contain'} />
            <View style={styles.row2}>
                <TextLabel label={'Jhon Mick Like Your Photo'} color={'#000'} fontSize={13} />
                <Image source={Assets.LikeHear} resizeMode={'contain'} style={styles.LikeHear} />
            </View>
        </View>
    );


    return (
        <View style={styles.container}>
            <CustomHeader label={'Notification'} header2={true} />
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item}
                contentContainerStyle={{ marginTop: 20,paddingBottom:80 }}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    row: {
        width: "90%",
        alignSelf: 'center',
        justifyContent: "space-between",
        flexDirection: 'row',
        marginBottom: moderateScale(20),
        alignItems: "center"

    },
    row2: {
        justifyContent: "space-between",
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#efefef',
        alignItems: "center",
        height: verticalScale(40),
        borderTopLeftRadius: moderateScale(20),
        borderBottomRightRadius: moderateScale(20),
        paddingRight: moderateScale(10)

    },
    LikeUser: {
        height: verticalScale(54),
        width: moderateScale(54)
    },
    LikeHear: {
        height: verticalScale(18),
        width: moderateScale(22)
    }
});

//make this component available to the app
export default Search;
