import {put} from 'redux-saga/effects'
import {MASTER_CODE_CONFIRMED} from '../../actions/actionTypes'
import axios from 'axios'
const myEndPoint = 'https://9w4qucosgf.execute-api.eu-central-1.amazonaws.com/default/CR-JS_team_M02a'

export function* checkMasterCode(action){
    
    let responseApi = yield checkMasterCodeApi(action.masterCode)

    if(responseApi.sn === action.serialNumber){
        //Master code was confirmed and action was dispatched to change the display state
        yield put({type: MASTER_CODE_CONFIRMED, masterCodeValid: true})
    }else{
        //Master code not valid and action was dispatched to change the display state
        yield put({type: MASTER_CODE_CONFIRMED, masterCodeValid: false})
    }

    async function checkMasterCodeApi(){
        let response = await axios.get(myEndPoint+'?code='+action.masterCode)
        if(response.status === 200){   
        // console.log("Response ",response)
        }else{
            throw new Error();
        }
        return response.data
    }

}
