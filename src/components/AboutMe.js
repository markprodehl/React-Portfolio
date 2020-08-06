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
                  <p className="">Full Stack Web Developer with extensive experience in business operations, sales, marketing, e-commerce, and team management to leverage in the web development field. A self-motivated, adaptable, flexible, and collaborative programmer with a passion for problem-solving and learning with proven results at increasing profitability, growing portfolios, and building long term client relationships across multiple business sectors.</p>
                  <p className="">The web development skills I’ve learned using agile development techniques and Github version control combined with strong knowledge of operations and using web applications in a business environment positions me well to align web application design with the functionality that end users need.</p>
                  <p className="">Technical Skills: HTML, CSS, JavaScript, jQuery, Responsive Design, Bootstrap, Handlebars, React.js, Node.js, Express, Git, Agile, MySQL, MongoDB</p>
                  <p className="">Business Skills: Business Operations, Sales & Marketing, E-Commerce, Cost Analysis & Pricing, Client Relationship Management, SEO, Business Development Strategies, Systems & Logistics Planning, Negotiation & Influencing, QuickBooks, WordPress, Shopify, Training</p>
                  
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

