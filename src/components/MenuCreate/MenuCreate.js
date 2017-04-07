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
      menu: {
        item: '',
        price: ''
      },
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
    if (this.state.menu.item !== '' && this.state.menu.price !== '') {
      // console.log('handleSubmit is active');
      fetch(`https://splitzi-api.herokuapp.com/${this.state.restaurant_id}/menu`, {
        method: "POST",
        body: JSON.stringify({
          menu: this.state.menu
        }),
        headers: {
          "Content-Type": 'application/json'
        }
      })
      .then(() => {
        this.setState({
          menu: {
            item: '',
            price: ''
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      alert('please add menu item & price');
    }
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
        <div className="content-container">
          <div className="add-items-title">
            add items to...<br/>
            <span>{this.state.restaurant.restaurant_name}</span>
          </div>
          <div className="menu-item-form">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input
                value={this.state.menu.item}
                name="item"
                type="text"
                placeholder="menu item"
                onChange={this.handleChange.bind(this)}>
              </input>
              <input
                value={this.state.menu.price}
                name="price"
                type="text"
                placeholder="price"
                onChange={this.handleChange.bind(this)}>
              </input>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default MenuCreate;
