import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

const TodoList = ({todos = [], receiveTodo, removeTodo}) => {
  return (
    <>
      <ul className="todo-list">
        <h4>Things To Do</h4>
        {todos.map(todo => (
          <TodoListItem key={todo.id} todo={todo} removeTodo={removeTodo}/>
        ))}
      </ul>
      <TodoForm receiveTodo={receiveTodo}/>
    </>
  );
}

export default TodoList