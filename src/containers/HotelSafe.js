import React, { Component } from 'react';
import SafeKeyboard from '../components/SafeKeyboard'
import SafeDisplay from '../components/SafeDisplay'
import {serialNumber} from '../util/appUtil'

export default class HotelSafe extends Component {

  render() {
    return (
      <div className='hotelSafe'>
        <SafeDisplay isIdle={this.props.isIdle}/>
        <SafeKeyboard/>
        <div className='serialNumber'>
          {"S/N: "+serialNumber.sn}
        </div>
      </div>
    );
  }
}

