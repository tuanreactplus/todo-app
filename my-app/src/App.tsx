import React from 'react';
import './App.css';
import {TodoContainer} from "./components/organisms/TodoContainer";
import Background from "./components/organisms/Background";

const App = ():JSX.Element => {
  return (
    <div className="App">
        <Background />
        <div className={'todo-container'}>
            <span className={'todo-title'}>Todo App</span>
            <TodoContainer />
        </div>
    </div>
  );
}

export default App;
