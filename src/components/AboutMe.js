import React from "react";
import { Link } from "react-router-dom";
import myProfile from "./assets/profilePicture.png";


function AboutMe(props) {

  // const myRef2 = useRef(null)
  // const executeScroll = () => scrollToRef(myRef)
  // const executeScroll2 = () => scrollToRef(myRef2)

  return (
      <div ref={props.myRef} className="row container aboutMe mx-auto">
              <div className="col-lg-5">
                  <img  src={myProfile} alt="my profilePic"/>
              </div>
              <div className="col-lg-7 mt-1">
                  <h2 className="pinkTxt" >About Me</h2>
                  <p className="">In addition to recently completing a Full Stack Web Developer Certification from the University of California, San Diego, I have over 20 years of experience in business operations, sales, marketing and product management to leverage in the web development field. I have proven results growing revenue streams across multiple business sectors and demonstrable ability at maximizing sales, building customer relationships, growing portfolios, and increasing profitability. I also have a broad knowledge across business operations, systems, logistics, and e-commerce.</p>
                  <p className="">The web development skills I’ve learned using agile development techniques and Github version control combined with years of experience using web applications in a business environment positions me well to align web application design with the functionality that end users need.</p>
                  <p className="">I am a self-motivated, adaptable, flexible, and collaborative person who is open to learning on the job. </p>
                  <p className="">Technical Skills: HTML, CSS, JavaScript, jQuery, Responsive Design, Bootstrap, Handlebars, React.js, Node.js, Express, Git, Agile, MySQL, MongoDB</p>
                  
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

