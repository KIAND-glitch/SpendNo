import React from 'react';
import { View, Text } from 'react-native';
import { ButtonGroup } from '@rneui/themed';

export default function Landing() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome To SpendNo</Text>
      <ButtonGroup
        buttons={['Sign Up', 'Log In']}
        containerStyle={{ marginBottom: 20 }}
      />
    </View>
  );
}
