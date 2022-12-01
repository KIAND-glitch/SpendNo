import { Avatar, Badge } from "@rneui/base";
import { Text } from '@rneui/themed';
import React from "react";
import { View } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1, top: 25, alignItems: 'center', paddingBottom: 10 }}>
      <Avatar
        size={140}
        rounded
        source={{ uri: "https://randomuser.me/api/portraits/women/31.jpg" }}
      />
      <Badge
        status="success"
        value=' $$$ '
      />
      <Text h4 style = {{padding: 10 }}>Monke Saves</Text>
      <Text style = {{padding: 5 }}>monkesaves@spendno.com</Text>
    </View>
  );
}
