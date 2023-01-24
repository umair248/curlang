import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import TabRoutes from './TabRoutes';
import { UserList, SearchResult, StartChat, VideoCall, AudioCall,PostsForm } from '../Screens';


export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.TAB_ROUTES}
        component={TabRoutes}
        options={{ headerShown: false }}

      />
      <Stack.Screen
        name={navigationStrings.UserList}
        component={UserList}
        options={{ headerShown: false }}

      />
      <Stack.Screen
        name={navigationStrings.StartChat}
        component={StartChat}
        options={{ headerShown: false }}

      />
      <Stack.Screen
        name={navigationStrings.SearchResult}
        component={SearchResult}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.VideoCall}
        component={VideoCall}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.AudioCall}
        component={AudioCall}
        options={{ headerShown: false }}
      />
      
       <Stack.Screen
        name={navigationStrings.PostsForm}
        component={PostsForm}
        options={{ headerShown: false }}
      />
    </>
  );
}

