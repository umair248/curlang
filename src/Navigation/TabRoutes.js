import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import { Image, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import {
    Home,
    Search,
    Post,
    Notification,
    Profile,
    Explore
} from '../Screens';
import { moderateScale, width, moderateScaleVertical, verticalScale } from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import strings from '../constants/lang';
import navigationStrings from '../constants/navigationStrings';


const BottomTab = createBottomTabNavigator();

const TabRoutes = (props) => {

    const screenOptions = route => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#FAF9F9',
        tabBarShowLabel: false,
        tabBarIconStyle: {
            paddingBottom: 0,
        },
        tabBarStyle: {
            position: 'absolute',
            borderTopLeftRadius: moderateScale(30),
            borderTopRightRadius: moderateScale(30),
            height: verticalScale(70),
            elevation: moderateScale(24),
            borderTopWidth: 0,
            backgroundColor: colors.orange1
        },
    });
    const ActiveIcon = ({ img }) => (
        <Image style={[styles.ActiveImage]} source={img} resizeMode={'contain'} />
    );
    const UnActiveIcon = ({ img }) => (
        <Image style={styles.UnActiveIcon} source={img} resizeMode={'contain'} />
    );

    const UserDetails = useSelector((state) => state?.AuthReducer?.UserDetail);




    return (
        <BottomTab.Navigator
            tabBar={(tabsProps) => (
                <>
                    <BottomTabBar {...tabsProps} />
                </>
            )}
            initialRouteName={navigationStrings.HOME}
            screenOptions={screenOptions}>
            <BottomTab.Screen
                name={navigationStrings.HOME}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ?
                                <ActiveIcon img={imagePath.Home} />
                                : <UnActiveIcon img={imagePath.Home} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.SEARCH}
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ?
                                <ActiveIcon img={imagePath.Search} />
                                : <UnActiveIcon img={imagePath.Search} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.Explore}
                component={Explore}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.centerButton}>
                                <Image style={[styles.PlusIcons]} source={imagePath.Plus} resizeMode={'contain'} />
                            </View>
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.NOTIFICATION}
                component={Notification}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            focused ?
                                <ActiveIcon img={imagePath.Heart} />
                                : <UnActiveIcon img={imagePath.Heart} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.PROFILE}
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={[styles.ActiveImageProfile]} source={{uri:`http://107.180.1.24/plesk-site-preview/curlingapp.scitforte.net${UserDetails?.ProfilePic}`}} resizeMode={'contain'} />
                        );
                    },
                }}
            />

        </BottomTab.Navigator>
    );
};

const styles = StyleSheet.create({
    ActiveImage: {
        height: verticalScale(20),
        width: moderateScale(20),
        tintColor: colors.darkgreen
    },
    UnActiveIcon: {
        height: verticalScale(20),
        width: moderateScale(20),
        tintColor: colors.white
    },
    ActiveImageProfile: {
        height: verticalScale(20),
        width: moderateScale(20),
        borderRadius:20
    },
    centerButton: {
        height: verticalScale(60),
        width: moderateScale(60),
        borderRadius: moderateScale(50),
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
        top: verticalScale(-30)
    },
    PlusIcons: {
        height: verticalScale(25),
        width: moderateScale(25),
        tintColor: colors.darkgreen
    }

});

export default TabRoutes