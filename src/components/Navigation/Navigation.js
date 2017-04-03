import React, { Component } from "react";

import { Link, browserHistory } from "react-router";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant: {},
      menu: {},
      restaurant_id: ""
    };
  }

  componentWillMount(){
    if (!localStorage.getItem('token')) {
      browserHistory.push('/login');
    } else {
      let restaurantObj = JSON.parse(window.localStorage.restaurant);
      console.log('RESTA obj: ',restaurantObj);
      this.setState({restaurant: restaurantObj});
      this.setState({restaurant_id: restaurantObj.id})
    }
  }

  logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('restaurant_id');
    window.localStorage.removeItem('restaurant_name');
    browserHistory.push('/');
    console.log('logged-out');
  }

  render() {
    return(
      <div className="nav-header">
        <nav>
          <h1>splitzi</h1>
          <div className="navTitle">
            <h2> hey, {this.state.restaurant.first_name}</h2>
          </div>
          <div className="collection">
            <Link className="collection-item " to="/dashboard">Home</Link>
          </div>
          <button className="logoutButton" onClick={this.logout.bind(this)}>Logout</button>
        </nav>
      </div>
    )
  }
}

export default Navigation;
