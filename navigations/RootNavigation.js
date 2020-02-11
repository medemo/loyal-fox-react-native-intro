import React from 'react';
import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './HomeStackNavigation'
// import Todos from './TodosStackNavigation'
import Todos from '../screens/Todos'


const Tab = createBottomTabNavigator()

export default function RootNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'orange',
        labelStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="md-home" size={32} color={color} />,
        }}
      />
      <Tab.Screen
        name="Todos"
        component={Todos}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="md-list" size={32} color={color} />
        }}
      />
    </Tab.Navigator>
  )
}