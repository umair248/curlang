import React from "react"
import navigationStrings from "../constants/navigationStrings";
import {
    InitialAuth,
    Login,
    Signup,
    OtpVerification,
    ForgotPassword,
    OnBoarding,
    CreateProfile
} from "../Screens";

export default function (Stack, AuthReducer) {

    console.log('first===>', AuthReducer?.UserDetail?.ProfileID)

    return (
        <>
            {AuthReducer?.UserDetail?.ProfileID === 0 ?
                <Stack.Screen
                    name={navigationStrings.CreateProfile}
                    component={CreateProfile}
                    options={{ headerShown: false, }}
                />
                : <>
                    <Stack.Screen
                        name={navigationStrings.LOGIN}
                        component={Login}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={navigationStrings.SIGNUP}
                        component={Signup}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={navigationStrings.OTP_VERIFICATION}
                        component={OtpVerification}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={navigationStrings.FORGOT_PASSWORD}
                        component={ForgotPassword}
                        options={{ headerShown: false, }}
                    />
                </>}

        </>
    );
}
