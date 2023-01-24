// import React from 'react';
// import { FlatList, View, Text, Pressable, Image, StyleSheet } from 'react-native';

// import Assest from '../../../constants/imagePath';
// import { moderateScale, verticalScale } from '../../../styles/responsiveSize';
// import TextLabel from '../../../Components/Label';
// import colors from '../../../styles/colors';

// function Posts() {

//     const Trends = [
//         { id: 1, type: "text", image: '' },
//         { id: 2, type: "img", image: require('../../../assets/images/avatar.png'), },
//         { id: 3, type: "img", image: require('../../../assets/images/avatar.png'), },
//         { id: 4, type: "img", image: require('../../../assets/images/avatar.png'), },
//         { id: 5, type: "img", image: require('../../../assets/images/avatar.png'), },
//         { id: 6, type: "img", image: require('../../../assets/images/avatar.png'), },
//         { id: 7, type: "img", image: require('../../../assets/images/avatar.png'), },
//         { id: 7, type: "img", image: require('../../../assets/images/avatar.png'), },
//     ]

//     const Items = ({ item }) => {
//         return (
//             <Pressable style={[styles.container]} >
//                 {item.type == 'text' ?
//                     <View style={[styles.Textcenter]}>
//                         <TextLabel label={'Popular'} fontSize={25} marginTop={10} />
//                     </View>
//                     :
//                     <Image source={item?.image} style={styles.images} resizeMode={'contain'} />
//                 }
//             </Pressable>
//         )}

//     return (
//         <FlatList
//             data={Trends}
//             showsVerticalScrollIndicator={false}
//             numColumns={2}
//             showsHorizontalScrollIndicator={false}
//             // style={{backgroundColor:'pink',marginTop:30}}
//             contentContainerStyle={styles.contentContainerStyle}
//             keyExtractor={item => item.id}
//             renderItem={({ item, index }) => <Items item={item} />} />
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         // width: moderateScale(200),
//         // height: verticalScale(116),
//         // // borderRadius: moderateScale(50),
//         justifyContent: "center",
//         alignItems: 'center',
//         alignSelf: "center",
//         // backgroundColor:"pink",
//         marginBottom: 30,

//     },
//     contentContainerStyle: {
//         alignSelf: 'center',
//         justifyContent: "center",
//         alignItems: 'center',
//         width: "100%",

//         // backgroundColor:"red",
//         alignItems: 'center',
//         paddingBottom: verticalScale(80)

//     },
//     images: {
//         width: moderateScale(160),
//         height: verticalScale(160),
//         borderRadius: moderateScale(20),
//     },
//     Textcenter: {
//         width: moderateScale(160),
//         height: verticalScale(160),
//         borderRadius: moderateScale(20),
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// })

// export default Posts

import React ,{useMemo} from 'react';
import { FlatList, View, Text, Pressable, Image, StyleSheet } from 'react-native';

import Assest from '../../../constants/imagePath';
import { moderateScale, verticalScale } from '../../../styles/responsiveSize';
import TextLabel from '../../../Components/Label';
import colors from '../../../styles/colors';

import MasonryList from '@react-native-seoul/masonry-list';


function Post() {

    const Trends = [
        { id: 1, type: "text", image: '' },
        { id: 2, type: "img", image: require('../../../assets/images/avatar.png'), },
        { id: 3, type: "img", image: require('../../../assets/images/avatar.png'), },
        { id: 4, type: "img", image: require('../../../assets/images/avatar.png'), },
        { id: 5, type: "img", image: require('../../../assets/images/avatar.png'), },
        { id: 6, type: "img", image: require('../../../assets/images/avatar.png'), },
        { id: 7, type: "img", image: require('../../../assets/images/avatar.png'), },
        { id: 7, type: "img", image: require('../../../assets/images/avatar.png'), },
    ]

    const renderItem = ({ item, i }) => {
        console.log('i', item?.image);
        const randomBool = useMemo(() => Math.random() < 0.5, []);
        return (
            <View style={[{ marginTop: 30, flex: 1, marginLeft: i % 2 === 0 ? 0 : 12 }]}>
                {item.type == 'text' ?
                    <View style={[styles.Textcenter]}>
                        <TextLabel label={'Popular'} fontSize={25} marginTop={10} />
                    </View>
                    :
                    <Image
                        source={item.image}
                        style={{ height: randomBool ? 150 : 180, width: "100%", borderRadius: 20 }}
                        resizeMode='cover' />
                }

            </View>
        );
    };


    return (
        <MasonryList
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<View />}
            contentContainerStyle={{
                paddingHorizontal: 24,
                alignSelf: 'stretch',
            }}
            numColumns={2}
            data={Trends}
            renderItem={renderItem}
            style={{paddingBottom:80}}
        />
    )
}

export default Post;

const styles = StyleSheet.create({
    container: {
        // width: moderateScale(200),
        // height: verticalScale(116),
        // // borderRadius: moderateScale(50),
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: "center",
        // backgroundColor:"pink",
        marginBottom: 30,

    },
    contentContainerStyle: {
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: 'center',
        width: "100%",

        // backgroundColor:"red",
        alignItems: 'center',
        paddingBottom: verticalScale(80)

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
        alignItems: 'center'
    }
})


