import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import * as screens from './screens';

import { routes } from '@constants';

export type RootStackParamList = {
  [routes.home]: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => (
  <NavigationContainer>
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name={routes.home} component={screens.Home} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default App;
