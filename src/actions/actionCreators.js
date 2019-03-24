export function submitPasscodeAction(valid) {
    return {
      type: 'SUBMIT_PASSCODE',
      valid
    }
  }