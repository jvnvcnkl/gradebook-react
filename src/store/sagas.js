import * as gradebooksSagas from './gradebooks/saga';
import * as activeUserSagas from './activeUser/saga';
const sagas = {
    ...gradebooksSagas,
    ...activeUserSagas,
}

export default sagas;