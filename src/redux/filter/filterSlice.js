import { createSlice } from '@reduxjs/toolkit';

const filter = "";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filter,
    reducers: {
        filterContacts(state, action) {
            return action.payload
        }
    }
})

export const {filterContacts} = filterSlice.actions