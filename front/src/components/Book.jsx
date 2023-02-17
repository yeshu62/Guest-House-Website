import React,{useState,useEffect,useRef,Component} from 'react';
import emailjs from '@emailjs/browser';
import Slider from './Slider';
import {useParams} from 'react-router';
import { useLocation } from 'react-router-dom'

import swal from '@sweetalert/with-react'

import ReCAPTCHA from "react-google-recaptcha";
 
import {Link} from 'react-router-dom';

function Book(){

const location = useLocation();
const data = location.state;
console.log(data);

  const form = useRef();

  const[verified,setVerified]=useState(false);

  function handleThis(e){
  
    setVerified(true)
  
  }


  const [fname,setFname]=useState("");
  const [lname,setlname]=useState("");
  const [phone,setphone]=useState("");
  const [email,setemail]=useState("");


//   const submitBooking = function(){
//     Axios.post('http://localhost:3001/Book',
//     {checkIn:checkIn, checkout:checkout, nop:nop, fname:fname, lname:lname, room:room, country:country, phone:phone});

// }




const handleSubmit = (e) => {
  // e.preventDefault();



  // if(verified){
    
  // emailjs.sendForm('service_43xmhgt', 'template_srzismx', form.current, 'p87AIKhlpzHzrnl46')
  //   .then((result) => {
  //       console.log(result.text);
  //   }, (error) => {
  //       console.log(error.text);
  //   });
    
   

    // swal("Your booking request has been placed!", `We will contact you shortly`, "success")

  // }

  // else{
  //   e.target.reset();
  //   swal("Check capcha and try again lol", `...`, "error")  
  // }
    
};

  // useEffect(function(){
  //   Axios.get('http://localhost:3001/Book').then((Response)=>{
  //     console.log(Response);
  //     setCheckIn(Response.data[0]);
  //     setCheckout(Response.data[1]);
  //     setnop(Response.data[2]);
  //   });
  // })
  
  return(<div class="F">
<div class="containerForm">
  <h1>Personal Details*</h1>

  <form  onSubmit={handleSubmit}>
  <div class="row">
      <div class="col-25">
        <label for="Title">Title</label>
      </div>
      <div class="col-75">
        <select id="Title" name="title"  onChange={function(e){
                 
             }}>

             <option selected hidden value="0">Choose..</option>
          <option value="Mr">Mr.</option>
          <option value="Mrs">Mrs.</option>
          <option value="Ms">Ms.</option>
          <option value="Ms">Dr.</option>
        </select>
      </div>
    </div>
        
    <div class="row">
      <div class="col-25">
        <label for="fname">First Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="fname" required onChange={function(e){
                 setFname(e.target.value)
             }}/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Last Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lname" required onChange={function(e){
                 setlname(e.target.value)
             }}/>
      </div>
    </div>

    <div class="row">
      <div class="col-25">
        <label for="contact">Contact number</label>
      </div>
      <div class="col-75">
        <input type="tel" id="cnumber" name="phone" required  onChange={function(e){
                 setphone(e.target.value)
             }}/>
      </div>
    </div>


    <div class="row">
      <div class="col-25">
        <label for="email">Email</label>
      </div>
      <div class="col-75">
        <input type="email" id="phone" name="email" required onChange={function(e){
                 setemail(e.target.value)
             }}/>
      </div>
    </div>


    <div class="row">
      <div class="col-25">
        <label for="country">Country</label>
      </div>
      <div class="col-75">
        <select id="country" name="country" required  onChange={function(e){
                 
             }}>
          <option selected hidden value="0">Choose..</option>
          <option value="Nepal">Nepal</option>
          <option value="India">India</option>
          <option value="Other">Other</option>
        </select>
    </div>
    </div>
    <br/>

    {/* <h1>Room Details*</h1>

  <div class="row">
      <div class="col-25">
        <label for="roomtype">Room Type</label>
      </div>
      <div class="col-75">
        <select id="roomtype" name="roomtype" required onChange={function(e){
                 setroom(e.target.value)
             }} >
          <option selected hidden value="0">Choose..</option>  
          <option value="1">Double bed Appartment with A/C</option>
          <option value="2">Single Double bed + Single bed Appartment with A/C</option>
          <option value="3">Triple single bed Appartment with A/C</option>
          <option value="4">Single Double bed Deluxe room with A/C</option>
          <option value="5">Single Double bed Standard room with A/C</option>
          <option value="6">Single single bed room NON-A/C</option>
          <option value="7">Double single bed room NON-A/C</option>
          <option value="8  ">Triple single bed room NON-A/C</option> 
        </select>
      </div>
      </div>

    <div class="row">
      <div class="col-25">
        <label for="CheckIn">Check In</label>
      </div>
      <div class="col-75">
        <input type="date" name="cin" defaultValue={checkIn}  min={new Date().toISOString().split('T')[0]} required onChange={function(e){
                 setCheckIn(e.target.value)
             }} />
      </div>
    </div>


    <div class="row">
      <div class="col-25">
        <label for="CheckOut">Check Out</label>
      </div>
      <div class="col-75">
        <input type="date" id="checkout" name="cout" min={checkIn} defaultValue={checkout} required onChange={function(e){
                 setCheckout(e.target.value)
             }}/>
      </div>
    </div>


    <div class="row">
      <div class="col-25">
        <label for="NoP">Number of people(s)</label>
      </div>
      <div class="col-75">
        <select id="nOp" name="nop" required onChange={function(e){
                 setnop(e.target.value)
             }} >
        <option value="0" selected hidden>Choose..</option>
        <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
    
    <br/>
    
      <div class="captcha" align="center">
      <ReCAPTCHA 
    sitekey="6Lc4PaEiAAAAALeDaAji_7-XCprCfQB804R9_Mkv"
    onChange={handleThis}
  />
      </div>
   */}

  <div class="row">
    {/* <input type="submit" value="Book now" disabled={!verified} /> */}
    <Link to='/confirm' state={{data:data,fname:fname,lname:lname,email:email,phone:phone}} > <input type="submit" value="Next" onClick={handleSubmit}/></Link>
    

    </div>
    
    <br/>
             

    </form>
  
  <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
</div>);
}


export default Book;

