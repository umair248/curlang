import React, {useState, useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import ProfileSlider from '../Components/ProfileImageSilder/ProfileSlider';
import {
  Image,
  View,
  TextInput,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import colors from '../styles/colors';
import {useNavigation} from '@react-navigation/native'
import {moderateScale, verticalScale, scale} from '../styles/responsiveSize';
import Assets from '../constants/imagePath';
import TextLabel from './Label';
import Swiper from 'react-native-deck-swiper';
import Loader from './Loader';
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

const Card = item => {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <View style={styles.row2}>
          <Image source={Assets.User} style={styles.user} />
          <View>
            <TextLabel
              label={item.card.PostedBy}
              color={'#fff'}
              fontSize={17}
            />
            {/* <TextLabel
              label={'Hace 20 min'}
              color={'#7DCEA0'}
              fontSize={10}
              marginTop={-2}
            /> */}
          </View>
        </View>

        <View style={[styles.row2, {marginRight: 10}]}>
          <Pressable
            onPress={() => {
              getData;
            }}>
            <Image source={Assets.Share} style={styles.share} />
          </Pressable>
          <Image source={Assets.sharemenu} style={styles.share2} />
        </View>
      </View>
      <ProfileSlider image={item.card.PostPic} />
      <View style={styles.row3}>
        {/* <Text style={styles.details}>
          Jhon Alex &<Text style={styles.details2}> 4,588</Text>
          <Text> Like this Photo</Text>
        </Text> */}

        <Text style={styles.postinfo}>{item.card.Title}</Text>

        {/* <Text style={styles.comments}>View 500 Comments</Text>

        <Text style={[styles.postinfo, {paddingBottom: 10}]}>
          Perla_Pipol
          <Text style={styles.postinfo2}>Nice Picture Great Artwork!!</Text>
        </Text> */}
      </View>
    </View>
  );
};
function PostView() {
  const navigation = useNavigation();
  const [data, setdata] = useState(null);
  const useSwiper = useRef(null).current;
  const [loading, setloading] = useState(false);
  const counter = useSelector(state => state.AuthReducer.UserDetail.ProfileID);
  const getData = async () => {
    setloading(true);
    fetch(
      `http://107.180.1.24/plesk-site-preview/curlingapp.scitforte.net/get-all-posts?AccessKey=31u289371892e89qwed93748912u7e89duqw9uq9w3ye89qwdy9q&userID=${counter}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(data => {
        setdata(data);
        setloading(false);
      })
      .catch(error => console.log('error', error));
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
    setdata(null);
    getData();
    });
    return unsubscribe
  }, []);

  return (
    <>
      <View style={{display: 'flex', marginLeft: 10}}>
     
      </View>
      {!data ||  data.length === 0 || data === undefined ? (
        <>
          <Text>loading</Text>
          <Loader isLoading={true} />
        </>
      ) : (
        <>
          <View style={{height: 340}}>
            <Swiper
              ref={useSwiper}
              animateCardOpacity
              containerStyle={styles.containerdiv}
              cards={data.Data}
              renderCard={card => <Card card={card} />}
              backgroundColor="white"
              stackSize={1}
              infinite
              showSecondCard
              verticalSwipe={false}
            />
          </View>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16A085',
    width: '100%',
    alignSelf: 'center',

    justifyContent: 'center',
    // alignItems: "center",
    borderRadius: moderateScale(20),
  },
  containerdiv: {
    backgroundColor: 'transparent',
    width: '100%',
    alignSelf: 'center',

    justifyContent: 'center',
    // alignItems: "center",
    borderRadius: moderateScale(20),
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: moderateScale(15),
  },
  user: {
    height: verticalScale(30),
    width: moderateScale(30),
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row3: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  share: {
    marginRight: 10,
  },
  details: {
    fontSize: scale(10),
    color: colors.white,
    textAlign: 'left',
    marginLeft: moderateScale(22),
    marginTop: -10,
    // paddingBottom:10
  },
  details2: {
    color: colors.orange1,
  },
  postinfo: {
    fontSize: scale(18),
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'left',
    marginLeft: moderateScale(22),
    // marginTop: 5,
    paddingBottom: 5,
  },
  postinfo2: {
    fontSize: scale(10),
    textAlign: 'left',
    marginLeft: moderateScale(22),
    marginTop: 5,
  },
  comments: {
    fontSize: scale(10),
    color: colors.white,
    textAlign: 'left',
    marginLeft: moderateScale(22),
    opacity: 0.5,
  },
});

export default PostView;
