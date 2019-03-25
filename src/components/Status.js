import React, { Component } from 'react';
import './../css/Safe.css';
import { connect } from 'react-redux'

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
