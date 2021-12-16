import {createSlice} from "@reduxjs/toolkit"

const middlewareActions = {
    getTeachers() {},

}

export const teachersSlice = createSlice({
    name:"gradebooks",
    initialState:{
        data: [

        ],
    },
    reducers: {
        setTeachers(state,action){
            state.data = action.payload
        },
        ...middlewareActions,
    },
    
});

export const { 
    getTeachers,
    setTeachers} = teachersSlice.actions;

export default teachersSlice.reducer ;
