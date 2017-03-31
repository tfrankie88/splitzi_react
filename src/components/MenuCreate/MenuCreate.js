import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from "react-router";



class MenuCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant: {}
    };
  }

  componentWillMount() {
    if (!localStorage.getItem('token')) {
        browserHistory.push('/login');
    } else {
      let restaurantObj = JSON.parse(window.localStorage.restaurant);
      this.setState({restaurant: restaurantObj})
    }
  }

  render(){
    return(
      <div>
        <div>Hello World</div>
      </div>
    )
  }

}

export default MenuCreate;
