import React, { Component } from 'react';
import './App.css';
import HotelSafe from './containers/HotelSafe';
import {Provider} from 'react-redux'
import {store} from './store'
import IdleTimer from 'react-idle-timer'

class App extends Component {
  constructor(props){
    super(props)
    this.idleTimer = null
    this.onAction = this._onAction.bind(this)
    this.onActive = this._onActive.bind(this)
    this.onIdle = this._onIdle.bind(this)
    this.state={
      isAppIdle: false
    }
  }

  _onAction(e) {}
 
  _onActive(e) {
    this.setState({isAppIdle: false})
  }
 
  _onIdle(e) {
    this.setState({isAppIdle: true})
  }

  render() {
    const isIdle = this.state.isAppIdle ? <div className="idle"></div> : <div></div>
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
          <HotelSafe/>
          {isIdle}
          {/* <div className="idle"></div> */}
        </Provider>        
      </div>
    );
  }
}

export default App;
