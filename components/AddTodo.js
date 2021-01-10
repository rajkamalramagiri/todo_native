import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {StyleSheet, TextInput} from 'react-native';
function AddTodo({addTodoItem}) {
  const [newTodo, setNewTodo] = useState('');
  return (
    <View>
      <TextInput
        style={styles.textInput}
        onChangeText={(val) => setNewTodo(val)}></TextInput>
      <View style={styles.button}>
        <Button title="Add New" onPress={() => addTodoItem(newTodo)}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    margin: 20,
    padding: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  button: {
    margin: 20,
  },
});

export default AddTodo;
