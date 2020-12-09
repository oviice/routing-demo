import React, { Component } from "react";
import {
    Route,
    Link,
    BrowserRouter as Router,
  } from "../../node_modules/react-router-dom";
import ContactOne from "./ContactOne";
import ContactTwo from "./ContactTwo";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Router>
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              margin: "0px auto",
              padding: "10px",
            }}
          >
            <ul style={{ margin: "0px" }}>
              <Link to="/contactone"> Contact One</Link>
              <Link to="/contacttwo"> Contact Two</Link>
            </ul>

            <Route exact path="/" component={Contact} />
            <Route path="/contactone" component={ContactOne} />
            <Route path="/contacttwo" component={ContactTwo} />
          </div>
        </Router>
      </div>
    );
  }
}
