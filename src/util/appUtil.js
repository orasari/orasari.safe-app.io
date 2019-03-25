//Keyboard number values
export const DEFAULT_REST_PARAMS_POST = {method: 'POST',
// credentials: 'include',
// mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
}

export const REST_ROOT_ENDPOINT = 'http://localhost/3000'

export const numbers = ['1','2','3','4','5','6','7','8','9','*','0','L']

const password = '290793'

export const validatePassword = (enteredPass) =>{
    let validPass = password.split('')
    let validan = false;
    for(let i=0; i<enteredPass.length; i++){
        if(enteredPass[i]==validPass[i]) {
            validan=true
        }else {
            validan=false
            break;
        }
    
    }
    if(validan) return true
    else return false
}

export const handleApiFetchPOST =
    (restEndpoint, postRequest) => {
        const nullifiedPostRequest = nullifyPOSTRequestValues(postRequest)
        return apiFetchPOSTAction(restEndpoint, nullifiedPostRequest)
    }

const apiFetchPOSTAction =
    (restEndpoint, postRequest) => fetch(REST_ROOT_ENDPOINT + restEndpoint, postRequest
    ).then(
        (response) =>
            handleServerResponse(response)
    ).then((responseJson) =>
        resolveStatusCode(responseJson)
    ).catch((error) => {
        console.error(error)
        throw error
    })


const nullifyPOSTRequestValues = (postRequest) => {
    const requestValuesObj = JSON.parse(postRequest.body)
    let requestValues = JSON.stringify(requestValuesObj, replacer)
    let request = {...postRequest, body: requestValues}
    return {...postRequest, body: requestValues}
}

const handleServerResponse =
    (response) => {

        if (response.status === 403) {
            // redirect, as it has some dellay between redirection we will continue with return
            // if contains root public, will redirecto to public else private login


        } else if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('ERROR_CODE_GENERIC')
        }
    }


const resolveStatusCode =
    (responseJson) => {
        if (responseJson.status) {
            switch (responseJson.status.code) {
                case 0: return responseJson
                default: throw new Error(responseJson.status.key)
            }
        }
        throw new Error('ERROR_CODE_GENERIC')
    }

function replacer(key, value) {
    // Filtering out properties
    if (typeof value === 'string' && value.trim().length == 0) {
        return undefined
    }
    return value
}