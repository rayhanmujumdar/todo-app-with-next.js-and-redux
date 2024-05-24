import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './features/todos/filterSlice.js';
import todoReducer from './features/todos/todoSlice.js';

export const makeStore = () => {
    return configureStore({
        reducer: {
            todo: todoReducer,
            filter: filterReducer,
        },
    });
};
