import React from 'react';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Screens from './navigation/Screens';
import { Platform } from 'react-native';
import { Button, lightColors, createTheme, ThemeProvider } from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
});

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
export default registerRootComponent(App);
