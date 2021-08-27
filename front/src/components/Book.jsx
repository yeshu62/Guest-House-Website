import React,{useState,useEffect} from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Axios from "axios";


function Book(){


  const [checkIn,setCheckIn]=useState("");
  const [checkout,setCheckout]=useState("");
  const [nop,setnop]=useState("");
  const [title,settitle]=useState("");
  const [fname,setFname]=useState("");
  const [lname,setlname]=useState("");
  const [room,setroom]=useState("");
  const [country,setcountry]=useState("");
  const [phone,setphone]=useState("");


  const submitBooking = function(){
    Axios.post('http://localhost:3001/Book',
    {checkIn:checkIn, checkout:checkout, nop:nop, fname:fname, lname:lname, room:room, country:country, phone:phone});

}


  useEffect(function(){
    Axios.get('http://localhost:3001/Book').then((Response)=>{
      console.log(Response);
      setCheckIn(Response.data[0]);
      setCheckout(Response.data[1]);
      setnop(Response.data[2]);

    });
  })
  
    return(<div class="F">
    <div class="containerForm">
    <h1>Personal Details*</h1>
  <form>
  <div class="row">
      <div class="col-25">
        <label for="Title">Title</label>
      </div>
      <div class="col-75">
        <select id="Title" name="title"  onChange={function(e){
                 settitle(e.target.value)
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
        <input type="text" id="fname" name="firstname" onChange={function(e){
                 setFname(e.target.value)
             }}/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Last Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname"  onChange={function(e){
                 setlname(e.target.value)
             }}/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="contact">Contact number</label>
      </div>
      <div class="col-75">
        <input type="tel" id="cnumber" name="cnumber"  onChange={function(e){
                 setphone(e.target.value)
             }}/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="country">Country</label>
      </div>
      <div class="col-75">
        <select id="country" name="country"  onChange={function(e){
                 setcountry(e.target.value)
             }}>
          <option selected hidden value="0">Choose..</option>
          <option value="Nepal">Nepal</option>
          <option value="India">India</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  </form>
</div>
<div class="containerForm">
    <h1>Room Details*</h1>
  <form>
  <div class="row">
      <div class="col-25">
        <label for="roomtype">Room Type</label>
      </div>
      <div class="col-75">
        <select id="roomtype" name="roomtype"  onChange={function(e){
                 setroom(e.target.value)
             }} >
          <option selected hidden value="0">Choose..</option>  
          <option value="1">Standard Single Room</option>
          <option value="2">Standard Double Room</option>
          <option value="3">Studio Flat</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="CheckIn">Check In</label>
      </div>
      <div class="col-75">
        <input type="date" name="checkINf" defaultValue={checkIn}  onChange={function(e){
                 setCheckIn(e.target.value)
             }} />
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="CheckOut">Check Out</label>
      </div>
      <div class="col-75">
        <input type="date" id="checkout" name="checkOutf" defaultValue={checkout}  onChange={function(e){
                 setCheckout(e.target.value)
             }}/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="NoP">Number of people(s)</label>
      </div>
      <div class="col-75">
        <select id="nOp" name="nop"  onChange={function(e){
                 setnop(e.target.value)
             }} >
        <option value="0" selected hidden>{nop}</option>
        <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
    <br/>
    <button type="submit" onClick={function(){
                submitBooking();
            }}>
        Submit
    </button>
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


