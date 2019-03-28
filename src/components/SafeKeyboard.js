import React, { Component } from 'react';
import KeyButton from './buttons/KeyButton'
import {validatePassword, passwordExists, setPassword, servicePassEntered, serialNumber} from '../util/appUtil'
import {numbers} from '../util/constantsUtil'
import _ from 'lodash';
import {connect} from 'react-redux'
import {submitPasscodeAction, checkMasterCode, enterServiceMode, isLoading, toggleLock} from '../actions/actionCreators'
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
      // this.props.dispatch(isValidating('Validation'))
      this.props.dispatch(enterServiceMode('Service'))
      this.setState({passcode: []})
      return;
    } 
    else if(this.props.status !== 'Service') {
      this.props.dispatch(isLoading('Unlocking'))
    }

    setTimeout(()=>{
      if(this.props.status === 'Service'){    
        this.props.dispatch(checkMasterCode(this.state.passcode, serialNumber))
        this.setState({passcode: []}) 
      }
      else{
        if(this.state.passcode.length>0){   
          if(servicePassEntered(this.state.passcode)){
              this.props.dispatch(enterServiceMode('Service'))
          }else{
              if(!passwordExists()){
                if(setPassword(this.state.passcode)){
                    setTimeout((this.props.dispatch(toggleLock(true, 'Ready'))), 3000)
                }else {
                    setTimeout((this.props.dispatch(toggleLock(false, 'Error'))), 3000)
                }
              }else{
                if(validatePassword(this.state.passcode)){
                  this.props.dispatch(submitPasscodeAction(true))
                }else {
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
    if(keyValue==='L' && this.props.status !== 'Service'){      
      this.props.dispatch(isLoading('Locking'))
      setTimeout(()=>{this.props.dispatch(toggleLock(false, 'Ready'))}, 3000)
      this.setState({passcode: []})
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
