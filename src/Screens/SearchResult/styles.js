import { StyleSheet, Platform } from 'react-native';
import colors from '../../styles/colors';
import { height, width,StatusBarHeight } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  lines:{
    backgroundColor:'#000',
    height:8,
    width:'100%'
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
    margin: 10,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    bottom: 10,
    width: '90%',
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.black
  },
  SendMessage: {
    height: 20,
    width: 20,
    marginRight: 10
  },
  TextInput: {
    width: '80%',
    paddingLeft: 20,
    color: '#000'
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
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
    borderBottomRightRadius: 20,
    padding: 10
  },
  othermsg: {
    alignSelf: 'flex-start',
    backgroundColor: colors.black,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
    borderBottomLeftRadius: 20,
    padding: 10,
    alignSelf: 'flex-end'
  }
});

export default styles;
