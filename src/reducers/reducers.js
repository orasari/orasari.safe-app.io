const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'SUBMIT_PASSCODE': 
        let unlocked = action.valid
        return {...state, unlocked}
        break;
        // case 'CHECK_PASSCODE_VALIDITY':
        // let passcode = action.passcode

        default: return state;
    }
}

export default reducer;