import React, { Component } from 'react';
import './css/main.css';
import HotelSafe from './containers/HotelSafe';
import {Provider} from 'react-redux'
import {store} from './store'
import IdleTimer from 'react-idle-timer'
import {validatePassword, passwordExists, setPassword, servicePassEntered, handleKeyPress} from './util/appUtil'

class App extends Component {
  constructor(props){
    super(props)
    this.idleTimer = null
    this.onAction = this._onAction.bind(this)
    this.onActive = this._onActive.bind(this)
    this.onIdle = this._onIdle.bind(this)    
    this.onKeyClick = this.onKeyClick.bind(this)
    this.submitPasscode = this.submitPasscode.bind(this)
    this.state={
      isAppIdle: false,
      passcode: []
    }
  }

  _onAction(e) {}
 
  _onActive(e) {
    this.setState({isAppIdle: false})
  }
 
  _onIdle(e) {
    this.setState({isAppIdle: true})
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyClick);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyClick);
  }

  onKeyClick (event){
    let keyValue = handleKeyPress(event)
    if(keyValue==='ENTER'){
      this.submitPasscode(this.state.passcode, 'nbt')
    }else
    this.setState({passcode: [...this.state.passcode, keyValue]})
  }

  submitPasscode(){
  
    if(servicePassEntered(this.state.passcode)){
        // this.props.dispatch(enterServiceMode('Service'))
    }else{
    if(!passwordExists()){
      setPassword(this.state.passcode)
    }else{
    if(validatePassword(this.state.passcode)){
      // this.props.dispatch(submitPasscodeAction(true))
    }else {
      // this.props.dispatch(submitPasscodeAction(false))
    }
  }}
    this.setState({passcode: []})
  }

 
  render() {
    return (
      <div className="application">
        <IdleTimer
            ref={ref => { this.idleTimer = ref }}
            element={document}
            onActive={this.onActive}
            onIdle={this.onIdle}
            onAction={this.onAction}
            debounce={250}
            timeout={5000} />
        <Provider store={store}>
          <HotelSafe isIdle={this.state.isAppIdle}/>
        </Provider>        
      </div>
    );
  }
}

export default App;
