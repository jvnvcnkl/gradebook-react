import {createSlice} from "@reduxjs/toolkit"

const middlewareActions = {
    getGradebooks() {},

}

export const gradebooksSlice = createSlice({
    name:"gradebooks",
    initialState:{
        page: {
            data: [],
            current_page: 0,
        }
    },
    reducers: {
        setGradebooks(state,action){
            state.page = action.payload
        },
        ...middlewareActions,
    },
    
});

export const { 
    getGradebooks,
    setGradebooks} = gradebooksSlice.actions;

export default gradebooksSlice.reducer ;
