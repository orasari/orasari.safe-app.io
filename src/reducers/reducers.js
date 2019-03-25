import {SUBMIT_PASSCODE, MASTER_CODE_CONFIRMED, SERVICE_MODE, IS_LOADING, IS_VALIDATING} from '../actions/actionTypes'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_PASSCODE: 
        let unlocked = action.valid
        let status = (!action.valid && action.locking!=='LOCKING') ? 'Error' : 'Ready'
        return {...state, unlocked, status}
        break;

        case SERVICE_MODE :
        console.log('action ',action.status)
        status = action.status
        return {...state, status}
        break;

        case MASTER_CODE_CONFIRMED : 
        unlocked = action.masterCodeConfirmet ? true : false
        status = action.masterCodeConfirmet ? 'Ready' : 'Error'
        return {...state, unlocked, status}
        break;

        case IS_LOADING :
        console.log(action.loading)
        status = action.loading ? action.loading : status        
        console.log(status)
        return {...state, status}
        break;

        case IS_VALIDATING :
        status = action.validating ? 'VALIDATING' : status
        return {...state, status}
        break;

        default: return state;
    }
}

export default reducer;