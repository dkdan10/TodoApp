export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO'

// TODO OBJECT ARRAY
export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  }
}

// SINGLE TODO OBJECT
export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  }
}

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id
  }
}