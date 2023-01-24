import React from 'react'
import { Image, View, TextInput, ImageBackground, Pressable, ScrollView, StyleSheet } from 'react-native'
import colors from '../../styles/colors'
import { moderateScale, verticalScale } from '../../styles/responsiveSize';
import Assets from '../../constants/imagePath';
import TextLabel from '../../Components/Label';
import AppDefaultGrdiantContainer from '../../Components/GrdiantView';

function TeacherCards() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/teacher.jpeg')}
                // resizeMode={'contain'}
                style={styles.image} />

            <View style={styles.BottomFixed}>

            <View style={styles.courseDetails2}>
            <TextLabel label={'Christine Ale'}  />
            <TextLabel label={'29'} />
            </View>

                <AppDefaultGrdiantContainer style={[styles.courseDetails,{borderWidth:1}]}>
                    <TextLabel label={'50$ Hr/150$ Full'} />
                    <View style={styles.row2}>
                        <Image source={Assets.China} style={[styles.IconFlag]} resizeMode={'contain'} />
                        <Image source={Assets.America} style={[styles.IconFlag]} resizeMode={'contain'} />
                        <Image source={Assets.France} style={[styles.IconFlag]} resizeMode={'contain'}  />
                    </View>
                </AppDefaultGrdiantContainer>

                <View style={styles.row}>

                    <View style={[styles.cover]}>
                        <Image
                            source={Assets.HeaderChat}
                            style={[styles.icon]}
                            resizeMode={'contain'}
                        />
                    </View>

                    <View style={[styles.cover]}>
                        <Image
                            source={Assets.Call}
                            style={[styles.icon]}
                            resizeMode={'contain'}
                        />
                    </View>

                    <View style={styles.cover}>
                        <Image
                            source={Assets.LikeHear}
                            style={styles.icon}
                            resizeMode={'contain'}
                        />
                    </View>


                </View>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: "center",
        justifyContent: "center",
        marginTop: moderateScale(10)
    },
    image: {
        width: '100%',
        height: verticalScale(500),
        borderRadius: moderateScale(20),
        borderWidth: 3,
        borderColor: colors.orange1
    },
    row: {
        // width: '90%',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
    },
    icon: {
        height: verticalScale(18),
        width: moderateScale(18),
        // marginLeft: 10,
        tintColor: '#fff'
    },
    cover: {
        // backgroundColor: 'red',
        height: verticalScale(35),
        width: moderateScale(35),
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: colors.orange1,
        borderRadius: moderateScale(20),
        margin: 5
    },
    row2: {
        flexDirection: 'row',
        alignItems: "center"
    },
    likeView: {
        backgroundColor: '#A6ACAF',
        marginLeft: moderateScale(10),
        borderRadius: moderateScale(20)
    },
    courseDetails: {
        width: '75%',
        height: verticalScale(40),
        alignItems: "center",
        justifyContent: 'space-around',
        flexDirection: "row",
        borderRadius: 5,
        // borderWidth: 1,
        borderColor: colors.white,
        alignSelf: 'center',
        marginBottom:moderateScale(10)
    },
    courseDetails2:{
        width: '75%',
        height: verticalScale(40),
        alignItems: "center",
        justifyContent:'space-between',
        flexDirection: "row",
        borderRadius: 5,
        // borderWidth: 1,
        borderColor: colors.white,
        alignSelf: 'center',
        // marginBottom:moderateScale(10)
    },

    IconFlag:{
        height: verticalScale(18),
        width: moderateScale(18),
        marginLeft:5
    },
    BottomFixed:{
        position:"absolute",
        bottom:10,
        alignSelf:"center"
    }
})

export default TeacherCards