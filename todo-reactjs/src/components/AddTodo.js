import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {rightMargin} from './Styles.js';


export default class AddTodo extends Component {

	render() {
		const {todo, handleChange, add, onEnterKeyPress} = this.props
		return (
			<div>
			  <TextField
          floatingLabelText="Add Todo"
          name='todoItem'
          value={todo}
          onChange={handleChange}
	        onKeyPress={onEnterKeyPress}
          />
        <RaisedButton
        	style={rightMargin}
        	label="Add Todo"
        	primary={true}
        	onClick={() => add(todo)}/>
      </div>
		)
	}
}