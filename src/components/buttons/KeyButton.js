import React from 'react';

export default function KeyButton(props){
  return (
    <input 
      type='button' 
      className='keyButton'
      value={props.keyNumber}
      onClick={()=>{props.onKeyClick(props.keyNumber)}} 
      onMouseUp={(event)=>{props.onDelayedCallback(event)}}>           
    </input>
  );
}

