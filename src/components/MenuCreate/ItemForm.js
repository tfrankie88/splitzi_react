import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import update from 'react-addons-update';

class ItemForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menu: {
        item: '',
        price: ''
      }
    };
  }

  handleChange(event) {
    let newState = update(this.state, {
      menu: {
        $merge: {
          [event.target.name]: event.target.value
        }
      },
    })
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} className="">
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
        </form>
      </div>
    )
  }
}

export default ItemForm;
