import React, { Component } from "react";
import { Link } from "react-router";

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
            <div className="collection-item">restaurant owner?</div>
            <div>
              <Link className="collection-item" to="/login">login &nbsp;</Link>• &nbsp;
              <Link className="collection-item" to="/sign_up">sign up</Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavigationSplitIt;
