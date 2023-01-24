import React from 'react';
import { View, Modal } from 'react-native';
import { BarIndicator } from "react-native-indicators"
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';

const Loader = ({isLoading ,type}) => {
    console.log('isLoading',isLoading)
    if (isLoading) {
        return (
            <Modal transparent visible={true} >
                <View style={{ ...commonStyles.loader, backgroundColor: "rgba(0,0,0,0.1)" }}>
                    <BarIndicator size={25} color={type == 'white' ? colors.white : colors.darkgreen} />
                </View>
            </Modal>
        );
    }
    return null;
};

export default Loader;
