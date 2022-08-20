import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Provider } from "react-redux";
import { setTodos } from "./AsyncStorage/todos-list";
import { NavBar } from "./components/NavBar";
import { TodosList } from "./components/TodosList";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { ITodo } from "./models/models";
import { getTodoList, changeTodoList } from "./store/actions/todolist-actions";
import { store } from "./store/store";


export default function MainPage() {

   const [text, changeText] = useState<string>("");

   // const [todoList, setTodoList] = useState<ITodo[]>([]);

   // useEffect(() => {
   //   getTodos().then(data => setTodoList(data))
   // }, [])

   // useEffect(() => {
   //   setTodos(todoList)
   // }, [todoList])

   // const removeTask = (task: ITodo) => {
   //   setTodoList((prev) => prev.filter((todo) => todo.id !== task.id));
   // };

   // const pressedHandler = async () => {
   //   if (text.trim()) {
   //     setTodoList([...todoList, { id: Date.now() + Math.random(), text }]);
   //     changeText('')
   //   }
   // };

   const todoList = useAppSelector(state => state.todolist.todoList)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(getTodoList())
   }, [])

   const removeTask = (task: ITodo) => {
      dispatch(changeTodoList(task, 'remove'))
   };

   const pressedHandler = () => {
      if (text.trim()) {
         dispatch(changeTodoList({ id: Date.now() + Math.random(), text }, 'add'))
         changeText('')
      }
   };

   return (
      <>
         <Provider store={store}>
            <Text style={styles.capture}>Todos</Text>
            <View style={styles.container}>

               <NavBar
                  changeText={changeText}
                  text={text}
                  pressedHandler={pressedHandler}
               />
               <TodosList todoList={todoList} removeTask={removeTask} />

            </View>
         </Provider>
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