import React from 'react';
import ReactDOM from 'react-dom';
import Root from './frontend/components/root'
import configureStore from './frontend/store/store.js';
import { receiveTodos, receiveTodo } from './frontend/actions/todo_actions.js';
import { allTodos } from './frontend/reducers/selectors';

const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  // TESTING
  window.store = store;
  // window.receiveTodos = receiveTodos;
  // window.receiveTodo = receiveTodo;
  window.testNewTodos = [
    { id: 1, body: "hello", title: "sup", done: false },
    { id: 2, body: "hello2", title: "number 2", done: true }
  ]
  window.allTodos = allTodos;

  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
