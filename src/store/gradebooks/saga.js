import { put, call, takeLatest } from "redux-saga/effects"

import gradebookService from '../../services/GradebookService'
import { setGradebooks, getGradebooks, appendGradebooks } from "./slice"

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


export function* watchGetGradebooks() {
    yield takeLatest(getGradebooks.type, handleGetGradebooks);
}