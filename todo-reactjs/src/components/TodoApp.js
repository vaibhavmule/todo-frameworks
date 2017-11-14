import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';

import AddTodo from './AddTodo.js'
import TodoList from './TodoList.js'


export default class TodoApp extends Component {
	state = {
		todoList: [],
		todoItem: ''
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}


	addTodoToList = todo => {
		const todoList = this.state.todoList
		todoList.push(todo)
		this.setState({todoList, todoItem: ''})
	}

	render() {
		const {todoList, todoItem} = this.state
		return (
			<div>
			  <AppBar
			    title="Todo App"
			  />
			  <div style={{marginLeft: '2.5rem'}}>
				<AddTodo 
					todo={todoItem}
					handleChange={this.handleChange}
					add={this.addTodoToList}
					/>
				<TodoList todos={todoList}/>
				</div>
      </div>
		)
	}
}