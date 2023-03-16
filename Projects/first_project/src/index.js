import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let usersData = [
  { id: "1", userName: "Вася Жопов" },
  { id: "2", userName: "Света Коряга" },
  { id: "3", userName: "Дима Печенег" },
  { id: "4", userName: "Оля Пупкина" },
  { id: "5", userName: "Катя Абобова" },
  { id: "6", userName: "Олег Олегов" }
]

let messagesData = [
  { id: "1", message: "Hi" },
  { id: "2", message: "Hello" },
  { id: "3", message: "How are you?" },
  { id: "4", message: "Fine! And You?" },
  { id: "5", message: "I am OK" }
]

const postsData = [
  { id: '1', message: 'Hello World', likesCount: 12},
  { id: '2', message: 'It is my first comment', likesCount: 22},
  { id: '3', message: 'Lalalala', likesCount: 52},
  { id: '4', message: 'Good information', likesCount: 2},
  { id: '5', message: 'I am OK', likesCount: 12},
];

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App usersData={usersData} messagesData={messagesData} postsData={postsData}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
