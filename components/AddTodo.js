import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { addTodo } from '../store/actions/todosAction'

export default function AddTodo(props) {
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = useState('')

  const handleInputChange = text => {
    setNewTodo(text)
  }

  const handleSubmit = () => {
    dispatch(addTodo(newTodo))
    setNewTodo('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          flex: 1,
          height: 40,
          borderWidth: 1,
          paddingHorizontal: 5,
          borderRadius: 5,
          borderColor: 'white',
          backgroundColor: 'white'
        }}
        onChangeText={text => handleInputChange(text)}
        value={newTodo}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'orange',
          height: 40,
          marginLeft: 5,
          paddingHorizontal: 20,
          borderRadius: 5,
          justifyContent: 'center'
        }}
        onPress={handleSubmit}
      >
        <Text>ADD</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: 80,
  },
});
