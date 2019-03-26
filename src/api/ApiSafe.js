import axios from 'axios';
import {serialNumber} from '../util/appUtil'

export default class ApiSafe {
    static checkMasterCode(masterCode){
        axios.get('https://9w4qucosgf.execute-api.eu-central-1.amazonaws.com/default/CR-JS_team_M02a?code=456R987L0123')
        .then(res => {
            console.log("Response: ",res.data)
            if(serialNumber === res.data){
                console.log('moze')
            }
        }

        )
    }
}
