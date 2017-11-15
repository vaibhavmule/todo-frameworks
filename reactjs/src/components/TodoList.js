import React, { Component } from 'react';


export default class TodoList extends Component {


	render() {
		const {todos} = this.props
		return (
			<div>
				<ul>
					{
						todos 
						? todos.map(item => <li key={item}>{item}</li>)
						: null
					}
				</ul>
      </div>
		)
	}
}