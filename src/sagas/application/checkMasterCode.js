import ApiSafe from "../../api/ApiSafe";
import {call, put} from 'redux-saga/effects'
import {MASTER_CODE_CONFIRMED, SET_SERIAL_NUMBER} from '../../actions/actionTypes'
import axios from 'axios'
export function* checkMasterCode(action){


    let serialNumber = yield setSetialNumber()
    console.log("serialNumber ", serialNumber)

    async function setSetialNumber(){
        let response = await axios.get('https://9w4qucosgf.execute-api.eu-central-1.amazonaws.com/default/CR-JS_team_M02a?code=456R987L0123')
        if(response.status == 200){
            console.log(response.status)
        }      
        console.log("Res po nse ")
        return response.data
    }

}

export function* setSerialNumberSaga(action){

    let serialNumber = yield setSetialNumber()
    console.log("serialNumber ", serialNumber)
    yield put({type: SET_SERIAL_NUMBER, serialNumber: serialNumber})
    

    async function setSetialNumber(){
        let response = await axios.get('https://9w4qucosgf.execute-api.eu-central-1.amazonaws.com/default/CR-JS_team_M02a?code=456R987L0123')
        if(response.status == 200){
            console.log(response.status)
        }      
        console.log("Res po nse ")
        return response.data
    }

}