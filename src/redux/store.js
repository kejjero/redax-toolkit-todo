import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/counterSlice'

export const store = configureStore({
    reducer: {
        todoReducer,
    },
})
