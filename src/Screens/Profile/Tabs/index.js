import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

import TextLabel from '../../../Components/Label';
import colors from '../../../styles/colors';

//PAGES
import Post from './Post';
import TimeLine from './TimeLine';
import Videos from './Videos';


function index() {
    const [val, setval] = useState(0)
    return (
        <>
            <View style={styles.container}>
                <Pressable onPress={() => setval(0)} style={val == 0 ? styles.lines : null}>
                    <TextLabel label={'Post'} color={val == 0 ? colors.black : colors.blackOpacity25} fontWeight={val == 0 ? 'bold' : '100'} />
                </Pressable>
                <Pressable onPress={() => setval(1)} style={val == 1 ? styles.lines : null}>
                    <TextLabel label={'Timeline'} color={val == 1 ? colors.black : colors.blackOpacity25} fontWeight={val == 1 ? 'bold' : '100'} />
                </Pressable>
                <Pressable onPress={() => setval(2)} style={val == 2 ? styles.lines : null}>
                    <TextLabel label={'Videos'} color={val == 2 ? colors.black : colors.blackOpacity25} fontWeight={val == 2 ? 'bold' : '100'} />
                </Pressable>
            </View>

            {val == 0 ? <Post /> : null}
            {val == 1 ? <TimeLine /> : null}
            {val == 2 ? <Videos /> : null}
        </>

    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '90%',
        alignItems: "center",
        alignSelf: 'center'
    },
    lines: {
        borderBottomWidth: 2,
        // borderWidth:1,
        borderColor: colors.darkgreen
    }
})