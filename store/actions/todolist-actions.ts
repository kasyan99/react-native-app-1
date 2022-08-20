import { getTodos, setTodos } from "../../AsyncStorage/todos-list";
import { ITodo } from "../../models/models";
import { todoListSlice } from "../slices/todolist-slice";
import { AppDispatch, store } from "../store";

export const getTodoList = () => async (dispatch: AppDispatch) => {
  try {
    getTodos().then((data) =>
      dispatch(todoListSlice.actions.setTodoList(data))
    );
  } catch (error) {}
};

export const changeTodoList =
  (todo: ITodo, type: "add" | "remove") => async (dispatch: AppDispatch) => {
    try {
      if (type === "add") {
        dispatch(todoListSlice.actions.addTodo(todo));
      } else {
        dispatch(todoListSlice.actions.removeTodo(todo));
      }

      setTodos(store.getState().todolist.todoList);
    } catch (error) {}
  };
