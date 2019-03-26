import React, { Component } from 'react';
import '../css/HotelSafe.css';
import SafeKeyboard from '../components/SafeKeyboard'
import SafeDisplay from '../components/SafeDisplay'
import {connect} from 'react-redux'
import {serialNumber} from '../util/appUtil'
import {setSerialNumber} from '../actions/actionCreators'

class HotelSafe extends Component {
  // componentDidMount(){
  //   this.props.dispatch(setSerialNumber())
  // }

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

const mapStateToProps = () => {
  return {}
}
export default connect(mapStateToProps)(HotelSafe);
