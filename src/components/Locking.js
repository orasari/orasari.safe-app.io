import React from 'react';

export default function Locking (props) {
  
  return (
    <div className="locking">
      {props.isUnlocked ?
        <p>UNLOCKED</p> :
        <p>LOCKED</p>
      }
    </div>
  );  
}