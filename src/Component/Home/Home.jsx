import React, { Component, Fragment } from "react";
import img1 from "../../imgs/avataaars.svg";
// import img2 from "../../imgs/round-star.png";
import styles from "./Home.module.css";
export default class Home extends Component {
  render() {
    return (
      <>
        <div id="Home" className={`${styles.bg} py-2 `}>
          <div className={`${styles.home_content} `}>
            <div className="home-img">
              <img className="w-25" src={img1} alt="1" />
            </div>
            <div className={`${styles.content} mt-3 text-white`}>
              <h1>START REACT</h1>
            </div>
            <div className="icon my-2">
              <div className={`${styles.img}`}>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>

            <div className="para mt-4">
              <p className={`${styles.p} lead text-white fa  `}>
                Graphic Artist - Web Designer - Illustrator
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
