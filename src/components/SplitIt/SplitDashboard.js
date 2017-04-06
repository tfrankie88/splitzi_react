import React, { Component } from 'react';
import { browserHistory } from "react-router";
import { Link } from 'react-router';

import NavigationSplitIt from '../Navigation/NavigationSplitIt';
import RestaurantSearch from './RestaurantSearch';
import MenuList from './MenuList';

class SplitDashboard extends Component {
  constructor() {
    super();

    this.state = {
      menu: [],
      cart: 0
    };
  }

  componentWillMount() {
    if (localStorage.getItem('token')) {
      window.localStorage.removeItem('token');
    }
    if(localStorage.getItem('restuarant')) {
      window.localStorage.removeItem('restaurant');
    }
  }

  searchRestaurant(term) {
    fetch(`https://splitzi-api.herokuapp.com/restaurant/name/${term}`)
    .then(r => r.json())
    .then((data) => {
      // console.log(data);
      // this.setState({ menuItems: data.search })
      fetch(`https://splitzi-api.herokuapp.com/menu/${data.id}/menu`)
      .then(r => r.json())
      .then((menuData) => {
        // console.log(menuData);
        this.setState({ menu: menuData });
        // console.log('this is state', this.state.menuItems[0]);
      })
    })
    .catch(err => console.log('ERROR', err));
  };

    addToCart(){
      this.setState({cart: this.state.cart + 1}, () => {
        console.log("this is the cart", this.state.cart);
      })

    }

  render() {
    return(
      <div>
        <NavigationSplitIt />
        <div className="content-container">
          <h1 className="search-items-title">where did you <span>eat?</span></h1>
          <div>
            <RestaurantSearch
              searchRestaurant={this.searchRestaurant.bind(this)}
            />
          </div>
          <div className="item-cards-container">
            <MenuList
              menu={this.state.menu}
              addToCart={this.addToCart.bind(this)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SplitDashboard;
