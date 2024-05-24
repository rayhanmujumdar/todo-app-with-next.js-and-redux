import { getLocalStorage, setTodosLocalStorage } from '@/utils/data-utils';
import { createSlice } from '@reduxjs/toolkit';

const { todos } = getLocalStorage() || {};
const initialState = todos || {
    todos: [
        {
            todoText: 'Learn Redux Basics',
            completed: false,
            id: crypto.randomUUID(),
            color: 'yellow',
        },
    ],
    inCompleted: 0,
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, { payload }) => {
            state.todos.push({
                todoText: payload.todoText,
                id: crypto.randomUUID(),
                completed: false,
                color: '',
            });
            setTodosLocalStorage(state);
        },
        updateTodo: (state, { payload }) => {
            const findIndex = state.todos.findIndex(
                state => state.id === payload.todoId
            );
            state.todos[findIndex] = payload.updateTodo;
            setTodosLocalStorage(state);
        },
        deleteTodo: (state, { payload }) => {
            state.todos = state.todos.filter(
                todo => todo.id !== payload.todoId
            );
            setTodosLocalStorage(state);
        },
        clearCompleted: state => {
            state.todos = state.todos.filter(todo => !todo.completed);
            setTodosLocalStorage(state);
        },
        clearAll: state => {
            state.todos = [];
            setTodosLocalStorage(state);
        },
    },
});

export const {
    addTodo,
    updateTodo,
    deleteTodo,
    clearAll,
    clearCompleted,
    remainingTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
