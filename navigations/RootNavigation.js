import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './HomeStackNavigation'
import Todos from './TodosStackNavigation'


const Tab = createBottomTabNavigator()

export default function RootNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Ionicons name="md-home" size={32} />
        }}
      />
      <Tab.Screen
        name="Todos"
        component={Todos}
        options={{
          tabBarIcon: () => <Ionicons name="md-list" size={32} />
        }}
      />
    </Tab.Navigator>
  )
}