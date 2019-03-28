import React, { Component } from 'react';
import { connect } from 'react-redux'
import { store } from '../store'
import Locking from './Locking'
import Status from './Status'

class SafeDisplay extends Component {
  render() {
    const {isIdle, isUnlocked, status} = this.props
    let classes = isIdle ? 'safeDisplay backlightIdle' : 'safeDisplay'

    return (
      <div className={classes}>
        <Locking isUnlocked={isUnlocked}/>
        <Status status={status}/>
      </div>
    );
  }
}

function mapStateToProps() {
  let myStore = store.getState();
  return {
    isUnlocked: myStore.unlocked,
    status: myStore.status ? myStore.status : 'Ready'
  }
}

export default connect(mapStateToProps)(SafeDisplay);
