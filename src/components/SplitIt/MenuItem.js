import React, { Component } from 'react';

class MenuItem extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="menu-item" onClick={this.props.addToCart}>
        <h2 className="item-name">{this.props.item}</h2>
        <div className="item-price">{this.props.price} </div>
      </div>
    )
  }
}
 export default MenuItem;
