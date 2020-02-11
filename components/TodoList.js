import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import TodoItem from './TodoItem'

function TodoList({ todos }) {
  return (
    <View style={styles.container}>
      {
        todos.map((todo) => {
          return (
            <TodoItem key={todo.id} todo={todo} />
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'hsl(0, 0%, 80%)',
    paddingBottom: 25
  },
});

export default TodoList
