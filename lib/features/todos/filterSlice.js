import { getLocalStorage, setFilterLocalStorage } from '@/utils/data-utils';

const { createSlice } = require('@reduxjs/toolkit');

const { filter } = getLocalStorage() || {};
const initialState = filter || {
    filter: 'all',
    colorSort: null,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
            setFilterLocalStorage(state);
        },
        setColorSort: (state, action) => {
            state.colorSort = action.payload;
            setFilterLocalStorage(state);
        },
    },
});

export const { setFilter, setColorSort } = filterSlice.actions;
export default filterSlice.reducer;
