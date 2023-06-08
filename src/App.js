import React from "react";
import { Provider } from "react-redux"; 
import "./App.css";
import store from "./store/store";
import Header from "./components/Header";

// import {AiOutlineMenu, AiOutlineSearch } from  "react-icons/ai";

function App() {
  return (
    <Provider store={store}>
      <Header/>
    </Provider>
  );
}

export default App;
