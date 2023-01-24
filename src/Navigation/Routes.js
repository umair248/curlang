import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from 'react-redux';

import AuthScreen from './AuthScreen';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();

export default function Routes() {

    const AuthReducer = useSelector(state => state?.AuthReducer);

    console.log('AuthReducer===========>',AuthReducer?.UserDetail?.ProfileID)


    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    AuthReducer?.LoginUser && AuthReducer?.UserDetail?.ProfileID > 0 ? <>{MainStack(Stack)}</>
                        : <>{AuthScreen(Stack, AuthReducer)}</>

                }
            </Stack.Navigator>

        </NavigationContainer>
    );
}
