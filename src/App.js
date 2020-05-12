import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';



function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div class="">
          <Route exact path= {["/", "/about", "/react_portfolio"]} component={HomePage} />
          
        </div>
        
      </div>
    </Router>
  );
}

export default App;

