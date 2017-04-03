import React, { Component } from "react";

import { Link, browserHistory } from "react-router";

class NavigationSplitIt extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <header>
        <h1 className="logo-nav">
          <Link to="/">{<img src="../img/splitzi_logo_white.svg" width="125px"/>}</Link>
        </h1>
        <nav className="nav-column">
          <div className="collection">
            <Link className="collection-item " to="/">restaurant sign up</Link>
          </div>
        </nav>
      </header>
    )
  }
}

export default NavigationSplitIt;
