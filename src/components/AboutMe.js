import React from "react";
import { Link } from "react-router-dom";
import myProfile from "./assets/profilePicture.png";


function AboutMe(props) {

  // const myRef2 = useRef(null)
  // const executeScroll = () => scrollToRef(myRef)
  // const executeScroll2 = () => scrollToRef(myRef2)

  return (
      <div ref={props.myRef} className="row container  aboutMe mx-auto">
              <div className="col-lg-5">
                  <img  src={myProfile} alt="my profilePic"/>
              </div>
              <div className="col-lg-7 mt-1">
                  <h2 className="pinkTxt" >About Me</h2>
                  <p className="">Full Stack Web Developer with a passion for creativity in development and excited to contribute to the computer science field. Patient in developing solutions by tackling problems in an exceptionally detail-oriented and methodical nature. Performs well under the pressure of organizing and upholding project deadlines by being flexible and dependable. Currently working towards a Full Stack Coding Bootcamp Certificate from UCSD.</p>
                  <p className="">An experienced Operations and Business Development Manager with proven results in growing new revenue streams across multiple sectors. Demonstrated ability at maximizing sales & profitability, growing customer portfolios and developing a broad knowledge across operations, business systems, logistics, and technology.</p>
                  <p className="">Applying a personable approach to stakeholder relationships, I have built business with new customers and collaborated with existing clients to ensure that their requirements are fully met. Having worked at a senior level, I have expertise in developing bespoke services and delivering on business commitments to achieve excellence.</p>
                  
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

