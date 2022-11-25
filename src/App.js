import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Portfolio from "./Component/Portfolio/Portfolio";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Outlet />
        {/* <Home />
        <Portfolio />
        <About />
        <Contact /> */}
        <Footer />
      </div>
    );
  }
}
