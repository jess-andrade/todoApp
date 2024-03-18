import { AntDesign } from '@expo/vector-icons'
import React from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import colors from '../Colors'

export default class AddListModal extends React.Component {

  state = {
    name: ''
  }


  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <TouchableOpacity style={{ position: 'absolute', top: 64, right: 32 }} onPress={this.props.closeModal}>
          <AntDesign name='close' size={24} color={colors.black} />
        </TouchableOpacity>

        <View style={{ alignSelf: 'stretch', marginHorizontal: 32 }}>
          <Text style={styles.title}>Create Todo list </Text>
          <TextInput style={styles.input} placeholder='List Name?' onChangeText={text => this.setState({ name: text })} />

          <TouchableOpacity style={[styles.create, { backgroundColor: 'blue' }]}>
            <Text style={{ color: colors.white, fontWeight: '600' }}>create</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.black,
    alignSelf: 'center'
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18
  },
  create: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'

  }
});