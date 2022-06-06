import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, todo) => {
            state.todos.push(todo.payload)
        },
        removeTodo: (state, name) => {
            state.todos.filter((todo) => todo !== name.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = TodoSlice.actions

export default TodoSlice.reducer