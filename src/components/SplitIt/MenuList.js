import React, { Component } from 'react';
import MenuItem from './MenuItem';

class MenuList extends Component {
  constructor(props){
    super(props)
  }

  render(){


    let menu = this.props.menu.map((menuItem) => {
      console.log('this is menuItem', menuItem)
      return (
        <MenuItem
          key={menuItem.id}
          item={menuItem.item}
          price={menuItem.price}
          restaurant_id={menuItem.restaurant_id}
          addToCart={this.props.addToCart}
        />
      );
    });




    return (
      <div className="menu-item-container">
        {menu}
      </div>
    )
  }
}

export default MenuList;
