import React, { Component } from 'react';
import update from 'react-addons-update';
import { browserHistory } from 'react-router';

import NavigationSplitIt from '../Navigation/NavigationSplitIt';

class NewRestaurant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant: {
        first_name: '',
        last_name: '',
        email: '',
        password_digest: '',
        restaurant_name: '',
        country: '',
        postal: ''
      }
    }
  }

  componentWillMount() {
    if (localStorage.getItem('token')) {
        browserHistory.push('/login');
    }
  }

  handleChange(event) {
    let newState = update(this.state, {
      restaurant: {
        $merge: {
          [event.target.name]: event.target.value
        }
      }
    })
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.restaurant.email !== '' && this.state.restaurant.password_digest !== '') {
      fetch('https://splitzi-api.herokuapp.com/restaurant/sign_up', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((results) => {
        browserHistory.push('/login');
      })
      .catch(() => {
        alert('Not authenticated!');
      });
    } else {
      alert('please fill out entire application')
    }
  }

  render(){
    return(
      <div>
        <NavigationSplitIt />
        <div className="content-container">
          <div className="new-restaurant-title">sign up</div>
          <form onSubmit={this.handleSubmit.bind(this)} className="new-restaurant-container">
            <input type="text"  name="first_name" placeholder="first name" onChange={this.handleChange.bind(this)}></input>
            <input type="text"   name="last_name" placeholder="last name" onChange={this.handleChange.bind(this)}></input>
            <input type="text"  name="email" placeholder="email" onChange={this.handleChange.bind(this)}></input>
            <input type="password" onChange={this.handleChange.bind(this)} name="password_digest" placeholder="password"></input>
            <input type="text" name="restaurant_name" placeholder="restaurant name" onChange={this.handleChange.bind(this)}></input>
            <input type="text" name="country" placeholder="country" onChange={this.handleChange.bind(this)}></input>
            <input type="text" name="postal" placeholder="postal" onChange={this.handleChange.bind(this)}></input><br/>
            <button href="/login" type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default NewRestaurant;
