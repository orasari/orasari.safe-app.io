import React, { Component } from 'react';
import '../css/HotelSafe.css';
import SafeKeyboard from '../components/SafeKeyboard'
import SafeDisplay from '../components/SafeDisplay'
import {connect} from 'react-redux'

class HotelSafe extends Component {

  render() {
    return (
      <div className='hotelSafe'>
        <SafeDisplay isIdle={this.props.isIdle}/>
        <SafeKeyboard/>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {}
}
export default connect(mapStateToProps)(HotelSafe);
