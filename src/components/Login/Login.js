import React, { Component } from 'react';
import update from 'react-addons-update';
import { browserHistory } from 'react-router';

import NavigationSplitIt from '../Navigation/NavigationSplitIt';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state =  {
      restaurant: {}
    };
  }

  componentWillMount() {
    if (localStorage.getItem('token')) {
        browserHistory.push('/menu_create');
    }
  }

  handleChange(event){
    let newState = update(this.state, {
        restaurant: {
          $merge: {
            [event.target.name]: event.target.value
          }
        }
    });

    this.setState(newState);
  }


  handleSubmit(event) {
    event.preventDefault();
    fetch('https://splitzi-api.herokuapp.com/restaurant/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then((results) => {
      console.log(results);
      results.json()
      .then(jwt => {
        window.localStorage.setItem('token', jwt.token);
        window.localStorage.setItem('restaurant', JSON.stringify(jwt.restaurant));
        // window.localStorage.setItem('restaurant_name', jwt.restaurant_name);
        // window.localStorage.setItem('restaurant_id', jwt.id);
        browserHistory.push('/menu_create');
      });
    })
    .catch(() => {
        alert('Not authenticated!');
    });
  }

  render(){
    return(
      <div>
        <NavigationSplitIt />
        <div id="login-page-div">
          <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
            <input placeholder="Email" name='email' type="email" onChange={this.handleChange.bind(this)}></input>
            <input placeholder="Password" name="password" type="password" onChange={this.handleChange.bind(this)}></input>
            <input type="submit"></input>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
