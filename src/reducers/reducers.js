import {SUBMIT_PASSCODE, MASTER_CODE_CONFIRMED, SERVICE_MODE, IS_LOADING, TOGGLE_LOCK, IS_VALIDATING} from '../actions/actionTypes'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_PASSCODE: 
        let unlocked = action.valid
        let status = (!action.valid && action.locking!=='LOCKING') ? 'Error' : 'Ready'
        return {...state, unlocked, status}

        case SERVICE_MODE :
        status = action.status
        return {...state, status}

        case TOGGLE_LOCK:
        unlocked = action.valid
        status = action.status
        return {...state, unlocked, status}
  
        case MASTER_CODE_CONFIRMED : 
        unlocked = action.masterCodeValid ? true : false
        status = action.masterCodeValid ? 'Ready' : 'Error'
        return {...state, unlocked, status}

        case IS_LOADING :
        status = action.loading
        return {...state, status}

        case IS_VALIDATING :
        status = action.validating ? 'Validating' : status
        return {...state, status}

        default: return state;
    }
}

export default reducer;