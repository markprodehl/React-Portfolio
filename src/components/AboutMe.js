import React from "react";
import { Link } from "react-router-dom";
import myProfile from "./assets/profilePicture.png";


function AboutMe(props) {

  // const myRef2 = useRef(null)
  // const executeScroll = () => scrollToRef(myRef)
  // const executeScroll2 = () => scrollToRef(myRef2)

  return (
      <div ref={props.myRef} id="" className="row container aboutMe mx-auto">
              <div className="col-lg-6">
                  <img  src={myProfile} alt="my profilePic"/>
              </div>
              <div className="col-lg-6 text-center">
                  <h2 className="pinkTxt" >About Me</h2>
                  <p className="">Full Stack Web Developer with a passion for creativity in development and excited to contribute to the computer science field. Patient in developing solutions by tackling problems in an exceptionally detail-oriented and methodical nature. Performs well under the pressure of organizing and upholding project deadlines by being flexible and dependable. Currently working towards a Full Stack Coding Bootcamp Certificate from UCSD.</p>
                  <div className="d-flex justify-content-center mt-4">
                      <Link to={'/ProjectPage'}>
                          <div className="myBtn text-center" >SHOW PROJECTS</div>
                      </Link>
                  </div>
              </div>
          </div>
  )
}

export default AboutMe

