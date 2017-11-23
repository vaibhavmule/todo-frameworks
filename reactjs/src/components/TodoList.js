import React from 'react'
import {List, ListItem} from 'material-ui/List'
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';

const TodoListComponent = ({ todos, remove }) => (
	<div className="center">
	  <List className="width">
	    {todos.map(todo => (
				<ListItem
					key={todo.id}
					rightIconButton={
						<IconButton
        			tooltip="delete"
        			onClick={() => remove(todo.id)}>
        			<Close />
        		</IconButton>
					}
					>
					{todo.todo}
				</ListItem>
	    ))}
	  </List>
  </div>
)

export default TodoListComponent;
