import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function TodoItem(props) {
  const navigation = useNavigation()

  const { todo } = props

  const handlePress = () => {
    navigation.navigate('Detail', { todo })
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={{ fontSize: 20 }} key={todo.id}> - {todo.title}</Text>
    </TouchableOpacity>
  )
}