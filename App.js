import React, {useState} from 'react';

import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ]);

  const addTodoItem = (item) => {
    setTodos((prevTodo) => {
      return [...prevTodo, {text: item, key: Math.random().toString()}];
    });
  };

  const clickHandle = (key) => {
    console.log(key);
    setTodos((prevTodo) => {
      return prevTodo.filter((item) => item.key != key);
    });
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
          <AddTodo addTodoItem={addTodoItem} />

          <View style={styles.item}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <Todo item={item} clickHandle={clickHandle} />
              )}
              // renderItem={({item}) => <Text>{item.text}</Text>}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
  },
  body: {
    flex: 1,
  },
  item: {
    flex: 1,
    padding: 10,
  },
});

export default App;
