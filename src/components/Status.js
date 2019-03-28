import React from 'react';

export default function Status (props) { 
  return (
    <div className='status'>
      <p>{props.status}</p>       
    </div>
  );
}
