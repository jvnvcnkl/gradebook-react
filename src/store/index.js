import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import sagas from './sagas';

import activeUserReducer from "./activeUser/slice";
import gradebooksReducer from "./gradebooks/slice";
import teachersReducer from "./teachers/slice";

const reducers = {
    activeUser: activeUserReducer,
    gradebooks: gradebooksReducer,
    teachers: teachersReducer,
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: combineReducers(reducers),
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            thunk: false,
        }),
        sagaMiddleware,
    ]
});


for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga])
}

export default store;