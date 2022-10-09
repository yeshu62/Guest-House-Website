import React from "react";
import NavBar from "./NavBar";
import Slider from "./Slider";
import Gallery from "./Gallery";
import Reviews from "./Reviews";
import Footer from "./Footer";
import Book from "./Book";
import AboutUs from "./AboutUs";
import Room from "./Room";
import ContactUs from "./ContactUs";
import Try from "./Try";
import NewRoom from "./NewRoom";
import Map from "./Map";
import RoomDesc from "./RoomDesc";
import Testimonials from "./Testimonials";
import Rooom from "./Roooms";
import Tariff from "./Tariff";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ContentBox from "./ContentBox";
import Allrevs from "./Allrevs";

function App() {
  return (
    <div>
      <Router>
     
    <Routes>
    <Route path="/">
    <div>
    <NavBar/>
    <Slider/>
    <ContentBox/>
      <RoomDesc/>
      <Map/>
      <Testimonials/>
     
         
      <Footer/>
      </div>
  
      </Route>
    </Routes>
    
    <Routes>
      <Route path="/gallery">   
      <div><NavBar/>  
      <Gallery/>
       
      <Footer/></div>
      
      </Route> 
    </Routes> 
 
    </Router>


  

    <Router>
    <Routes>
        <Route path="/home">
        <div>
        <NavBar/>
    <Slider/>
    <ContentBox/>
      <RoomDesc/>
      <Map/>
      <Testimonials/>
      
         
      <Footer/>
      </div>
        </Route>
      </Routes>

    </Router>

    <Router>
    <Routes>
        <Route path="/Book/:cin/:cout/:NOP">
        <div>
        <NavBar/>  
        <Book/>
        <Footer/>
        </div>
        
        </Route>
      </Routes>
    </Router>

    <Router>
    <Routes>
        <Route path="/Book///">
        <div>
        <NavBar/>  
        <Book/>
        <Footer/>
        </div>
        
        </Route>
      </Routes>
    </Router>


    <Router>
    <Routes>
        <Route path="/Book">
        <div>
        <NavBar/>  
        <Book/>
  
        <Footer/>
        </div>
        
        </Route>
      </Routes>

    </Router>


    <Router>
    <Routes>
        <Route path="/about">
        <div>
        <NavBar/>
          <AboutUs/>
          <Footer/>
        </div>
          

        </Route>
      </Routes>

    </Router>



    
    <Router>
    <Routes>
        <Route path="/rooms">
        <div>
        <NavBar/>
       <Rooom/>
       <Footer/>
        </div>
          

        </Route>
      </Routes>

    </Router>


    <Router>
    <Routes>
        <Route path="/contactus">
        <div>
          <NavBar/>
          <ContactUs/>
          <Footer/>
         
        </div>
          

        </Route>
      </Routes>

    </Router>


    <Router>
    <Routes>
        <Route path="/map">
        <div>
          <NavBar/>
          <Map/>
          <Footer/>
         
        </div>

        </Route>
      </Routes>

    </Router>




    <Router>
    <Routes>
        <Route path="/tariff">
        <div>
        <NavBar/>
          <Tariff/>
          <Footer/>
        </div>
        
        </Route>
      </Routes>

    </Router>


    <Router>
    <Routes>
        <Route path="/morereviews">
        <div>
        <NavBar/>
         <Allrevs/>
          <Footer/>
        </div>
        
        </Route>
      </Routes>

    </Router>

    </div>
    

    
      
  );
}

export default App;
