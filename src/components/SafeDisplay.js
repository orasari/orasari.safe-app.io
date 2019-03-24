import React, { Component } from 'react';
import './../css/Safe.css';
import { connect } from 'react-redux'
import { store } from '../store'

class SafeDisplay extends Component {
  render() {
    console.log(store.getState())
    return (
      <div className='safeDisplay'>
        {this.props.isUnlocked ?
          <p>UNLOCKED</p> :
          <p>LOCKED</p>
        }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let myStore = store.getState();
  return {
    isUnlocked: myStore.unlocked
  }
}

export default connect(mapStateToProps)(SafeDisplay);
