import { connect } from 'react-redux'
import TodoListComponent from '../components/TodoList'

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
  	remove: todo => console.log(todo),
  }
}

const TodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoListComponent)

export default TodoList
