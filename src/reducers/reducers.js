import {SUBMIT_PASSCODE, MASTER_CODE_CONFIRMED, SERVICE_MODE} from '../actions/actionTypes'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_PASSCODE: 
        let unlocked = action.valid
        return {...state, unlocked}
        break;
        case SERVICE_MODE :
        console.log('action ',action.status)
        let status = action.status
        return {...state, status}
        break;

        case MASTER_CODE_CONFIRMED : 
        unlocked = action.masterCodeConfirmet ? true : false
        status = action.masterCodeConfirmet ? 'Ready' : 'Error'
        return {...state, unlocked, status}
        break
        // case 'CHECK_PASSCODE_VALIDITY':
        // let passcode = action.passcode

        // case addPropertyToAppStore :
        // let propertyName = action.propertyName

        default: return state;
    }
}

export default reducer;