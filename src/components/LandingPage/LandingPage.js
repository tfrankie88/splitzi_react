import React, { Component } from 'react';
import { Link } from 'react-router';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }


  componentWillMount() {
    if (localStorage.getItem('token')) {
      window.localStorage.removeItem('token');
    }
    if(localStorage.getItem('restuarant')) {
      window.localStorage.removeItem('restaurant');
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
      <div>
        <h1>splitzi</h1>
        <div className="lp-login link">
          <Link to='/login'>login</Link><br/>
          <Link to='/sign_up'>sign up restaurant</Link>
        </div>
        <button className="logoutButton" onClick={this.logout.bind(this)}>Logout</button>
      </div>
    )
  }
}

export default LandingPage;
