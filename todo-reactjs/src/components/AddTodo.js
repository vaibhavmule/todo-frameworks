import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export default class AddTodo extends Component {

	render() {
		const {todo, handleChange, add} = this.props
		return (
			<div>
			  <TextField
          floatingLabelText="Add Todo"
          name='todoItem'
          value={todo}
          onChange={handleChange}
	        onKeyPress={e => {e.key === 'Enter'?add(todo):null}}
          />
        <RaisedButton
        	style={{marginLeft: '2.5rem'}}
        	label="Add Todo"
        	primary={true}
        	onClick={() => add(todo)}/>
      </div>
		)
	}
}