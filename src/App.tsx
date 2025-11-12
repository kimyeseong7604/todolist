import React from 'react';
import logo from './logo.svg';
import './App.css';

{
  /*
    작성자 : 홍길동
    작성일 : 2030.11.23
    내용 : 기능에 대한 내용
  */
}

function App() {
  let name = "대상혁";

  return (
    <div className="container">
      <h1 className="test">hello,
        {
          name === '리액트' ? (<h1>YES</h1>) : null
        }!!</h1>
      <p>반갑습니다.</p>
      <br/>
      <input/>
    </div>
  );
}

export default App;
