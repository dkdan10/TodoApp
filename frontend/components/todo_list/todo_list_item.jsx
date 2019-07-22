import React from "react";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(e) {
    // debugger
    e.preventDefault();
    this.props.removeTodo(this.props.todo.id);
  }

  render() {
    const { title, body, done } = this.props.todo
    return (
      <>
        <li className="todo-item" >
          <p>{title}:</p>
          <p>{body}</p>
          <p>{done}</p>
          <button onClick={this.handleRemove}>Remove</button>
        </li>
      </>
    );
  }
}

export default TodoListItem