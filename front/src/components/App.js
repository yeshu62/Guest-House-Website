import React from "react";
import NavBar from "./NavBar";
import Slider from "./Slider";
import Gallery from "./Gallery";
import Abt from "./Abt";
import Confirm from "./Confirm";
import Menu from "./Menu";
import Footer from "./Footer";
import Book from "./Book";
import AboutUs from "./AboutUs";
import Resturant from "./Resturant";
import ContactUs from "./ContactUs";

import Policy from "./Policy";
import Store from "./Store";
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
    <Route
  path="/store"
  element={
 
    <div><NavBar/><Store/><Footer/></div>
  
  }
/>



<Route
  path="/confirm"
  element={
 
    <div><NavBar/>
        <Confirm/>
      <Footer /></div>
  
  }
/>


<Route
  path="/resturant"
  element={
 
    <div><NavBar/>
        <Resturant/>
        <Menu/>
      <Footer /></div>
  
  }
/>



<Route
  path="/menu"
  element={
 
    <div><NavBar/>
        <Menu/>
      <Footer /></div>
  
  }
/>

<Route
  path="/"
  element={
 
    <div><NavBar/>
    <Slider/>
    <ContentBox/>
    
    <Testimonials/>
    <Footer /></div>
  
  }
/>


<Route
  path="/aboutUs"
  element={
 
    <div><NavBar/>
        <Abt/>
      <Footer /></div>
  
  }
/>


<Route
  path="/home"
  element={
 
    <div><NavBar/>
    <Slider/>
    <ContentBox/>
    
    <Testimonials/>
    <Footer /></div>
  
  }
/>

<Route
  path="/policy"
  element={
 
    <div><NavBar/>
    <Policy/>
    <Footer /></div>
  
  }
/>


<Route
  path="/rooms"
  element={
    <div><NavBar/>
    <Rooom/>
      <Footer /></div>
  }
/>

<Route
  path="/Book"
  element={
    <div><NavBar/>
    <Book/>
      <Footer /></div>
  }
/>

<Route
  path="/morereviews"
  element={
    <div><NavBar/>
    <Allrevs/>
      <Footer /></div>
  }
/>

<Route
  path="/about"
  element={
    <div><NavBar/>
    <AboutUs/>
      <Footer /></div>
  }
/>

<Route
  path="/map"
  element={
    <div><NavBar/>
    <Map/>
      <Footer /></div>
  }
/>

<Route
  path="/gallery"
  element={
    <div><NavBar/>
    <Gallery/>
      <Footer /></div>
  }
/>

<Route
  path="/tariff"
  element={
    <div><NavBar/>
    <Tariff/>
      <Footer /></div>
  }
/>

<Route
  path="/contactus"
  element={
    <div><NavBar/>
    <ContactUs/>
      <Footer /></div>
  }
/>
       
      </Routes>

    </Router>

    </div>
    

    
      
  );
}

export default App;
