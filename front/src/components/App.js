import React from "react";
import NavBar from "./NavBar";
import Slider from "./Slider";
import Gallery from "./Gallery";
import Reviews from "./Reviews";
import Footer from "./Footer";
import Book from "./Book";
import Login from "./Login";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import VerifiedUser from "./VerifiedUser";

function App() {
  return (
    <div>
      <Router>
     
    <Routes>
    <Route path="/home">
    <div>
    <NavBar/>
    <Slider/>
      <Gallery/>
      <Reviews/> 
      
      <Footer/></div>
  
      </Route>
    </Routes>
    <Routes>
      <Route path="/gallery">   
      <div><NavBar/>  
      <Gallery/>
      <Reviews/> 
      <Footer/></div>
      
      </Route> 
    </Routes> 
 
    </Router>
    <Router>
    <Routes>
        <Route path="/Admin">
          <Login/>
        </Route>
      </Routes>

    </Router>
    <Router>
    <Routes>
        <Route path="/Book">
        <div>
        <NavBar/>  
          <Book/>
          <Reviews/> 
        <Footer/>
        </div>
        
        </Route>
      </Routes>

    </Router>
    <Router>
    <Routes>
        <Route path="/VerifiedAdmin">
        <div>
        <VerifiedUser/>
        </div>
        
        </Route>
      </Routes>

    </Router>
    </div>

    
      
  );
}

export default App;
