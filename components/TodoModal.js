import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default class TodoModal extends React.Component {
  state = {
    name: this.props.list.name,
    color: this.props.list.color,
    todos: this.list.todos,
  }

  render() {

    console.log(todos)
    return (
      < SafeAreaView style={styles.container} >
        <TouchableOpacity
          style={{ position: 'absolute', top: 64, right: 32, zIndex: 10 }}
          onPress={this.props.closeModal}
        >
          <AntDesign name='close' size={24} color={colors.black} />
        </TouchableOpacity>
      </SafeAreaView >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})