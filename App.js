import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import Routes from "./src/Navigation/Routes";
import fontFamily from './src/styles/fontFamily';
import { moderateScale, textScale } from './src/styles/responsiveSize';
import Splash from './src/Screens/Splash/splash';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/store';

const App = () => {

  const [timer, settimer] = useState(true)

  useEffect(() => {
    setTimeout(() => { settimer(false) }, 2000)
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<Splash />} persistor={persistor} onBeforeLift={() => new Promise(resolve => setTimeout(resolve, 3000))}>
        <SafeAreaProvider>

          <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />

          {timer == true ? <Splash /> : <Routes />}

          <FlashMessage
            titleStyle={{ marginRight: moderateScale(5), fontFamily: fontFamily.medium, fontSize: textScale(16) }}
            position="top" />

        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};


export default App;