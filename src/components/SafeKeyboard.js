import React, { Component } from 'react';
import './../css/Safe.css';
import KeyButton from './buttons/KeyButton'
import {validatePassword, passwordExists, setPassword, servicePassEntered} from '../util/appUtil'
import {numbers} from '../util/constantsUtil'
import _ from 'lodash';
import {connect} from 'react-redux'
import {submitPasscodeAction, checkMasterCode, enterServiceMode} from '../actions/actionCreators'
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
    if(this.props.status === 'Service'){
      console.log("u service mode je")      
      this.props.dispatch(checkMasterCode(this.state.passcode))
    }else{    
    if(servicePassEntered(this.state.passcode)){
        console.log("service")
        this.props.dispatch(enterServiceMode('Service'))
    }else{
    if(!passwordExists()){
      setPassword(this.state.passcode)
    }else{
    if(validatePassword(this.state.passcode)){
      console.log("validan ")
      this.props.dispatch(submitPasscodeAction(true))
    }else {
      console.log("validan NOT")
      this.props.dispatch(submitPasscodeAction(false))
    }
  }}}
    this.setState({passcode: []})
  }

  onKeyClick (keyValue){
    if(keyValue==='L'){
      this.props.dispatch(submitPasscodeAction(false))
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
