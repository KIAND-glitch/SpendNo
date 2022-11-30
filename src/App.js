import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { Button } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});

function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>Opend up</Text>
        <Button title="CLICK ON MY TITS" />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

export default registerRootComponent(App);
