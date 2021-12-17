import { createSlice } from "@reduxjs/toolkit"

const middlewareActions = {
    getGradebooks() { },
    createGradebook() {},
    editGradebook(){},
    deleteGradebook(){},

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
        addGradebook(state,action){
            state.page.data.push(action.payload)
        },
        updateGradebook(state,action){
            let gradebook=state.page.data.find(
                (gradebook)=> gradebook.id == action.payload.id
            );
            Object.assign(gradebook,action.payload);
        },
        deleteGradebookSuccess(state,action){
            state.page.data= state.paga.data.filter(
                (gradebook) => gradebook.id !== action.payload
            );
        },
        ...middlewareActions,
    },

});

export const {
    getGradebooks,
    createGradebook,
    editGradebook,
    deleteGradebook,
    setGradebooks,
    appendGradebooks,
    addGradebook,
    updateGradebook,
    deleteGradebookSuccess,
} = gradebooksSlice.actions;

export default gradebooksSlice.reducer;
