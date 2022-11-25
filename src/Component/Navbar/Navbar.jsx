import React, { Component, Fragment } from "react";
import styles from "./Navbar.module.css";

import { NavLink } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav
          className={` ${styles.navbarPosition} ${styles.navbar} navbar navbar-expand-lg  ${styles.bg}`}
        >
          <div className={`${styles.bar} container`}>
            <NavLink
              className={`navbar-brand ${styles.textWhite} ${styles.textLogo}`}
              href="/Home"
            >
              START REACT
            </NavLink>
            <button
              className={`${styles.navbarTogglerBg} navbar-toggler`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              menu
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink
                  className={`${styles.textWhite} nav-link active`}
                  aria-current="page"
                  to="/Home"
                >
                  Home
                </NavLink>
                <NavLink
                  className={`${styles.textWhite} nav-link`}
                  to="/Portoflio"
                >
                  PORTFOLIO
                </NavLink>
                <NavLink className={`${styles.textWhite} nav-link`} to="/About">
                  ABOUT
                </NavLink>
                <NavLink
                  className={`${styles.textWhite} nav-link`}
                  to="/Contact"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  CONTACT
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
