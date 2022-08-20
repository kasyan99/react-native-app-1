import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoListReducer } from "./slices/todolist-slice";

const rootReducer = combineReducers({
  todolist: todoListReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
