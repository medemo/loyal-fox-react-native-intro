import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Constants from 'expo-constants';
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import { ScrollView, PanGestureHandler, TapGestureHandler, State } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'

import { resetTodos, fetchTodos } from '../store/actions/todosAction'


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
      return (
        <ScrollView style={styles.todos}>
          <TodoList todos={todos.data} />
          <View style={{ marginVertical: 20, width: 200, alignSelf: 'center' }}>
            <Button
              title="RESET"
              color="red"
              onPress={resetTodo}
            />
          </View>
        </ScrollView>
      )
    else
      return <Text>No todos</Text>
  }

  return (
    <View style={styles.container}>
      <AddTodo />
      {renderTodos()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight
  },
  todos: {
    // flex: 1,
  }
});

export default Todos
