import {takeEvery, all} from "redux-saga/effects";
import {checkMasterCode} from "./application/checkMasterCode";

function* watchLoadTradesRequest() {    
    yield takeEvery('CHECK_MASTER_CODE', checkMasterCode);
}

export function* sagas() {
    yield all ([
        watchLoadTradesRequest()
    ])
}