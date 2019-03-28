import {SUBMIT_PASSCODE, CHECK_MASTER_CODE, SERVICE_MODE, IS_LOADING, IS_VALIDATING, TOGGLE_LOCK, SET_SERIAL_NUMBER} from './actionTypes'

export function submitPasscodeAction(valid, locking) {
    return {
      type: SUBMIT_PASSCODE,
      valid,
      locking
    }
  }

export function checkMasterCode(masterCode, serialNumber) {
    return {
      type: CHECK_MASTER_CODE,
        masterCode,
        serialNumber
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
  
export function toggleLock(valid, status){
  return {
    type: TOGGLE_LOCK,
    valid,
    status
  }
}

export function isValidating(validating){
  return {
    type: IS_VALIDATING,
    validating
  }
} 

export function setSerialNumber(){
  return {
    type: SET_SERIAL_NUMBER
  }
}