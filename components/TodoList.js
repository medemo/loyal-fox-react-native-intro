import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import TodoItem from './TodoItem'

function TodoList({ todos }) {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
          }}
        >
          Loyal Fox todos:
      </Text>
        <View
          style={{
            marginTop: 20
          }}
        >
          {
            todos.map((todo) => {
              return (
                <TodoItem todo={todo} />
              )
            })
          }
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default TodoList
