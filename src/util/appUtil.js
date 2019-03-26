const password = JSON.parse(localStorage.getItem('password'))
export const serialNumber = {sn: 4815162342}

export const passwordExists = () => {
    var pass = localStorage.getItem('password')
    if(pass) {
        return true;
    }else return false
}

export const servicePassEntered = (enteredPass) => {
    let validPass = '000000'
    let validan = false;
    for(let i=0; i<enteredPass.length; i++){
        if(enteredPass[i]===validPass[i]) {
            validan=true
        }else {
            validan=false
            break;
        }
    
    }
    if(validan) return true
    else return false
}

export const setPassword = (enteredPass) => { 
    localStorage.setItem('password', enteredPass.join(''));    
}

export const validatePassword = (enteredPass) =>{
    let validPass = password+''
    let validan = false;
    for(let i=0; i<enteredPass.length; i++){
        if(enteredPass[i]===validPass[i]) {
            validan=true
        }else {
            validan=false
            break;
        }
    
    }
    if(validan) return true
    else return false
}

export function handleKeyPress(event) {
    console.log(event.keyCode)
    switch(event.keyCode){
      case 49: 
      return 1
    //   break;
      case 50: 
      return 2
    //   break;
      case 51:
      return 3
    //   break;
      case 52:
      return 4
    //   break
      case 53: 
      return 5
    //   break;
      case 54: 
      return 6
    //   break;
      case 55:
      return 7
    //   break;
      case 56:
      return 8
    //   break
      case 57: 
      return 9
    //   break;
      case 48: 
      return 0
    //   break;
      case 106:
      return '*'
    //   break;
      case 76:
      return 'L'
    //   break      
      case 13:
      return 'ENTER'
    //   break
      default: 
      console.log('Not a valid key pressed')

    }
  }
