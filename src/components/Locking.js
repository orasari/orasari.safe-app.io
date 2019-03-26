import React, { Component } from 'react';
import './../css/Safe.css';

class Locking extends Component {
  render() {
    return (
      <div className="locking">
        {this.props.isUnlocked ?
          <p>UNLOCKED</p> :
          <p>LOCKED</p>
        }
      </div>
    );
  }
}

export default Locking;
