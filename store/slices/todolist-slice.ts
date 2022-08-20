import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../models/models";

const initialState = {
  loading: true,
  todoList: [] as ITodo[],
};

export const todoListSlice = createSlice({
  name: "todo-list",
  initialState,
  reducers: {
    setTodoList(state, action: PayloadAction<ITodo[]>) {
      state.todoList = action.payload;
    },
    addTodo(state, action: PayloadAction<ITodo>) {
      state.todoList.push(action.payload);
    },
    removeTodo(state, action: PayloadAction<ITodo>) {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
  },
});

export const todoListReducer = todoListSlice.reducer;
