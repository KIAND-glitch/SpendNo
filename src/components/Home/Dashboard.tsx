import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { DashboardScreenProps } from '~navigation/types';

export default function Dashboard({ navigation }: DashboardScreenProps) {
  function pressHandler() {
    navigation.navigate('Landing');
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dashboard Bitches!</Text>
      <Pressable>
        <Button title="Go to Landing" onPress={pressHandler} />
      </Pressable>
    </View>
  );
}
