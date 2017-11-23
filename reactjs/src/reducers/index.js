import { combineReducers } from 'redux'

import remove from 'lodash.remove'

import { ADD_TODO, MODIFY_TODO, REMOVE_TODO } from '../actions'

const initialState = {
  todo: '',
  todos: []
}

const todos = (state=initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({},
        state,
        {
          todos: [...state.todos, {
            id: action.id,
            todo: action.todo,
            completed: false
          }],
          todo: ''
        })
    case MODIFY_TODO:
      return Object.assign({},
        state,
        { todo: action.todo })
    case REMOVE_TODO:
      let todos = state.todos
      return Object.assign({},
        state,
        {
          todos: remove(todos, todo => todo.id !== action.id),
          todo: ''
        })
    default:
      return state
  }
}


const rootReducer = combineReducers({
  todos
})

export default rootReducer
