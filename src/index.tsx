import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import SplashScreen from 'react-native-splash-screen';

import Navigator from './navigation';

import { lightTheme } from './themes';

// @ts-ignore
import RNUxcam from 'react-native-ux-cam';

RNUxcam.optIntoSchematicRecordings();
RNUxcam.startWithKey('28ubokci1b5dsso');

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <Navigator />
    </ThemeProvider>
  );
};

export default App;
