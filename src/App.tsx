import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Todolist';
import MapTest from './MapTest';
import Clock from './Timer';

function App() {
  let name = "대상혁";

  return (
    <div className="container">
      <TodoList />
      <MapTest />
      <Clock />

    </div>
  );
}

export default App;