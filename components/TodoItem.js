import React, { useState } from 'react'
import { Animated, View, Text, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
// import { useNavigation } from '@react-navigation/native'

export default function TodoItem(props) {
  // const navigation = useNavigation()
  const dispatch = useDispatch()

  const { todo } = props
  const [translateX] = useState(new Animated.Value(0))

  // const handlePress = () => {
  //   navigation.navigate('Detail', { todo })
  // }


  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          color: todo.completed ? 'green' : 'black'
        }}
      >
        {JSON.stringify(todo)}
      </Text>
    </View>
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