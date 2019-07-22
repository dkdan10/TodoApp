import todosReducer from "./todos_reducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({todos: todosReducer})
// ^^^^ THIS IS THE SAME AS THE BELOW LINE. 

// const rootReducer = (state = {}, action) => {
//   return {
//     todos: todosReducer(state.todos, action),
//   }
// }

export default rootReducer;