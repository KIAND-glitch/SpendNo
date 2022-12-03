import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Button, Input } from '@rneui/themed';

export default function SignIn() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Input label="Email" placeholder="Email" />
      <Input label="Password" placeholder="Password" />
      <Pressable>
        <Button title="Sign In" />
      </Pressable>
    </View>
  );
}
