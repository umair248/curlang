import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { moderateScale, verticalScale } from "../../styles/responsiveSize";

const styles = StyleSheet.create({
    container: { flex: 1 },
    callbody:{ flex: 1 },
    calluser:{
        alignSelf:"center",
        marginTop:verticalScale(-150),
        height:verticalScale(150),
        width:moderateScale(150)
    },
    beat:{
        width:"100%",
        height:verticalScale(150),
        marginTop:moderateScale(80)
    },
    bottom:{
        position:"absolute",
        bottom:20,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"pink"
    },
    bottomWithRow:{
        position:"absolute",
        bottom:30,
        width:'80%',
        alignSelf:"center",
        alignItems:"center",
        flexDirection:'row',
        justifyContent:"space-around"
    },
    linki:{
        height:verticalScale(150),
        width:moderateScale(150),
        alignSelf:"center"
    },
    CreateLink:{
        width:'25%',
        backgroundColor:colors.white,
        height:verticalScale(25),
        justifyContent:"center",
        alignItems:'center',
        marginTop:10,
        borderRadius:moderateScale(20)
    },
    LinkView:{
        // width:'50%',
        // backgroundColor:colors.white,
        borderWidth:1,
        borderColor:colors.white,
        height:verticalScale(35),
        justifyContent:"center",
        alignItems:'center',
        marginTop:10,
        borderRadius:moderateScale(20)
    }
})

export default styles