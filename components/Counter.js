import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Counter = ({ count, subtitle }) => {

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.count}>{count}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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