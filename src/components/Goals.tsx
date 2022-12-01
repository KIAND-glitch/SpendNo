import { View, Text, Button } from 'react-native'
import React from 'react'

const Goals = ({navigation}: {navigation:any}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Goals Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Goals')}
      />
    </View>
  )
}

export default Goals;
