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
      <div className="landing-page">
        <div className="logo-content">
          <h1 className="logo"></h1>
          <div className="landingpage-login">
            <Link to='/split_dashboard'><span>gotta split?</span></Link><br/>
            <Link to='/login'>restaurant owner login</Link><br/>
            <Link to='/sign_up'>sign up restaurant</Link>
          </div>
          {/* <button className="logoutButton" onClick={this.logout.bind(this)}>Logout</button> */}
        </div>
      </div>
    )
  }
}

export default LandingPage;
