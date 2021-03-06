import React from "react";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import ContactPage from './components/ContactPage';
// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
          <Route exact path={process.env.PUBLIC_URL} component={HomePage} />
          <Route exact path= {["#", "/about"]} component={HomePage} />
          <Route exact path="/ProjectPage"  component={ProjectPage} />
          <Route exact path="/ContactPage"  component={ContactPage} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

