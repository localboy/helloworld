import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            HelloWorld
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/todo-list" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/todo-list">
                  Todo List
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/weather" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/weather">
                  Weather
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
  );
}

export default withRouter(Navigation);