import React, { Component, Fragment } from "react";
import styles from "./Contact.module.css";
// import img2 from "../../imgs/round-star.png";

export default class Contact extends Component {
  change = (event) => {
    event.currentTarget.style.border = "none";
    // label.style.display = "none";
    console.log(event);
  };
  render() {
    return (
      <>
        <div className="container py-4 my-5" id="Contact">
          <div className="row">
            <div className="col-12 text-center my-5">
              <h1 className={`${styles.heading}`}>CONTACT US</h1>
              <div className="icon">
                <div className={`${styles.img}`}>
                  {/* <img className={`${styles.w1}`} src={img2} alt="2" /> */}
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form my-3 container">
                <div className="name my-3">
                  <label htmlFor="name">Name</label>
                  <input
                    onKeyDown={this.change}
                    className={`${styles.form} form-control`}
                    id="name"
                    placeholder="Name"
                    type="text"
                  />
                </div>
                <div className="email my-3">
                  <label htmlFor="email">Email Address</label>
                  <input
                    className={`${styles.form} form-control`}
                    placeholder="Email Address"
                    id="email"
                    type="email"
                  />
                </div>
                <div className="phone my-3">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    className={`${styles.form} form-control`}
                    placeholder="Phone Number"
                    type="Number"
                    id="phoneNumber"
                  />
                </div>
                <div className="massege my-3">
                  <label htmlFor="massege">Your Massege</label>
                  <textarea
                    className={`${styles.form} form-control`}
                    placeholder="Massege"
                    name=""
                    id="massege"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  value="Submit"
                  className={`${styles.btn} btn btn-success btn-lg`}
                >
                  send
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
