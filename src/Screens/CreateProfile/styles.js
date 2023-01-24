import { Modal, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import StatusBarHeight, { moderateScale, verticalScale, textScale } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBarHeight,
        flex: 1
    },
    switch: { height: verticalScale(30), width: moderateScale(30), backgroundColor: colors.orange1, borderRadius: moderateScale(20) },
    switchcontainer: {
        alignSelf: "flex-end",
        marginRight: 10,
        flexDirection: "column",
        alignItems: "center",
        width: "30%",
        justifyContent: "center"
    },
    thumbnailcontainer: {
        alignSelf: "center",
        height: verticalScale(130),
        width: moderateScale(130),
        borderWidth: 4,
        borderColor: colors.orange1,
        borderRadius: moderateScale(140),
        justifyContent: "center",
        alignItems: "center",
        overflow: 'hidden'
        // backgroundColor:"black"
    },
    thumbnail: {
        height: verticalScale(80),
        width: moderateScale(80),
        // borderRadius: 40,
        // tintColor: "#fff"
    },
    textarea: {
        width: "90%",
        alignSelf: "center",
        textAlignVertical: "top",
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 10,
        padding: 15,
        minHeight: 150,
        color:"#fff"
    },
    iconStyle: {
        height: 20,
        width: 20
    },
    imagecontainer: {
        flexWrap: 'wrap',
        justifyContent: "space-around",
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center'
    },
    travelimag: {
        width: moderateScale(100),
        height: verticalScale(100),
    },
    travelimagcontainer: {
        width: moderateScale(100),
        height: verticalScale(100),
        overflow: "hidden",
        borderRadius: moderateScale(20),
        borderWidth: 1,
        borderColor: colors.orange1,
        marginTop: moderateScale(10),
    },
    profile: {
        width: moderateScale(150),
        height: verticalScale(150),
    },
    intresetview: {
        minWidth: moderateScale(100),
        minHeight: verticalScale(30),
        backgroundColor: colors.white,
        borderRadius: moderateScale(20),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        // borderWidth: 1,
        // borderColor: colors.orange1,
        marginTop: moderateScale(10),
    },
    cross: {
        height: verticalScale(10),
        width: moderateScale(10)
    }
})

export default styles;