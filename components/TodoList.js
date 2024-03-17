import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './Counter';

export default TodoList = ({ list }) => {
  const completedCount = list.todos.filter(todo => todo.completed).length
  const remainingCount = list.todos.length - completedCount

  return (
    <View style={[styles.listContainer, { backgroundColor: list.color }]}>
      <Text style={styles.listTitle} numberOfLines={1}>
        {list.name}
      </Text>

      <View>
        <Counter count={remainingCount} subtitle='Remaining' />
        <Counter count={completedCount} subtitle='Completed' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: 'center',
    width: 200,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 18,
  },
  count: {
    fontSize: 48,
    fontWeight: '200',
    color: colors.white,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.white,
  }
})