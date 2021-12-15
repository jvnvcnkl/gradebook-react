import {put, call,takeLatest} from "redux-saga/effects"

import gradebookService from '../../services/GradebookService'
import { setGradebooks,getGradebooks } from "./slice"

function* handleGetGradebooks(){
    try {
        const gradebooks = yield call(gradebookService.getAll);
        yield put(setGradebooks(gradebooks));
    } catch (error) {
        console.log(error)
    }
}


export function* watchGetGradebooks(){
    yield takeLatest(getGradebooks.type,handleGetGradebooks);
}