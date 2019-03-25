import ApiSafe from "../../api/ApiSafe";
import {call, put} from 'redux-saga/effects'
import {MASTER_CODE_CONFIRMED} from '../../actions/actionTypes'

export function* checkMasterCode(action){
    // console.log("saga", action)
    let masterCode = action.masterCode.join('')

    const response = yield call(ApiSafe.checkMasterCode, masterCode)

    if(response && !response.success){
        yield put({type: MASTER_CODE_CONFIRMED, masterCodeConfirmet: true})
    }else{
        yield put({type: MASTER_CODE_CONFIRMED, masterCodeConfirmet: false})
    }

}
