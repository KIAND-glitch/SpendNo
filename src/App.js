import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import registerRootComponent from 'expo/build/launch/registerRootComponent';

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
    <View style={styles.container}>
      <Text>Open up</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default registerRootComponent(App);
