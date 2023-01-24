import React from 'react';
import { FlatList, View, Text, Pressable, Image, StyleSheet } from 'react-native';

import Assest from '../../../constants/imagePath';
import { moderateScale, verticalScale } from '../../../styles/responsiveSize';
import TextLabel from '../../../Components/Label';
import colors from '../../../styles/colors';

function Trends() {

    const Trends = [
        { id: 1, name: "VIDEOS", image: Assest.Videos, color: colors.orange1 },
        { id: 2, name: "TIENDA", image: Assest.Cart, color: '#515bd4' },
        { id: 3, name: "VIJAS", image: Assest.PLanes, color: '#8134af' },
        { id: 4, name: "FITNESS", image: Assest.Fitness, color: '#dd2a7b' },
    ]

    const Items = ({ item }) => {
        return (
            <Pressable style={[styles.container, { backgroundColor: item?.color }]} onPress={()=>alert(item.name)}>
                <Image source={item?.image} />
                <TextLabel label={item?.name} fontSize={11} marginTop={10} />
            </Pressable>
        )
    }

    return (
        <FlatList
            data={Trends}
            horizontal
            showsHorizontalScrollIndicator={false}
            // style={{backgroundColor:'pink',height:200}}
            // contentContainerStyle={{height:200}}
            keyExtractor={item => item.Id}
            renderItem={({ item, index }) => <Items item={item} />} />
    )
}

const styles = StyleSheet.create({
    container: {
        width: moderateScale(100),
        height: verticalScale(116),
        borderRadius: moderateScale(10),
        justifyContent: "center",
        alignItems: 'center',
        margin: 10,
    
    }
})

export default Trends