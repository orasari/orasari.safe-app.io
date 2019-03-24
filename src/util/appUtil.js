//Keyboard number values
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