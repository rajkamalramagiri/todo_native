import React from 'react';

import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

function Todo({item, clickHandle}) {
  return (
    <TouchableOpacity onPress={() => clickHandle(item.key)}>
      <Text style={styles.todoText}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todoText: {
    margin: 20,
    padding: 16,
    textAlign: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 10,
    borderStyle: 'dashed',
  },
});

export default Todo;
