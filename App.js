import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import DT from './darkTheme';
import myDarkTheme from './darkTheme';
import HomeScreenStack from './src/navigators/MainNavigator';

function App() {
  const scheme = useColorScheme()
  const MyDarkTheme = DT()

  return (
    <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : DefaultTheme}>
      <HomeScreenStack />
    </NavigationContainer>
  )
}

export default App
