import React from 'react';
import { registerRootComponent } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import { Button, lightColors, createTheme, ThemeProvider } from '@rneui/themed';
import Screens from './navigation/Screens';

const theme = createTheme({
  components: {
    Button: {
      buttonStyle: {
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 15,
      },
    },
  },
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
