import React, { Component } from 'react';
// import { Link } from 'react-router';
import { browserHistory } from "react-router";
import update from 'react-addons-update';

import NavigationRestaurant from '../Navigation/NavigationRestaurant';
// import ItemForm from './ItemForm';

class MenuCreate extends Component {
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

  handleChange(event) {
    let newState = update(this.state, {
      menu: {
        $merge: {
          [event.target.name]: event.target.value
        }
      },
    });
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit is active');

    fetch(`http://localhost:8000/menu/${this.state.restaurant_id}/menu`, {
      method: "POST",
      body: JSON.stringify({
        menu: this.state.menu
      }),
      headers: {
        "Content-Type": 'application/json'
      }
    })
    .then(() => {
      // browserHistory.push('/menu_create');
      console.log('in then statement')
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // renderItemForm() {
  //   if(this.state.renderItemForm) {
  //     return(
  //       <ItemForm />
  //     )
  //   }
  // }
  //
  // handleNewItemForm() {
  //   this.setState({renderItemForm: true})
  // }

  render(){
    return(
      <div>
        <NavigationRestaurant />
        <div>
          <div>add items to... {this.state.restaurant.restaurant_name}</div>
        </div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            name="item"
            type="text"
            placeholder="menu item"
            onChange={this.handleChange.bind(this)}>
          </input>
          <input
            name="price"
            type="text"
            placeholder="price"
            onChange={this.handleChange.bind(this)}>
          </input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

}

export default MenuCreate;
