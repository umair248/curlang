import React from 'react';
import { Image, StyleSheet, Pressable, View,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Assets from '../../../constants/imagePath';
import AppDefaultGrdiantContainer from '../../../Components/GrdiantView';
import { moderateScale, verticalScale, scale } from '../../../styles/responsiveSize';
import StatusBarHeight from '../../../styles/responsiveSize';
import colors from '../../../styles/colors';
import TextLabel from '../../../Components/Label';
import navigationStrings from '../../../constants/navigationStrings';
import { Logout } from '../../../store/Action/AuthFunctions';
function CustomHeader({ users }) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const UserDetails = useSelector((state) => state?.AuthReducer?.UserDetail);

    console.log('UserDetails',UserDetails)

    return (
        <View style={styles.container} >

            <View style={styles.row}>
            <Pressable onPress={() => navigation.navigate(navigationStrings.PostsForm)}>
                <View style={{display:"flex",flexDirection:'row'}}>
                <Image source={Assets.HeaderAdd} style={[styles.icon]} resizeMode={'contain'} />
                <Text style={{color:'white',fontSize:14,fontWeight:'600'}}>Create Post</Text>
                </View>
                </Pressable>
                <Pressable onPress={()=>{Logout(dispatch)}}>
                    <AntDesign name={"poweroff"} size={20} color={"white"}/>
                    {/* <Image source={Assets.HeaderChat} style={[styles.icon]} resizeMode={'contain'} /> */}
                </Pressable>
            </View>

            <View style={styles.Userdetails}>
                <Image  source={{uri:`http://107.180.1.24/plesk-site-preview/curlingapp.scitforte.net${UserDetails?.ProfilePic}`}} style={[styles.Userpic]} resizeMode={'contain'} />
                <Image source={Assets.China} style={[styles.China]} resizeMode={'contain'} />
            </View>

            <TextLabel label={UserDetails?.FullName} fontSize={27} textAlign={'center'} marginTop={10} />
            <TextLabel label={'🖱 Diseño ui/ux y Fotografia 📷 Zihuatanejo, Mexico'} fontSize={11} textAlign={'center'} marginTop={10} />
            <TextLabel label={'#LifeStyle #Design #Photography #Urban #Art'} fontSize={11} textAlign={'center'} marginTop={0} color={colors.orange1} />

            <View style={[styles.interestsrow]}>
                <View style={styles.interests}>
                    <TextLabel label={'Travel'} fontSize={8} textAlign={'center'} color={colors.green} />
                </View>
                <View style={styles.interests}>
                    <TextLabel label={'Gym'} fontSize={8} textAlign={'center'} color={colors.green} />
                </View>
                <View style={styles.interests}>
                    <TextLabel label={'Singing'} fontSize={8} textAlign={'center'} color={colors.green} />
                </View>
            </View>

            <View style={[styles.followrow]}>

                <View>
                    <TextLabel label={0} fontSize={22} textAlign={'center'} color={colors.white} />
                    <TextLabel label={'Posts'} fontSize={11} textAlign={'center'} color={colors.orange1} />
                </View>

                <View>
                    <TextLabel label={UserDetails?.Followers} fontSize={22} textAlign={'center'} color={colors.white} />
                    <TextLabel label={'Followers'} fontSize={11} textAlign={'center'} color={colors.orange1} />
                </View>

                <View>
                    <TextLabel label={UserDetails?.FriendsTo} fontSize={22} textAlign={'center'} color={colors.white} />
                    <TextLabel label={'Friends'} fontSize={11} textAlign={'center'} color={colors.orange1} />
                </View>


            </View>



        </View>
    )
}

export default CustomHeader;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        minHeight: verticalScale(400),
        paddingBottom:20,
        paddingTop: StatusBarHeight,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        // flexDirection: 'row',
        // justifyContent: "space-between",
        // alignItems: "center",
        backgroundColor: "#027b76",

    },
    row: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: moderateScale(20),
        paddingRight: moderateScale(20)
    },
    Userdetails: {
        alignSelf: "center",
        alignItems: 'center',
        height: verticalScale(105),
        width: moderateScale(105),
        borderWidth: 4,
        borderColor: colors.orange1,
        borderRadius: moderateScale(50),
        justifyContent: 'center',
        alignContent: "center",
        // overflow:""
    },
    icon: {
        height: verticalScale(25),
        width: moderateScale(25),
    },
    Userpic: {
        height: verticalScale(100),
        width: moderateScale(100),
        borderRadius: moderateScale(50),
        // backgroundColor:"pink"
    },
    China: {
        height: verticalScale(30),
        width: moderateScale(30),
        position: 'absolute',
        top: 10,
        right: -15
    },
    interests: {
        minHeight: verticalScale(15),
        minWidth: moderateScale(60),
        backgroundColor: '#fff',
        borderRadius: moderateScale(50),
        justifyContent: "center",
        alignItems: "center"

    },
    interestsrow: {
        width: '80%',
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    followrow: {
        width: '80%',
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    appicon: {
        height: verticalScale(80),
        width: moderateScale(100)
    },
    label: {
        color: colors.white,
        fontSize: scale(20)
    }

})