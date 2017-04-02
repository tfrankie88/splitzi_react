import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import update from 'react-addons-update';

class ItemForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: '',
      price: ''
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.databaseSubmit(this.state)
  }

  handleItemInput(event) {
    let newState = update(this.state, {
      $merge: {
        [event.target.name]: event.target.value
      },
    })
  };

  render() {
    return(
      <div>
        <input
          name="item"
          type="text"
          placeholder="menu item"
          onChange={this.handleItemInput.bind(this)}>
        </input>
        <input
          name="price"
          type="text"
          placeholder="price"
          onChange={this.handleItemInput.bind(this)}>
        </input>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default ItemForm;
