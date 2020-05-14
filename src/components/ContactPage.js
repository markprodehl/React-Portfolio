import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
// import profileImg from './assets/profilePicture.png';
import mapSD from "./assets/mapSD.png";
function ContactPage() {
  const imgStyle = { width: "100%", height: "80vh", objectFit: "cover" };
  return (
    <div>
      <div className="bodyContained">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="container myBox">
            <div className="row mx-auto myMy ">
              <img
                className="col-lg-6"
                src={mapSD}
                alt="weather app"
                style={imgStyle}
              />
              <div className="col-lg-6 text-center contactMe">
                <h2 className="mt-2">Contact Me</h2>
                <form className="card-body mt-2">
                  <div className="form-group text-left">
                    <label htmlFor="fullName">Enter your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="form-group  text-left">
                    <label htmlFor="emailAddress">
                      Enter your Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailAddress"
                      placeholder="Enter Your Email Address"
                    />
                  </div>
                  <div className="form-group text-left">
                    <label htmlFor="message">Enter your Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-center mt-5">
                    <div className="myBtn text-center">SUBMIT</div>
                  </div>
                </form>
                <div className="card">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      email: markprodehl@gmail.com
                    </li>
                    <li className="list-group-item">phone: 858-926-9504</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default ContactPage;
