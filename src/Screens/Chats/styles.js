import { StyleSheet, Platform } from 'react-native';
import colors from '../../styles/colors';
import { height, width, StatusBarHeight, verticalScale, moderateScale } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  lines: {
    backgroundColor: '#000',
    height: 8,
    width: '100%',
  },
  lines2: {
    backgroundColor: '#000',
    height: 8,
    width: '100%',
  },
  Headerbg: {
    height: 100,
    width: width,
  },
  label: {
    fontSize: 18,
    color: '#A7C4C2',
    fontFamily: 'Futura',
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Futura',
  },
  Location: {
    marginTop: Platform.OS == 'ios' ? 15 : 0,
    width: width / 1.1,
    backgroundColor: '#F2F3F4',
    padding: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
  ChatHeader: {
    width: '98%',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingTop: StatusBarHeight,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  back: {
    height: 20,
    width: 20
  },
  user: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 10
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: "row"
  },
  Clock: {
    height: 10,
    width: 10,
    tintColor: "green",
    marginRight: -5
  },
  SendMsgContainer: {
    alignSelf: 'center',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: "center",
    bottom: 0,
    width: '100%',
    borderWidth: 1,
    // borderColor: colors.darkgreen,
    height: verticalScale(80),
    // borderTopWidth:5,
  },
  chatcontainer: {
    flexDirection: 'row',
    width: '90%',
    alignItems: "center",
    justifyContent: "space-around"
  },
  chatmessage: {
    flexDirection: 'row',
    width: '80%',
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 40,
    justifyContent:"space-between",
    // backgroundColor:'pink',
    height:45
  },
  SendMessage: {
    height: 40,
    width: 40,
    // marginRight: 10
  },
  TextInput: {
    width: '80%',
    paddingLeft: 20,
    color: '#fff',

  },
  ScrollView: {
    width: "90%",
    alignSelf: 'center',
    paddingTop: 10,
  },
  msgcontainer: {
    width: '100%',
    marginBottom: 20,
  },
  mymsg: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E7E9',
    shadowColor: "#000",
    marginTop:5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 10
  },
  othermsg: {
    alignSelf: 'flex-start',
    backgroundColor: colors.lightGreen,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    marginTop:5,
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 10,
    alignSelf: 'flex-end'
  },
  imgechat: {
    height: verticalScale(150),
    width: moderateScale(150),
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: 10
  },
  userimage: {
    height: verticalScale(50),
    width: moderateScale(50),
    marginRight: 5
  },
  callcontainer:{
    width:moderateScale(90),
    alignSelf:"flex-end",
    marginTop:moderateScale(20),
    marginRight:moderateScale(20),
    flexDirection:'row',
    justifyContent:'space-around',
    // padding:10,
    borderRadius:20,
    height:verticalScale(30),
    alignItems:'center'
  },
  whitelines:{
    height:'100%',
    backgroundColor:colors.white,
    width:2
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default styles;
