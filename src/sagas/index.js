// import {takeLatest, takeEvery} from "redux-saga";
import {fork, takeEvery, all} from "redux-saga/effects";
import {CHECK_MASTER_CODE} from '../actions/actionTypes'
import {checkMasterCode} from "./application/checkMasterCode";

function* watchLoadTradesRequest() {    
    yield takeEvery('CHECK_MASTER_CODE', checkMasterCode);
}

export function* sagas() {
    yield all ([
        watchLoadTradesRequest()
    ])
}