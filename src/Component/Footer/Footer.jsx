import React, { Component, Fragment } from "react";
import styles from "./Footer.module.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="" id="Footer">
          <div className={`${styles.section1} `}>
            <div className="container">
              <div className="row container">
                <div className="col-md-4 col-sm-12 text-center">
                  <div className="content">
                    <h3 className=" py-1">LOCATION</h3>
                    <p className="lead text-white">
                      2215 John Daniel Drive Clark, MO 65243
                    </p>
                  </div>
                </div>
                <div className={` col-md-4 col-sm-12 text-center`}>
                  <div className="content">
                    <h3 className=" py-1">AROUND THE WEB</h3>
                    <div className={`${styles.icons}`}>
                      <div className={`${styles.icon}`}>
                        <i class="fa-brands fa-facebook-f"></i>
                      </div>
                      <div className={`${styles.icon}`}>
                        <i class="fa-brands fa-twitter"></i>{" "}
                      </div>
                      <div className={`${styles.icon}`}>
                        <i class="fa-brands fa-linkedin-in"></i>{" "}
                      </div>
                      <div className={`${styles.icon}`}>
                        <i class="fa-solid fa-globe"></i>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 text-center">
                  <div className="content">
                    <h3 className=" py-1">ABOUT FREELANCER</h3>
                    <p className="lead text-white">
                      Freelance is a free to use, MIT licensed Bootstrap theme
                      created by Route
                    </p>
                  </div>
                </div>

                <div className="col-md-12"></div>
              </div>
            </div>
          </div>
          <div className={`${styles.section2}`}>
            <p className="lead">Copyright © Your Website 2022</p>
          </div>
        </div>
      </>
    );
  }
}
