import React, { Component } from 'react';

class RestaurantSearch extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  handleRestaurantSubmit(event) {
    event.preventDefault();
    this.props.searchRestaurant(this.state.search);
    this.setState({ search: '' });
  }

  render() {
    return(
      <form
      onSubmit={this.handleRestaurantSubmit.bind(this)}
      >
        <input
          type="text"
          value={this.state.search}
          onChange={e => this.setState({search: e.target.value})}
          placeholder="search your restaurant"
        /><br/>
        <input type="submit" value="search"/>
      </form>
    );
  }
}

export default RestaurantSearch;
