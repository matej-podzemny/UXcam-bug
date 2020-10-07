import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import SplashScreen from 'react-native-splash-screen';

import Navigator from './navigation';

import { lightTheme } from './themes';

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
