import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Todolist';
import MapTest from './MapTest';
import Clock from './Timer';
import MyWeather from './MyWeather';

function App() {
  let name = "대상혁";

  return (
    <div className="container">
      <TodoList />
      <MyWeather weather="맑음">일기예보</MyWeather>
      <Clock />
    </div>
  );
}

export default App;