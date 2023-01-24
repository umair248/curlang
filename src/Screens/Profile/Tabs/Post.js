import React, {useMemo, useEffect, useState} from 'react';
import {FlatList, View, Text, Pressable,Modal, Image, StyleSheet,Alert} from 'react-native';
import {moderateScale, verticalScale} from '../../../styles/responsiveSize';
import ButtonComp from '../../../Components/ButtonComp';
import MasonryList from '@react-native-seoul/masonry-list';
import { useNavigation } from '@react-navigation/native';
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

function Post() {
  const navigation = useNavigation();
  const [data, setdata] = useState(null);
  const [selectedId, setselectedId] = useState(null)
  const [modalVisible, setmodalVisible] = useState(false);
  const randomBool = useMemo(() => Math.random() < 0.5, []);
  useEffect(() => {
    
    fetch(
      'http://107.180.1.24/plesk-site-preview/curlingapp.scitforte.net/get-all-posts?AccessKey=31u289371892e89qwed93748912u7e89duqw9uq9w3ye89qwdy9q&userID=20',
      requestOptions,
    )
      .then(response => response.json())
      .then(data => setdata(data))
      .catch(error => console.log('error', error));
  
   
  }, []);
 

  const renderItem = ({item, i}) => {
    return (
      <>
     
      <View
        style={[{marginTop: 12, flex: 1, marginLeft: i % 2 === 0 ? 0 : 12}]}>
         <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setmodalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text  style={{color:'#027b76',fontSize:26,fontWeight:'700'}}>Post Details</Text>
          <Text style={{fontSize:20}}>Uzma Waqar</Text>
          <ButtonComp
            btnText="Close Details"
            onPress={()=>{setmodalVisible(false)}}
            type={'3'}
            width={'40%'}
          />
          </View>
      </Modal>
       
        <Pressable onPress={()=>{setmodalVisible(true)}}>
        <Image
          source={{uri:`http://107.180.1.24/plesk-site-preview/curlingapp.scitforte.net${item.PostPic}`}}
          style={{
            height: randomBool ? 150 : 180,
            width: '100%',
            borderRadius: 20,
          }}
          resizeMode="cover"
        />
        </Pressable>
        {/* {item.type == 'text' ?
                    <View style={[styles.Textcenter]}>
                        <TextLabel label={'Popular'} fontSize={25} marginTop={10} />
                    </View>
                    :
                    <Text>image here</Text>
                    // <Image
                    //     source={item.image}
                    //     style={{ height: randomBool ? 150 : 180, width: "100%", borderRadius: 20 }}
                    //     resizeMode='cover' />
                } */}
      </View>
      </>
    );
  };

  return (
    <>
    
      {data && data !== undefined && data.length !== 0 ? (
        <MasonryList
          keyExtractor={item => item.id}
          ListHeaderComponent={<View />}
          contentContainerStyle={{
            paddingHorizontal: 24,
            alignSelf: 'stretch',
          }}
          numColumns={2}
          data={data.Data}
          renderItem={renderItem}
          style={{paddingBottom: 80}}
        />
      ) : (
        <>
          <Text style={{fontSize: 50}}>No data found</Text>
        </>
      )}
    </>
  );
}

export default Post;

const styles = StyleSheet.create({
  container: {
    // width: moderateScale(200),
    // height: verticalScale(116),
    // // borderRadius: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor:"pink",
    marginBottom: 30,
  },
  contentContainerStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    // backgroundColor:"red",
    alignItems: 'center',
    paddingBottom: verticalScale(80),
  },
  images: {
    width: moderateScale(160),
    height: verticalScale(160),
    borderRadius: moderateScale(20),
  },
  Textcenter: {
    width: moderateScale(160),
    height: verticalScale(160),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    marginTop:'80%',
    
    shadowColor: "#027b76",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});
