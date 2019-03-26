import React, { Component } from 'react';
import './../css/Safe.css';
import KeyButton from './buttons/KeyButton'
import {validatePassword, passwordExists, setPassword, servicePassEntered} from '../util/appUtil'
import {numbers} from '../util/constantsUtil'
import _ from 'lodash';
import {connect} from 'react-redux'
import {submitPasscodeAction, checkMasterCode, enterServiceMode, isLoading, isValidating, toggleLock} from '../actions/actionCreators'
import { store } from '../store'

class SafeKeyboard extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      passcode: []
    }
    this.onKeyClick = this.onKeyClick.bind(this)
    this.onDelayedCallback = this.onDelayedCallback.bind(this)
    this.delayedCallback = _.debounce(this.submitPasscode, 2000)
    this.submitPasscode = this.submitPasscode.bind(this)
  }

 
  onDelayedCallback (event){
      event.persist()
      this.delayedCallback(event)
  }

  submitPasscode(){
    if(this.state.passcode && this.state.passcode.length>0){
    
    //If it is in service mode, dispatch validating
    if(servicePassEntered(this.state.passcode)){
      console.log("u service mode je")      
      // this.props.dispatch(isValidating('Validation'))
      this.props.dispatch(enterServiceMode('Service'))
      this.setState({passcode: []})
      return;
    } else if(this.props.status !== 'Service') {
      this.props.dispatch(isLoading('Unlocking'))
    }


    setTimeout(()=>{
      console.log("usao u set timeout")
      if(this.props.status === 'Service'){
        console.log("u service mode je ddd")      
        this.props.dispatch(checkMasterCode(this.state.passcode))
      }
      else{
          if(this.state.passcode.length>0){   
            if(servicePassEntered(this.state.passcode)){
                console.log("service")
                this.props.dispatch(enterServiceMode('Service'))
            }
            else{
                if(!passwordExists()){
                  setPassword(this.state.passcode)
                  setTimeout((this.props.dispatch(toggleLock(true, 'Ready'))), 3000)
                }else{
                  if(validatePassword(this.state.passcode)){
                    console.log("validan ")
                    this.props.dispatch(submitPasscodeAction(true))
                  }else {
                    console.log("validan NOT")
                    this.props.dispatch(submitPasscodeAction(false))
                  }
                }
            }
         }
      }
      this.setState({passcode: []})   
    }, 3000)}
  }

  onKeyClick (keyValue){
    if(keyValue==='L'){      
      this.props.dispatch(isLoading('Locking'))
      setTimeout((this.props.dispatch(toggleLock(false, 'Ready'))), 3000)
    }else
    this.setState({passcode: [...this.state.passcode, keyValue]})
  }

  render() {

    const buttons = numbers.map((number, index) => 
      <KeyButton 
        key={index} 
        keyNumber={number} 
        onKeyClick={this.onKeyClick}
        onDelayedCallback={this.onDelayedCallback}
        />
        )

    return (
      <div className='safeKeyboard'>
        {buttons}
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  let myStore = store.getState();
  return {
    status: myStore.status ? myStore.status : 'Ready'
  }
}
export default connect(mapStateToProps)(SafeKeyboard);
