import React from 'react'
import { View, Button } from 'react-native'

export default function Home(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
      <Button title="Satu" onPress={() => { props.navigation.navigate('Satu') }} />
      <Button title="Dua" onPress={() => { props.navigation.navigate('Dua') }} />
      <Button title="Tiga" onPress={() => { props.navigation.navigate('Tiga') }} />
      <Button title="Empat" onPress={() => { props.navigation.navigate('Empat') }} />
      <Button title="Lima" onPress={() => { props.navigation.navigate('Lima') }} />
    </View>
  )
}