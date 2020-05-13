import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
// import profileImg from './assets/profilePicture.png';
import mapSD from './assets/mapSD.png';
function ContactPage() {
    const imgStyle= {width: "100%", height: "80vh", objectFit: "cover"}
    return (
        <div>
            <div class="bodyContained">
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
                    <div class="container myBox">
                        <div class="row mx-auto myMy ">
                            <img class="col-lg-6" src={mapSD} alt="weather app" style={imgStyle}/>
                            <div class="col-lg-6 text-center contactMe">
                                <h2 class="mt-2">Contact Me</h2>
                                <form class="card-body mt-2">
                                    <div class="form-group text-left">
                                        <label for="fullName">Enter your Name</label>
                                        <input type="text" class="form-control" id="fullName" placeholder="Enter Your Name"/>
                                    </div>
                                    <div class="form-group  text-left">
                                        <label for="emailAddress">Enter your Email Address</label>
                                        <input type="email" class="form-control" id="emailAddress" placeholder="Enter Your Email Address"/>
                                    </div>
                                    <div class="form-group text-left">
                                        <label for="message">Enter your Message</label>
                                        <textarea class="form-control" id="message" rows="3"></textarea>
                                    </div>
                                    <div class="d-flex justify-content-center mt-5">
                                        <div class="myBtn text-center" >SUBMIT</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                
            </div>
        </div>
    )
}

export default ContactPage
