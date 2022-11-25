import React, { Component, Fragment } from "react";
// import img2 from "../../imgs/round-star.png";
import styles from "./About.module.css";

export default class About extends Component {
  render() {
    return (
      <>
        <div className={`${styles.bg} mt-5 py-4 `} id="About">
          <div className={`container`}>
            <div className="row">
              <div className="col-12 text-center my-5">
                <h1 className={`${styles.heading}`}>ABOUT</h1>
                <div className="icon">
                  <div className={`${styles.img}`}>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="row container">
              <div className="col-md-6 col-sm-12 text-center">
                <p className="lead text-white fs-3 fw-bolder ">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6 col-sm-12 text-center">
                <p className="lead text-white fs-3 fw-bolder">
                  You can create your own custom avatar for the masthead, change
                  the icon in the dividers, and add your email address to the
                  contact form to make it fully functional!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <i class="fa-solid fa-star"></i> */}
      </>
    );
  }
}
