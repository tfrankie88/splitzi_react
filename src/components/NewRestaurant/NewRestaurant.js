import React, { Component } from 'react';
import update from 'react-addons-update';
import { browserHistory } from 'react-router';

class NewRestaurant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant: {}
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
    console.log('in HS', this.state)
    fetch('http://localhost:8000/restaurant/sign_up', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((results) => {
      console.log(results);
      results.json().then((jwt) => {
        console.log(jwt);
        let authRestaurant = jwt.restaurant;
        window.localStorage.setItem('token', jwt.token);
        window.localStorage.setItem('restaurant', JSON.stringify(authRestaurant));
        browserHistory.push('/menu_create');
      })
    })
    .catch(() => {
      alert('Not authenticated!');
    });
  }
  render(){
    return(
      <div>
        <h1>sign up</h1>
        <form onSubmit={this.handleSubmit.bind(this)} className="">
          <div className="">
            <input type="text"  name="first_name" placeholder="first name" onChange={this.handleChange.bind(this)}></input>
          </div>
          <div className="">
            <input type="text"   name="last_name" placeholder="last name" onChange={this.handleChange.bind(this)}></input>
          </div>
          <div className="">
            <input type="text"  name="email" placeholder="email" onChange={this.handleChange.bind(this)}></input>
          </div>
          <div className="">
            <input type="password" onChange={this.handleChange.bind(this)} name="password_digest" placeholder="password"></input>
          </div>
          <div className="">
            <input type="text" name="restaurant_name" placeholder="restaurant name" onChange={this.handleChange.bind(this)}></input>
          </div>
          <div className="">
            <input type="text" name="country" placeholder="country" onChange={this.handleChange.bind(this)}></input>
          </div>
          <div className="">
            <input type="text" name="postal" placeholder="postal" onChange={this.handleChange.bind(this)}></input>
          </div>
          <button href="/menu_create" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default NewRestaurant;
