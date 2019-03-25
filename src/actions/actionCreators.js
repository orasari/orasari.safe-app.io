import {SUBMIT_PASSCODE, CHECK_MASTER_CODE} from './actionTypes'

export function submitPasscodeAction(valid) {
    return {
      type: SUBMIT_PASSCODE,
      valid
    }
  }
export function checkMasterCode(masterCode) {
    console.log("Dispatch")
    return {
      type: CHECK_MASTER_CODE,
        masterCode
    }
  }