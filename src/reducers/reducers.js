import {SUBMIT_PASSCODE, MASTER_CODE_CONFIRMED, SERVICE_MODE, IS_LOADING, TOGGLE_LOCK, IS_VALIDATING} from '../actions/actionTypes'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_PASSCODE: 
        let unlocked = action.valid
        let status = (!action.valid && action.locking!=='LOCKING') ? 'Error' : 'Ready'
        return {...state, unlocked, status}
        // break;

        case SERVICE_MODE :
        console.log('action ',action.status)
        status = action.status
        return {...state, status}
        // break;

        case TOGGLE_LOCK:
        unlocked = action.valid
        status = action.status
        return {...state, unlocked, status}
        // break;
  
        case MASTER_CODE_CONFIRMED : 
        console.log("MASTER_CODE_CONFIRMEDMASTER_CODE_CONFIRMEDMASTER_CODE_CONFIRMED")
        unlocked = action.masterCodeConfirmet ? true : false
        status = action.masterCodeConfirmet ? 'Ready' : 'Error'
        return {...state, unlocked, status}
        // break;

        case IS_LOADING :
        console.log(action.loading)
        status = action.loading      
        console.log(status)
        return {...state, status}
        // break;

        case IS_VALIDATING :
        console.log("validating ", action.validating)
        status = action.validating ? 'Validating' : status
        return {...state, status}
        // break;

        default: return state;
    }
}

export default reducer;