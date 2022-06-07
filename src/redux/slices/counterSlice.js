import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo (state, name) {
            state.todos.push(name.payload)
        },
        removeTodo (state, index) {
            const newTodo = state.todos.splice(index.payload, 1)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = TodoSlice.actions

export default TodoSlice.reducer