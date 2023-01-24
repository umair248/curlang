import React from 'react';

import ProfileSlider from '../Components/ProfileImageSilder/ProfileSlider'
import { Image, View, TextInput, ImageBackground, Pressable, ScrollView, StyleSheet, Text } from 'react-native'
import colors from '../styles/colors';
import { moderateScale, verticalScale, scale } from '../styles/responsiveSize';
import Assets from '../constants/imagePath'
import TextLabel from './Label';

function SuggestionContainer() {
    return (
        <View style={styles.container}>

            <TextLabel label={'SUGGESTION'} fontSize={17} marginTop={10} marginBottom={20} textAlign={'center'} />

            <ScrollView contentContainerStyle={styles.row} horizontal={true}>

                <View style={styles.coulmn}>
                    <Image source={Assets.User} style={styles.image} />
                    <TextLabel label={'Luz.anzo'} fontSize={10} textAlign={'center'} marginTop={5} />
                    <Pressable style={styles.btn}>
                        <TextLabel label={'Add'} fontSize={10} textAlign={'center'} color={colors.green}  fontWeight={'bold'} />
                    </Pressable>
                </View>

                <View style={styles.coulmn}>
                    <Image source={Assets.User} style={styles.image} />
                    <TextLabel label={'Luz.anzo'} fontSize={10} textAlign={'center'} marginTop={5} />
                    <Pressable style={styles.btn}>
                        <TextLabel label={'Add'} fontSize={10} textAlign={'center'} color={colors.green}  fontWeight={'bold'} />
                    </Pressable>
                </View>


                <View style={styles.coulmn}>
                    <Image source={Assets.User} style={styles.image} />
                    <TextLabel label={'Luz.anzo'} fontSize={10} textAlign={'center'} marginTop={5} />
                    <Pressable style={styles.btn}>
                        <TextLabel label={'Add'} fontSize={10} textAlign={'center'} color={colors.green}  fontWeight={'bold'} />
                    </Pressable>
                </View>


                <View style={styles.coulmn}>
                    <Image source={Assets.User} style={styles.image} />
                    <TextLabel label={'Luz.anzo'} fontSize={10} textAlign={'center'} marginTop={5} />
                    <Pressable style={styles.btn}>
                        <TextLabel label={'Add'} fontSize={10} textAlign={'center'} color={colors.green}  fontWeight={'bold'}  />
                    </Pressable>
                </View>

                <View style={styles.coulmn}>
                    <Image source={Assets.User} style={styles.image} />
                    <TextLabel label={'Luz.anzo'} fontSize={10} textAlign={'center'} marginTop={5} />
                    <Pressable style={styles.btn}>
                        <TextLabel label={'Add'} fontSize={10} textAlign={'center'} color={colors.green} fontWeight={'bold'} />
                    </Pressable>
                </View>


                



            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16A085',
        width: '90%',
        alignSelf: "center",
        marginTop: moderateScale(20),
        justifyContent: "center",
        // alignItems: "center",
        borderRadius: moderateScale(20)
    },
    coulmn: {
        alignItems: "center",
        marginLeft:moderateScale(10)
    },
    image: {
        height: moderateScale(74),
        width: moderateScale(74)
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginBottom: 10
    },
    btn: {
        height: moderateScale(20),
        width: moderateScale(50),
        backgroundColor: colors.orange1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: moderateScale(5),
        marginTop: 5
    }

})

export default SuggestionContainer
