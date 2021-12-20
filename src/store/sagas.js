import * as gradebooksSagas from './gradebooks/saga';
import * as activeUserSagas from './activeUser/saga';
import * as teacherSagas from './teachers/saga';

const sagas = {
    ...gradebooksSagas,
    ...activeUserSagas,
    ...teacherSagas,
}

export default sagas;