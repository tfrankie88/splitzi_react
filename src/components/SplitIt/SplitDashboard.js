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
      menu: []
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
    fetch(`http://localhost:8000/restaurant/name/${term}`)
    .then(r => r.json())
    .then((data) => {
      console.log(data);
      // this.setState({ menuItems: data.search })
      fetch(`http://localhost:8000/menu/${data.id}/menu`)
      .then(r => r.json())
      .then((menuData) => {
        console.log(menuData);
        this.setState({ menu: menuData });
        // console.log('this is state', this.state.menuItems[0]);
      })
    })
    .catch(err => console.log('ERROR', err));
  };

  render() {
    return(
      <div>
        <NavigationSplitIt />
        <div>
          <h1>where did you eat?</h1>
          <RestaurantSearch
            searchRestaurant={this.searchRestaurant.bind(this)}
          />
          <MenuList
            menu={this.state.menu}
          />
        </div>
      </div>
    )
  }
}

export default SplitDashboard;