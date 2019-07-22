import { merge } from 'lodash';
import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

export default (state = initialState, action) => {
  Object.freeze(state)
  
  switch (action.type) {
    case RECEIVE_TODO: {

      const { title, body, done, id } = action.todo;
      const todoToUpload = {
        [id]: {
          title,
          body,
          done,
          id
        }
      }
      return merge({}, state, todoToUpload)
    }
    case RECEIVE_TODOS: {
      const todosObj = {};
      
      action.todos.forEach(todo => {
        if (todo.id === undefined) {
          const id = Math.floor(Math.random() * 1000000)
          todo.id = id
          todosObj[id] = todo; 
        } else {
          todosObj[todo.id] = todo;
        }
      });
      return merge({}, todosObj)
    }
    case REMOVE_TODO: {
      const copied = merge({}, state);
      delete copied[action.id];
      return copied;
    }
    default:
      return state
  }
}

