import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./mycomponent/About";
import Contact from "./mycomponent/Contact";
import Profile from "./mycomponent/Profile";
import {
  Route,
  Link,
  BrowserRouter as Router,
} from "../node_modules/react-router-dom";

import reportWebVitals from "./reportWebVitals";

const myRouter = (
  <Router>
    <div style={{backgroundColor:"red",color:"white" ,margin:"0px auto",padding:"10px"}}>
      <ul style={{margin:"0px"}}>
        <Link to="/">Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>
        <Link to="/profile"> Profile</Link>
      </ul>

      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/profile" component={Profile}/>
    </div>
  </Router>
);

ReactDOM.render(
  myRouter,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
