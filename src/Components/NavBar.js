import React, { Component } from "react";
import PropTypes from "prop-types";

export class NavBar extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsMonkey
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    General
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Technology
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
