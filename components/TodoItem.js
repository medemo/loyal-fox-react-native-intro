import React, { useState } from 'react'
import { Animated, Text, StyleSheet } from 'react-native'
// import { useDispatch } from 'react-redux'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
// import { useNavigation } from '@react-navigation/native'

export default function TodoItem(props) {
  // const navigation = useNavigation()
  // const dispatch = useDispatch()

  const [left] = useState(new Animated.Value(0))

  const { todo } = props

  const handlePan = (event) => {
    left.setValue(event.nativeEvent.translationX)
  }


  return (
    <PanGestureHandler
      onGestureEvent={handlePan}
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.END) {
          left.setValue(0)
        }
      }}
    >
      <Animated.View
        style={[
          styles.container,
          { left }
        ]}>
        <Text
          style={{
            fontSize: 20,
            color: todo.completed ? 'green' : 'black'
          }}
        >
          {JSON.stringify(todo)}
        </Text>
      </Animated.View>
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 70,
    marginTop: 25,
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'white'
  }
})