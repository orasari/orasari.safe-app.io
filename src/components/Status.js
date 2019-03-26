import React, { Component } from 'react';
import './../css/Safe.css';

class Status extends Component {
  render() {
    return (
      <div className='status'>
        <p>{this.props.status}</p>       
      </div>
    );
  }
}

export default Status;
