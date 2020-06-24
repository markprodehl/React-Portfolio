import React from 'react';
import foogLoggerImg from "./assets/foodLogger.png";
import thirtyDaysImg from "./assets/thirtyDays.png";
import appScreenshot from "./assets/appScreenshot.png";
import onlineOfflineTracker from "./assets/onlineOfflineTracker.png";
import memoryGameImg from "./assets/memoryGame.png";
import ScrollAnimation from 'react-animate-on-scroll';


function ProjectPage() {
    return (
        <div>
            <div className="bodyContained">
            <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
                    <div className="row container mx-auto myBox">
                        <div  className="col-lg-6 text-center pt-4">
                            <h2 className="mt-3 mb-4">
                            Pawpals
                            </h2>
                            <p>PawPals is a full-stack web application construted with an Express backend web framework, Mongo database storage, Node runtime environment, Amazon S3, React and Redux. It is a pet relationship application designed to meet the 
                                growing demand for dog owners to preserve their privacy while sharing pictures and building relationships with local pups. 
                                Users can follow and unfollow other doggie members and start converations. Pet owners can also feel 
                                comfortable sharing photos on a pet only website without annoying adds.
                            </p>
                            <div className="d-flex justify-content-center mt-4">
                                <a className="myBtn text-center" href="https://pawpals-social-network.herokuapp.com/" target="_blank" rel="noopener noreferrer">VIEW APP</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={appScreenshot} alt="food app"/>
                        </div>
                    </div>        
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
                    <div className="row container mx-auto myBox">
                        <div className="col-lg-6">
                            <img src={thirtyDaysImg} alt="weather app" style={{width: "100%"}}/>
                        </div>
                        <div className="col-lg-6 text-center pt-4">
                            <h2 className="mt-3 mb-4">
                            30-Day Challenge
                            </h2>
                            <p >30-Day-Challenge is a full-stack web application that uses server side-API and an MVC design pattern. The application is designed for people that want to challenge themselves by committing to a fitness regime designed to challenge their physical and mental toughness. Users set can set multiple 30-day goals which they can keep track of in the easy to use challenge dashboard. 
                            </p>
                            <div className="d-flex justify-content-center mt-4">
                                <a className="myBtn text-center" href="https://thirty-day-challenge.herokuapp.com/login" target="_blank" rel="noopener noreferrer">VIEW APP</a>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>  
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
                    <div className="row container mx-auto myBox">
                        <div  className="col-lg-6 text-center pt-4">
                            <h2 className="mt-3 mb-4">
                            Memory Game
                            </h2>
                            <p>Memory Game is an application designed to work in the browser. No need to buy or install anything locally. This makes it a cheap and convenient way to exercise your memory while having a fun. Memory Game can be played by people of all ages.
                            </p>
                            <div className="d-flex justify-content-center mt-4">
                                <a className="myBtn text-center" href="https://markprodehl.github.io/Memory-Game/" target="_blank" rel="noopener noreferrer">VIEW APP</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={memoryGameImg} alt="food app"/>
                        </div>
                    </div>        
                </ScrollAnimation>         
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
                    <div className="row container mx-auto myBox">
                        <div  className="col-lg-6 text-center pt-4">
                            <h2 className="mt-3 mb-4">
                            Food Logger
                            </h2>
                            <p>The Food Logger application uses MySQL, Node, Express, Handlebars and a custom built ORM designed to take customer orders and keep a record of the ones that have been delivered and eaten. Devoured burgers are kept in a database for the restaurant managers records.
                            </p>
                            <div className="d-flex justify-content-center mt-4">
                                <a className="myBtn text-center" href="https://the-food-logger.herokuapp.com/" target="_blank" rel="noopener noreferrer">VIEW APP</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={foogLoggerImg} alt="food app"/>
                        </div>
                    </div>        
                </ScrollAnimation>    
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
                    <div className="row container mx-auto myBox">
                        <div className="col-lg-6">
                            <img src={onlineOfflineTracker} alt="weather app"/>
                        </div>
                        <div  className="col-lg-6 text-center pt-4">
                            <h2 className="mt-3 mb-4">
                            Online-Offline Budget Tracker
                            </h2>
                            <p>The Online-Offline-Budget-Tracker App is designed to optimize user experience, particularly on older phones with slower internet connections. It is a progressive web application that uses a Service Worker and Cache API’s to cache assets and API responses. This means that it can function without an internet connection.
                            </p>
                            <div className="d-flex justify-content-center mt-4">
                                <a className="myBtn text-center" href="https://offlinebudget-tracker.herokuapp.com/" target="_blank" rel="noopener noreferrer">VIEW APP</a>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>   
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
                    <div className="row container mx-auto myBox">
                        <div  className="col-lg-6 text-center pt-4">
                            <h2 className="mt-3 mb-4">
                            Food Logger
                            </h2>
                            <p>The Food Logger application uses MySQL, Node, Express, Handlebars and a custom built ORM designed to take customer orders and keep a record of the ones that have been delivered and eaten. Devoured burgers are kept in a database for the restaurant managers records.
                            </p>
                            <div className="d-flex justify-content-center mt-4">
                                <a className="myBtn text-center" href="https://the-food-logger.herokuapp.com/" target="_blank" rel="noopener noreferrer">VIEW APP</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={foogLoggerImg} alt="food app"/>
                        </div>
                    </div>        
                </ScrollAnimation>    
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut'>
                    <div className="row container mx-auto myBox">
                        <div  className="col-lg-6 text-center pt-4">
                            <h2 className="mt-3 mb-4">
                            Memory Game
                            </h2>
                            <p>Memory Game is an application designed to work in the browser. No need to buy or install anything locally. This makes it a cheap and convenient way to exercise your memory while having a fun. Memory Game can be played by people of all ages.
                            </p>
                            <div className="d-flex justify-content-center mt-4">
                                <a className="myBtn text-center" href="https://markprodehl.github.io/Memory-Game/" target="_blank" rel="noopener noreferrer">VIEW APP</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={memoryGameImg} alt="food app"/>
                        </div>
                    </div>        
                </ScrollAnimation>   
            </div>
        </div>
    )
}

export default ProjectPage