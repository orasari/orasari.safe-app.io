import {REST_ROOT_ENDPOINT} from './constantsUtil'
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

