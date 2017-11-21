import { connect } from 'react-redux'

import TodoListComponent from '../components/TodoList'
import { removeTodo } from '../actions'

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
  	remove: todo => dispatch(removeTodo(todo)),
  }
}

const TodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoListComponent)

export default TodoList
