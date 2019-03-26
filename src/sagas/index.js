// import {takeLatest, takeEvery} from "redux-saga";
import {takeEvery, all} from "redux-saga/effects";
// import {CHECK_MASTER_CODE} from '../actions/actionTypes'
import {checkMasterCode, setSerialNumberSaga} from "./application/checkMasterCode";

function* watchLoadTradesRequest() {    
    yield takeEvery('CHECK_MASTER_CODE', checkMasterCode);
    yield takeEvery('SET_SERIAL_NUMBER', setSerialNumberSaga);
}

export function* sagas() {
    yield all ([
        watchLoadTradesRequest()
    ])
}