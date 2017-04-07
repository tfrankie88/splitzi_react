import React, { Component } from "react";

import { Link, browserHistory } from "react-router";
import { Logo } from "../img/splitzi_logo_white.svg";

class NavigationRestaurant extends Component {
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
      // console.log('RESTA obj: ',restaurantObj);
      this.setState({restaurant: restaurantObj});
      this.setState({restaurant_id: restaurantObj.id});
    }
  }

  logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('restaurant_id');
    window.localStorage.removeItem('restaurant_name');
    browserHistory.push('/');
    // console.log('logged-out');
  }

  render() {
    return(
      <header>
        <h1 className="logo-nav">
          <Link to="/"><img src={Logo} width="125px"/></Link>
        </h1>
        <nav className="nav-column">
          <div className="navTitle">
            <h2> heya, &nbsp; {this.state.restaurant.first_name}</h2>
          </div>
          <button className="logout-button" onClick={this.logout.bind(this)}>Logout</button>
        </nav>
      </header>
    );
  }
}

export default NavigationRestaurant;
