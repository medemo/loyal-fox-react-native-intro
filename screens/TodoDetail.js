import React, { useEffect } from 'react'
import { Text, StyleSheet } from 'react-native'


function TodoDetail(props) {
  useEffect(() => {
    props.navigation.setOptions({
      title: props.route.params.todo.title,
    })
  }, [])

  return (
    <Text>{JSON.stringify(props.route.params.todo)}</Text>
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

export default TodoDetail
