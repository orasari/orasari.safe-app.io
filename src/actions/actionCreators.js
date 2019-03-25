import {SUBMIT_PASSCODE, CHECK_MASTER_CODE, SERVICE_MODE, IS_LOADING, IS_VALIDATING} from './actionTypes'

export function submitPasscodeAction(valid, locking) {
    return {
      type: SUBMIT_PASSCODE,
      valid,
      locking
    }
  }
export function checkMasterCode(masterCode) {
    console.log("Dispatch")
    return {
      type: CHECK_MASTER_CODE,
        masterCode
    }
  }

export function enterServiceMode(status) {
    return {
      type: SERVICE_MODE,
      status
    }
  }

  export function isLoading(loading){
    return {
      type: IS_LOADING,
      loading
    }
  }