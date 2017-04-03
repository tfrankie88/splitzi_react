import React, { Component } from 'react';
import MenuItem from './MenuItem';

const MenuList = (props) => {
  const menu = props.menu.map((menuItem) => {
    console.log('this is menuItem', menuItem)
    return (
      <MenuItem
        key={menuItem.id}
        item={menuItem.item}
        price={menuItem.price}
        restaurant_id={menuItem.restaurant_id}
      />
    );
  });

  return (
    <div className="menu-item-container">
      {menu}
    </div>
  )
}

export default MenuList;
