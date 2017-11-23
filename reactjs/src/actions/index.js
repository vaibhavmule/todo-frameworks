import uuidv4 from 'uuid/v4'

// constants
export const ADD_TODO = 'ADD_TODO'
export const MODIFY_TODO = 'MODIFY_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

// actions
export const addTodo = todo => {
	return {
		type: ADD_TODO,
		id: uuidv4(),
		todo,
	}
}

export const modifyTodo = todo => {
	return {
		type: MODIFY_TODO,
		todo
	}
}

export const removeTodo = id => {
	return {
		type: REMOVE_TODO,
		id
	}
}