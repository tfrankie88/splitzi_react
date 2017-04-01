import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from "react-router";

import ItemForm from './ItemForm';

class MenuCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [],
      restaurant: {},
      renderItemForm: false,
    };
  }

  componentWillMount(){
    if (!localStorage.getItem('token')) {
      browserHistory.push('/login');
    } else {
      let restaurantObj = JSON.parse(window.localStorage.restaurant);
      this.setState({restaurant: restaurantObj})
    }
  }

  renderItemForm() {
    console.log('called')
    if(this.state.renderItemForm) {
      console.log('bff console log')
      return(
        <div>
          <ItemForm />
        </div>
      )
    }
  }

  databaseSubmit() {
    fetch(`https://localhost:8000/restaurant/:restaurant_id/menu`, {
      method: "POST",
      body: JSON.stringify({
        apartment: this.state.menu
      }),
      headers: {
        "Content-Type": 'application/json'
      }
    })
    .then(() => {
      browserHistory.push('/menu_create');
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleChange(event) {
    let newState = update(this.state, {
      menu: [
        $merge: {
          [event.target.name]: event.target.value
        }
      ],
    });
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.databaseSubmit();
  }

  doesStuff(){
    this.setState({renderItemForm: true})
  }

  render(){
    return(
      <div>
        <div>
          <div>add items to... {this.state.restaurant.restaurant_name}</div>
        </div>
        <div>
          {this.state.menu}
        </div>
        <div>
          <button type="button"
            onClick={this.doesStuff.bind(this)} >
            add item
          </button>
          {this.renderItemForm()}
        </div>
      </div>
    )
  }

}

export default MenuCreate;
