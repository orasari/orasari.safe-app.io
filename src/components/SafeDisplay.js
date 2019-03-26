import React, { Component } from 'react';
import './../css/Safe.css';
import { connect } from 'react-redux'
import { store } from '../store'
import Locking from './Locking'
import Status from './Status'

class SafeDisplay extends Component {
  render() {
    let classes = this.props.isIdle ? 'safeDisplay backlightIdle' : 'safeDisplay'
    console.log(this.props.status)
    return (
      <div className={classes}>
        <Locking isUnlocked={this.props.isUnlocked}/>
        <Status status={this.props.status}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let myStore = store.getState();
  return {
    isUnlocked: myStore.unlocked,
    status: myStore.status ? myStore.status : 'Ready'
  }
}

export default connect(mapStateToProps)(SafeDisplay);
