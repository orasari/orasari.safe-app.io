import React, {Component} from 'react';
import '../../css/KeyButton.css';


export default class KeyButton extends Component{
constructor(props){
  super(props)
}

render(){
  return (
    <input type='button' className='keyButton' value={this.props.keyNumber}
      onClick={()=>{this.props.onKeyClick(this.props.keyNumber)}} 
      onMouseUp={(event)=>{this.props.onDelayedCallback(event)}}
      >
           
    </input>
  );
}
}
