import React, { useState } from 'react';

const LodgeHeader = (props) => {

  console.log(props.data, 'from lodgeheader');
return (
  <div>
    <div className='LodgeType and Host'>
    {props.data.type} by {props.data.hostname}
    </div>
    <div>
      <span>{props.data.max_guests} guests</span>
      <span> · </span>
      <span>{props.data.bedroom} bedrooms</span>
      <span> · </span>
      <span>{props.data.beds} beds</span>
      <span> · </span>
      <span>{props.data.bath} bath</span>
    </div>
    <div className='hostimage'>
            <img src=${props.data.hostimg}></img>
    </div>
  </div>
)
};

export default LodgeHeader;