import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import Todos from '../screens/Todos'
import TodoDetail from '../screens/TodoDetail'

const Stack = createStackNavigator();


function TodosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={Todos} />
      <Stack.Screen name="Detail" component={TodoDetail} />
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

export default TodosStack
