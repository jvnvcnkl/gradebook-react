import { createSlice } from "@reduxjs/toolkit"

const middlewareActions = {
    getTeachers() { },

}

export const teachersSlice = createSlice({
    name: "teachers",
    initialState: {
        data: [
            {
                id: "",
                email: "",
            }
        ],
    },
    reducers: {
        setTeachers(state, action) {
            state.data = action.payload
        },
        ...middlewareActions,
    },

});

export const {
    getTeachers,
    setTeachers } = teachersSlice.actions;

export default teachersSlice.reducer;
