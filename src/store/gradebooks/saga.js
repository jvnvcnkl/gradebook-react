import { put, call, takeLatest } from "redux-saga/effects"

import gradebookService from '../../services/GradebookService'
import { getGradebooks,
    createGradebook,
    editGradebook,
    deleteGradebook,
    setGradebooks,
    appendGradebooks,
    addGradebook,
    updateGradebook,
    deleteGradebookSuccess, } from "./slice"

function* handleGetGradebooks({ payload }) {
    try {
        const gradebooks = yield call(gradebookService.getAll, payload.page, payload.filter);

        if (!payload.page || payload.page == 1) {
            yield put(setGradebooks(gradebooks));
        } else {

            yield put(appendGradebooks(gradebooks))
        }

    } catch (error) {
        console.log(error)
    }
}

function* handleCreateGradebook({payload}){
    try {
        const newGradebook = yield call(gradebookService.add,payload.data);

        yield put(addGradebook(newGradebook));

    } catch (error) {
        console.log(error)
    }
}

function* handleEditGradebook({payload}){
    try {
        const gradebook = yield call(gradebookService,payload.id,payload.data);

        yield put(updateGradebook(gradebook));
    } catch (error) {
        console.log(error)
    }
}

function* handleDeleteGradebook({payload}){
    try {
        yield call(gradebookService.delete, payload);
        yield put(deleteGradebookSuccess(payload));

    } catch (error) {
        console.log(error)
    }
}


export function* watchGetGradebooks() {
    yield takeLatest(getGradebooks.type, handleGetGradebooks);
}
export function* watchCreateGradebook() {
    yield takeLatest(createGradebook.type, handleCreateGradebook);
}
export function* watchUpdateGradebook() {
    yield takeLatest(updateGradebook.type, handleEditGradebook);
}
export function* watchDeleteGradebook() {
    yield takeLatest(deleteGradebook.type, handleDeleteGradebook);
}