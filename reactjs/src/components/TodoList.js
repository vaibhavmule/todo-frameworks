import React from 'react'
import {List, ListItem} from 'material-ui/List'
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';

const TodoListComponent = ({ todos, remove }) => (
	<div className="center">
	  <List className="width">
	    {todos.map(item => (
				<ListItem 
					key={item}
					rightIconButton={
						<IconButton
        			tooltip="delete"
        			onClick={() => remove(item)}>
        			<Delete />
        		</IconButton>
					}
					>
					{item}
				</ListItem>
	    ))}
	  </List>
  </div>
)

export default TodoListComponent;
