import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';
import { textScale } from '../styles/responsiveSize';


const TextLabel = ({
    label,
    fontSize,
    color,
    marginTop,
    paddingHorizontal,
    fontFamily,
    marginLeft,
    alignSelf,
    marginBottom,
    textAlign,
    width,
    fontWeight,
    marginRight
}) => {
    return (
        <View
            style={[
                Styles.containers,
                paddingHorizontal ? { paddingHorizontal } : { paddingHorizontal: 10 },
                marginTop ? { marginTop } : { marginTop: 0 },
                
            ]}>
            <Text
                allowFontScaling={false}
                style={[
                    Styles.Text,
                    fontFamily ? { fontFamily } : { fontFamily: 'Futura' },
                    fontSize ? { fontSize: textScale(fontSize) } : { fontSize: textScale(17) },
                    color ? { color } : { color: colors.white },
                    marginLeft ? { marginLeft } : {},
                    alignSelf ? { alignSelf } : {},
                    marginBottom ? { marginBottom } : {},
                    textAlign ? { textAlign } : {},
                    width ? { width } : {},
                    fontWeight ? { fontWeight } : { fontWeight: '600' },
                   
                ]}>
                {label}
            </Text>
        </View>
    );
};

export default TextLabel;

const Styles = StyleSheet.create({
    containers: {
        // justifyContent: 'flex-start',
        // alignItems: 'flex-start',
    },
    Text: {
        fontStyle: 'normal',
    },
});