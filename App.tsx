import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { getTodos, setTodos } from "./AsyncStorage/todos-list";
import { NavBar } from "./components/NavBar";
import { TodosList } from "./components/TodosList";
import { ITodo } from "./models/models";


export default function App() {

  const [text, changeText] = useState<string>("");

  const [todoList, setTodoList] = useState<ITodo[]>([]);

  useEffect(() => {
    getTodos().then(data => setTodoList(data))
  }, [])

  useEffect(() => {
    setTodos(todoList)
  }, [todoList])

  const removeTask = (task: ITodo) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== task.id));
  };

  const pressedHandler = async () => {
    if (text.trim()) {
      setTodoList([...todoList, { id: Date.now() + Math.random(), text }]);
      changeText('')
    }
  };

  return (
    <>
      <Text style={styles.capture}>Todos</Text>
      <View style={styles.container}>
        <NavBar
          changeText={changeText}
          text={text}
          pressedHandler={pressedHandler}
        />
        <TodosList todoList={todoList} removeTask={removeTask} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17202A",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  capture: {
    backgroundColor: "#ECF0F1",
    width: "100%",
    paddingTop: 30,
    paddingBottom: 15,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: '#17202A'
  },
});
