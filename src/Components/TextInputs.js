import React from 'react';
import { View, Text, TextInput, StyleSheet, } from 'react-native';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import commonStyles from '../styles/commonStyles';

const TextInputs
    = ({
        value,
        onChangeText,
        placeholder,
        inputStyle,
        ...props
    }) => {
        return (
                <TextInput
                    style={styles.inputStyle}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={colors.blackOpacity25}
                    {...props}
                />
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
        width:"80%",
        paddingLeft:20,
        alignSelf:"center",
        borderWidth: 1,
        color: colors.blackOpacity70,
        borderColor: colors.lightGreen,
        alignItems: 'center',
        
    },
});


export default TextInputs

