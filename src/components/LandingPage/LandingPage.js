import React, { Component } from 'react';
import { Link } from 'react-router';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //   if (localStorage.getItem('token')) {
  //     window.localStorage.removeItem('token');
  //   }
  //   if(localStorage.getItem('user')) {
  //     window.localStorage.removeItem('user');
  //   }
  // }

  render() {
    return(
      <div>
        <h1>splitzi</h1>
        <div className="lp-login link">
          <Link to='/login'>login</Link>
        </div>
      </div>
    )
  }
}

export default LandingPage;
