import React from 'react'
import { View, Button, StyleSheet, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';


function StackScreen(props) {
  return (
    <View>
      <Button title="Satu" onPress={() => { props.navigation.navigate('Satu') }} />
      <Button title="Dua" onPress={() => { props.navigation.navigate('Dua') }} />
      <Button title="Tiga" onPress={() => { props.navigation.navigate('Tiga') }} />
      <Button title="Empat" onPress={() => { props.navigation.navigate('Empat') }} />
      <Button title="Lima" onPress={() => { props.navigation.navigate('Lima') }} />
    </View>
  )
}

const Stack = createStackNavigator();


function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Satu"
        component={StackScreen}
      />
      <Stack.Screen name="Dua" component={StackScreen} />
      <Stack.Screen name="Tiga" component={StackScreen} />
      <Stack.Screen name="Empat" component={StackScreen} />
      <Stack.Screen name="Lima" component={StackScreen} />
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

export default Home
