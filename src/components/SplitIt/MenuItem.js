import React, { Component } from 'react';

const MenuItem = (props) => {
  return (
    <div className="menu-item">
      <h2 className="item-name">{props.item}</h2>
      <div className="item-price">{props.price} </div>
    </div>
  )
}
 export default MenuItem;
