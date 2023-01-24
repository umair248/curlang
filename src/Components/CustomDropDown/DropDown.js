import React, { useState } from 'react';
import { StyleSheet, View, Image ,Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { moderateScale, scale, verticalScale } from '../../styles/responsiveSize';
import colors from '../../styles/colors';


const DropdownComponent = ({ Label, defaultValue, width, alignSelf, height, Bg, marginTop, fontSize ,fontWeight ,data ,setvalue ,value }) => {
    // const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const ArrowLeft = require('../../assets/images/left-arrow.png')


    return (
        <View style={[styles.container,
        width ? { width } : {},
        alignSelf ? { alignSelf } : {},
        Bg == 'none' ? {} : { backgroundColor: colors.white },
        marginTop ? { marginTop: verticalScale(marginTop) } : {}



        ]}>
            <Text style={[styles.labelText2]}>{Label} </Text>
            <Dropdown
                style={[styles.dropdown,
                height ? { height: verticalScale(height) } : {},
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={data}
                // search
                maxHeight={300}
                // renderRightIcon={() => <Image source={ArrowLeft} style={styles.arrow} />}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? defaultValue : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setvalue(item.value);
                    setIsFocus(false);
                }}
            />
        </View>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        width: "90%",
        // marginTop: verticalScale(10),
        marginBottom: verticalScale(15),
        // borderColor:'#fff'
    },
    dropdown: {
        height: 50,
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 10,
        // borderRadius
        // width: "90%"
    },
    placeholderStyle: {
        fontSize: scale(12),
        fontFamily: 'Montserrat-Bold',
        color: colors.black
    },
    selectedTextStyle: {
        fontSize: scale(12),
        // fontFamily: 'Montserrat-Bold',
        color: colors.white
    },
    iconStyle: {
        width: moderateScale(30),
        height: verticalScale(30),
        tintColor: "#fff",
        resizeMode: 'contain'
    },
    arrow: {
        width: moderateScale(15),
        height: verticalScale(15),
        tintColor: "#fff",
        resizeMode: 'contain',
        marginRight: moderateScale(10)
    },
    labelText2: {
        alignSelf: 'flex-start',
        color: colors.white,
        marginLeft:moderateScale(30),
        marginBottom:verticalScale(8),
        fontSize:16,
        marginLeft:0,
        marginTop:10
    },
});