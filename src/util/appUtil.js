
export const serialNumber = {sn: 4815162342}

export const passwordExists = () => {
    let pass = localStorage.getItem('password')
    if(pass) {
        return true;
    }else return false
}

export const servicePassEntered = (enteredPass) => {
    let validPass = '000000'
    let validan = false;
    if(enteredPass.length === validPass.length) {
        for (let i = 0; i < enteredPass.length; i++) {
            if (enteredPass[i] === validPass[i]) {
                validan = true
            } else {
                validan = false
                break;
            }

        }
    }
    if(validan) return true
    else return false
}

export const setPassword = (enteredPass) => {
    if(enteredPass.length === 6) {
        localStorage.setItem('password', enteredPass.join(''));
        return true;
    }else return false;
}

export const validatePassword = (enteredPass) =>{
    let password = JSON.parse(localStorage.getItem('password'))
    let validPass = password+''
    let validan = false;
    console.log("val enteredPass",enteredPass)
    console.log("val password",validPass)
    
    console.log("password password",password)
    console.log("leng 1 ",validPass.length)
    console.log("leng 2 ",enteredPass.length)
    console.log("leng 31 ",validPass.length === enteredPass.length)
    console.log("leng 4 ",validPass.length == enteredPass.length)

    if(validPass.length === enteredPass.length) {
        for (let i = 0; i < enteredPass.length; i++) {
            if (enteredPass[i] === validPass[i]) {
                console.log("enteredPass ",enteredPass)
                console.log("validPass ",validPass)
                console.log("oba ",enteredPass[i] === validPass[i])
                validan = true
            } else {
                validan = false
                break;
            }

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

      case 50: 
      return 2

      case 51:
      return 3

      case 52:
      return 4

      case 53: 
      return 5

      case 54: 
      return 6
      
      case 55:
      return 7
      
      case 56:
      return 8
      
      case 57: 
      return 9
      
      case 48: 
      return 0
      
      case 106:
      return '*'
      
      case 76:
      return 'L'
          
      case 13:
      return 'ENTER'
      
      default: 
      console.log('Not a valid key pressed')

    }
  }
