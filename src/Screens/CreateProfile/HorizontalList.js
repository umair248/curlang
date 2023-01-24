import React from 'react';
import {
    View,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Image,
} from 'react-native';
import { moderateScale, verticalScale } from '../../styles/responsiveSize';
import TextLabel from '../../Components/Label';
import ButtonComp from '../../Components/ButtonComp';

export default function HorizontalList({ data, type, label }) {


    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.imgcontainer}>
                <Image source={item.icon} style={styles.image} resizeMode={'cover'} />
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <TextLabel label={label} marginTop={20} fontSize={16} alignSelf={'center'} />
            <FlatList
                horizontal={true}
                data={data}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={item => item.Id}
                extraData={data}
                style={{ marginTop: 0, marginBottom: 20, width: "100%", alignSelf: "center" }}
            />
            {type == 0 ? <ButtonComp
                btnText='View All'
                onPress={()=>{}}
                type={'3'}
                marginTop={10}
                width={'20%'}
            /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    imgcontainer: {
        marginLeft: 7,
        marginRight: 7,
        // borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        height: verticalScale(60),
        width: moderateScale(60),
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor: '#F45564',
    },
    image: {
        height: verticalScale(60),
        width: moderateScale(60),
        borderRadius: 40,
    },
});