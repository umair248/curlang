import React from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Stories() {
  const navigation = useNavigation();

  const StoriesData = [
    { icon: require('../../assets/images/LikeUser.png'), Id: 0 },
    { icon: require('../../assets/images/LikeUser.png'), Id: 1 },
    { icon: require('../../assets/images/LikeUser.png'), Id: 2 },
    { icon: require('../../assets/images/LikeUser.png'), Id: 3 },
    { icon: require('../../assets/images/LikeUser.png'), Id: 4 },
    { icon: require('../../assets/images/LikeUser.png'), Id: 5 },
  ];

  const OnPress = item => {

  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.imgcontainer}
        onPress={() => OnPress(item)}>
        <Image source={item.icon} style={styles.image} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={StoriesData}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.Id}
        extraData={StoriesData}
        style={{ marginTop: -10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == 'ios' ? 20 : 5,
    marginBottom: 10
  },
  imgcontainer: {
    marginLeft: 7,
    marginRight: 7,
    borderWidth: 1,
    borderRadius: 40,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F45564',
    marginTop:20,
    overflow:'visible'

  },
  image: {
    height: 54,
    width: 54,
    borderRadius: 40,
  },
});
