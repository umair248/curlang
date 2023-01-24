import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { UserDetail } from '../../store/Reducers/AuthReducer/AuthReducer';

import CustomHeader from '../../Components/CustomHeader';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import Assets from '../../constants/imagePath';
import { moderateScale, verticalScale } from '../../styles/responsiveSize';
import navigationStrings from '../../constants/navigationStrings';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import TableStories from '../../Components/Stories/TableStories';
import AnimatedHeader from './ProfileHeader/AnimatedHeader';
import Loader from '../../Components/Loader';

import TabsView from './Tabs'
import { GetUpdatedProfile } from '../../store/Action/actions';

const Profile = ({ navigation }) => {

    const dispatch = useDispatch();
    const Focus = useIsFocused();
    const userData = useSelector((state) => state?.AuthReducer?.UserDetail);
    const [loading, SetisLoading] = useState(true)

    useEffect(() => {
        GetUpdatedProfile(dispatch, SetisLoading, userData, UserDetail)
    }, [Focus])

    return (
        <WrapperContainer backgroundColor={colors.white}>
            <ProfileHeader />
            <TableStories />
            <TabsView />
            <Loader isLoading={loading} />
        </WrapperContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    searchbar: {
        width: '95%',
        height: verticalScale(50),
        alignSelf: 'center',
        marginBottom: moderateScale(10)
        // backgroundColor:'pink'
    }
});

export default Profile