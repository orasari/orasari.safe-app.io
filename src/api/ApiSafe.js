import {
    DEFAULT_REST_PARAMS_POST,
    handleApiFetchPOST
} from '../util/appUtil'

const CHECK_MASTER_CODE = 'url'

export default class ApiSafe {
    static checkMasterCode(masterCode){
        console.log("Api call")
        // let request = {
        //     ...DEFAULT_REST_PARAMS_POST,
        //     body: JSON.stringify({
        //         masterCode
        //     })
        // }
        // return handleApiFetchPOST(CHECK_MASTER_CODE, request)
    }
}