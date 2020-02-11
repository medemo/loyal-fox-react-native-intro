import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home'


const Stack = createStackNavigator();


export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Satu" component={Home} />
      <Stack.Screen name="Dua" component={Home} />
      <Stack.Screen name="Tiga" component={Home} />
      <Stack.Screen name="Empat" component={Home} />
      <Stack.Screen name="Lima" component={Home} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  todos: {
    // flex: 1
  }
});

