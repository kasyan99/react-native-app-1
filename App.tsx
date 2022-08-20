import React from "react";
import { Provider } from "react-redux";
import MainPage from "./MainPage";
import { store } from "./store/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <MainPage />
      </Provider>
    </>
  );
}

