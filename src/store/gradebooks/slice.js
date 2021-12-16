import { createSlice } from "@reduxjs/toolkit"

const middlewareActions = {
    getGradebooks() { },

}

export const gradebooksSlice = createSlice({
    name: "gradebooks",
    initialState: {
        page: {
            data: [],
            current_page: 0,
        }
    },
    reducers: {
        setGradebooks(state, action) {
            state.page = action.payload
        },
        appendGradebooks(state, action) {
            // state.page = action.payload
            state.page = {
                ...action.payload,
                data: [...state.page.data, ...action.payload.data]
            }
        },
        ...middlewareActions,
    },

});

export const {
    getGradebooks,
    setGradebooks,
    appendGradebooks
} = gradebooksSlice.actions;

export default gradebooksSlice.reducer;
