import React, { Component, Fragment } from "react";
import styles from "./Portoflio.module.css";
// import img2 from "../../imgs/round-star.png";
import img1 from "../../imgs/cabin.png";
import img3 from "../../imgs/cake.png";
import img4 from "../../imgs/circus.png";
import img5 from "../../imgs/game.png";
import img6 from "../../imgs/safe.png";
import img7 from "../../imgs/submarine.png";

// import plus from "../../imgs/plus.png";

export default class Portfolio extends Component {
  render() {
    return (
      <>
        <div id="Portfolio" className="container my-5 py-4">
          <div className="row">
            <div className="col-12 text-center my-5">
              <h1 className={`${styles.heading}`}>PORTFOLIO</h1>
              <div className="icon">
                <div className={`${styles.img}`}>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="row g-2">
            <div class="col-md-4 col-sm-6 rounded-3">
              <div className={`${styles.parent} rounded-3`}>
                <img className="w-100 rounded-3" src={img1} alt="1" />
                <div className={`${styles.child}  rounded-3 `}>
                  <i class="fa-solid fa-plus"></i>{" "}
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 rounded-3">
              <div className={`${styles.parent} rounded-3`}>
                <img className="w-100 rounded-3" src={img3} alt="1" />
                <div className={`${styles.child}  rounded-3 `}>
                  <i class="fa-solid fa-plus"></i>{" "}
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 rounded-3">
              <div className={`${styles.parent} rounded-3`}>
                <img className="w-100 rounded-3" src={img4} alt="1" />
                <div className={`${styles.child}  rounded-3 `}>
                  <i class="fa-solid fa-plus"></i>{" "}
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 rounded-3">
              <div className={`${styles.parent} rounded-3`}>
                <img className="w-100 rounded-3" src={img5} alt="1" />
                <div className={`${styles.child}  rounded-3 `}>
                  <i class="fa-solid fa-plus"></i>{" "}
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 rounded-3">
              <div className={`${styles.parent} rounded-3`}>
                <img className="w-100 rounded-3" src={img6} alt="1" />
                <div className={`${styles.child}  rounded-3 `}>
                  <i class="fa-solid fa-plus"></i>{" "}
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 rounded-3">
              <div className={`${styles.parent} rounded-3`}>
                <img className="w-100 rounded-3" src={img7} alt="1" />
                <div className={`${styles.child}  rounded-3 `}>
                  <i class="fa-solid fa-plus"></i>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
