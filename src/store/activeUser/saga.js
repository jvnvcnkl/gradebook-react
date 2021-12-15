import { takeLatest,put, call } from "redux-saga/effects";
import authService from "../../services/AuthService";
import {
    setActiveUser,
    setToken,
    login,
    register,
    logout,
    getActiveUser,
  } from "./slice";

  function* handleLogin(action){
      try {
          const data = yield call(authService.login, action.payload);
          localStorage.setItem("token",data.token);

          yield put(setActiveUser(data.user));
          yield put(setToken(data.token));
      } catch (error) {
          console.log(error)
      }
  }

  
function* handleRegister({payload}) {
    try {
        const data = yield call(authService.register,payload);
        localStorage.setItem("token",data.token);

        yield put(setActiveUser(data.user));
        yield put(setToken(data.token));
    } catch (error) {
      console.log(error)
    }
}

function* handleLogout(){
    try {
        yield call(authService.logout);
        localStorage.removeItem("token");

        yield put(setActiveUser(null));
        yield put(setToken(null));
    } catch (error) {
        console.log(error)
    }
}

function* handleGetActiveUser(){
    try {  
        const activeUser = yield call(authService.getActiveUser);
        yield put(setActiveUser(activeUser));
        
    } catch (error) {
        console.log(error)
    }
}


export function* watchLogin(){
    yield takeLatest(login.type, handleLogin);
}
export function* watchRegister(){
    yield takeLatest(register.type, handleRegister);
}
export function* watchLogout(){
    yield takeLatest(logout.type, handleLogout);
}
export function* watchGetActiveUser(){
    yield takeLatest(getActiveUser.type, handleGetActiveUser);
}
