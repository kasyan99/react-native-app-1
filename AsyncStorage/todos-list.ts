import AsyncStorage from "@react-native-async-storage/async-storage";
import { ITodo } from "../models/models";

const KEY_TL = "todo-list-key";

export const setTodos = async (todoList: ITodo[]) => {
  try {
    await AsyncStorage.setItem(KEY_TL, JSON.stringify(todoList));
  } catch (error) {
    console.log("it can not be saved");
  }
};

export const getTodos = async () => {
  try {
    const value = await AsyncStorage.getItem(KEY_TL);
    if (value !== null) {
      // We have data!!
      console.log(JSON.parse(value));

      return JSON.parse(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};
