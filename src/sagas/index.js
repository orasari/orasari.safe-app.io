// import {takeLatest, takeEvery} from "redux-saga";
import {fork, takeEvery} from "redux-saga/effects";
import {CHECK_MASTER_CODE} from '../actions/actionTypes'
import {checkMasterCode} from "./application/checkMasterCode";
// main saga generators
export function* sagas() {
    console.log("saga")
    yield [
        //error fields sagas
        fork(takeEvery, CHECK_MASTER_CODE, checkMasterCode)
    ];
}
