import React from 'react';
import { View, Text, TextInput, StyleSheet, } from 'react-native';
import StatusBarHeight, { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import commonStyles from '../styles/commonStyles';

const TextInputWithLabel
    = ({
        value,
        onChangeText,
        placeholder,
        inputStyle,
        label,
        type,
        TopWidth,
        keyboardType,
        borderColor,
        Labelcolors,
        onSubmitEditing,
        width,
        ...props
    }) => {
        return (
            <View style={TopWidth ? { marginTop: StatusBarHeight } : null}>
                <Text style={[type == 1 ? styles.labelText2 : type == 'white' ? styles.labelTextwhite : styles.labelText,
                Labelcolors ? { color: Labelcolors } : {}
                ]}>{label} </Text>
                <TextInput
                    style={[type == 1 ? styles.inputStyle2 : type == 'white' ? styles.inputStylewhite : styles.inputStyle,
                    borderColor ? { borderColor, color: '#fff' } : {},
                    width ? { width } : {}
                    ]}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    keyboardType={keyboardType ? keyboardType : 'default'}
                    placeholderTextColor={type == 'white' ? colors.white : colors.blackOpacity25}
                    onSubmitEditing={(e) => onSubmitEditing ? onSubmitEditing(e) : ''}

                    {...props}
                    {...props}
                />
            </View>
        )
    }
const styles = StyleSheet.create({
    inputStyle: {
        ...commonStyles.fontSize14,
        // backgroundColor: 'red',
        borderRadius: moderateScale(30),
        height: moderateScale(50),
        paddingHorizontal: moderateScale(8),
        marginBottom: moderateScaleVertical(16),
        width: "90%",
        paddingLeft: 20,
        alignSelf: "center",
        borderWidth: 1,
        color: colors.blackOpacity70,
        borderColor: colors.lightGreen,
        alignItems: 'center',
    },
    inputStyle2: {
        ...commonStyles.fontSize14,
        // backgroundColor: 'red',
        borderRadius: moderateScale(30),
        height: moderateScale(50),
        paddingHorizontal: moderateScale(8),
        marginBottom: moderateScaleVertical(16),
        width: moderateScale(130),
        paddingLeft: 20,
        alignSelf: "center",
        borderWidth: 1,
        color: colors.blackOpacity70,
        borderColor: colors.lightGreen,
        alignItems: 'center',
    },
    inputStylewhite: {
        ...commonStyles.fontSize14,
        // backgroundColor: 'red',
        borderRadius: moderateScale(30),
        height: moderateScale(50),
        paddingHorizontal: moderateScale(8),
        marginBottom: moderateScaleVertical(16),
        width: moderateScale(130),
        paddingLeft: 20,
        alignSelf: "center",
        borderWidth: 1,
        color: colors.white,
        borderColor: colors.white,
        alignItems: 'center',
    },
    labelText: {
        ...commonStyles.fontSize16,
        width: "70%",
        alignSelf: 'center',
        fontFamily: fontFamily.medium,
        marginVertical: 5,
        // marginBottom: moderateScaleVertical(24),
    },
    labelText2: {
        ...commonStyles.fontSize14,
        alignSelf: 'center',
        fontFamily: fontFamily.medium,
        marginVertical: 5,
    },
    labelTextwhite: {
        ...commonStyles.fontSizewhite14,
        alignSelf: 'center',
        fontFamily: fontFamily.medium,
        marginVertical: 10,
    }
});


export default TextInputWithLabel

