import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';

function DropDown({ data, value, setvalue, type, label, placeholder, multiple, zIndex, zIndexInverse }) {
    const [open, setOpen] = useState(false);
    // const [value, setValue] = useState(value);
    const [items, setItems] = useState(data);

    return (
        <View style={{ width: type == 'short' ? "40%" : type == 'medium' ? '50%' : '95%' }}>
            {label?.length > 0 ? <Text style={[styles.labelTextwhite,
            type == 'long' ? { alignSelf: "flex-start", marginLeft: 20 } : {}
            ]}>{label} </Text> : null}
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                placeholderStyle={{ color: "#fff" }}
                placeholder={placeholder}
                setValue={setvalue}
                setItems={setItems}
                multiple={multiple == true ? true : false}
                selectedItemLabelStyle={{ color: "#000" }}
                style={type == 'short' ? styles.containerShort : styles.container}
                containerStyle={{ width: "100%" }}
                zIndex={zIndex ? zIndex : 1000}
                zIndexInverse={zIndexInverse ? zIndexInverse : 1000}
                textStyle={{
                    color: '#000'
                }}
            />
        </View>
    );
}

export default DropDown;

const styles = StyleSheet.create({
    containerShort: {
        width: "100%",
        borderRadius: 25,
        // height:50,
        borderColor: "#fff",
        borderWidth: 1,
        
        
    },
    container: {
        width: "100%",
        borderRadius: 25,
        borderColor: "#fff",
        borderWidth: 1,
        zIndex:-1,
    },
    labelTextwhite: {
        ...commonStyles.fontSizewhite14,
        alignSelf: 'center',
        marginLeft: -30,
        fontFamily: fontFamily.medium,
        marginVertical: 10,

    }
})