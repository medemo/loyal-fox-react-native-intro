import React, { useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import { resetTodos } from '../store/actions/todosAction'
import { fetchTodos } from '../store/actions/todosAction'

import { useDispatch, useSelector } from 'react-redux'


function Todos(props) {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const resetTodo = () => {
    dispatch(resetTodos())
  }

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const renderTodos = () => {
    if (todos.loading)
      return <Text>Loading</Text>
    else if (todos.error)
      return <Text>something wrong</Text>
    else if (todos.data.length > 0)
      return <TodoList todos={todos.data} />
    else
      return <Text>No todos</Text>
  }

  return (
    <View style={styles.container}>
      <AddTodo />
      <View style={styles.todos}>
        {renderTodos()}
      </View>
      <View style={{ marginVertical: 20 }}>
        <Button
          title="RESET"
          onPress={resetTodo}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  todos: {
    flex: 1
  }
});

export default Todos
