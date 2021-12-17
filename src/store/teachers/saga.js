import { put, call, takeLatest } from "redux-saga/effects"

import teacherService from '../../services/TeacherService'
import { setTeachers, getTeachers } from "./slice"

function* handleGetTeachers({ payload }) {
    try {
        console.log(payload.filter)
        const teachers = yield call(teacherService.getAll, payload.filter);
        console.log(teachers)
        yield put(setTeachers(teachers));
    } catch (error) {
        console.log(error)
    }
}


export function* watchGetTeachers() {
    yield takeLatest(getTeachers.type, handleGetTeachers);
}