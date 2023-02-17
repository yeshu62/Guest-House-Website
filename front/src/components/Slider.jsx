import React,{useState} from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Axios from "axios";
import {useNavigate} from "react-router-dom";



function Slider(){
    

    const [Cin,SetCin]=useState('');
    const [Cout,SetCout]=useState('');
    const [NoP,SetNoP]=useState('');



    const [show, setShow] = useState(false);
    const [showUnav,setShowUnav] = useState(true);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseUnav = () => setShowUnav(true); //false this to show full booked
    const handleShowUnav = () => setShowUnav(false); //true this to show full booked


    // const submitBooking = function(){
    //     Axios.post('http://localhost:3001/home',
    //     {Cin:Cin, Cout:Cout, NoP:NoP});

    // }

    return(
    <div id="slides" class="cover-slides">

{/* 
    <Modal show={showUnav} onHide={handleCloseUnav}>
          <Modal.Header closeButton>
            <Modal.Title>Bookings not available!</Modal.Title>

          </Modal.Header>
          <Modal.Body>
            We are fully booked till 4th Dec 2022. Please contact us for further queries.
          </Modal.Body>

          <Modal.Footer>
            Tell.No.:977-41-591317 <br></br>
            Mobile No.:977-9765263291/977-9840149464
          </Modal.Footer>
          
          
        </Modal> */}

    <ul class="slides-container">
        <li class="text-center">
        <img style={{"filter":"brightness(40%)"}} src="https://i.ibb.co/D9CtStz/4.jpg" alt="4" border="0"></img>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="m-b-20"><strong>Hotel Janakpur Inn</strong></h1>
                        <p class="m-b-40">Feel like home</p>
                        <p><button class="btn btn-lg btn-circle btn-outline-new-white" onClick={handleShow} >Request a booking</button></p>
                    </div>
                </div>
            </div>
        </li>
        <li class="text-center">
        <img style={{"filter":"brightness(40%)"}} src="https://i.ibb.co/HdTJFdG/doublebedapp2.jpg" alt="doublebedapp2" border="0"></img>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="m-b-20"><strong>We’re more than just a room</strong></h1>
                        <p class="m-b-40">With us, you’re home</p>
                        <p><button class="btn btn-lg btn-circle btn-outline-new-white" onClick={handleShow} >Request a Booking</button></p>
                    </div>
                </div>``
            </div>
        </li>
        <li class="text-center">
        <img style={{"filter":"brightness(40%)"}} src="https://i.ibb.co/tBchncL/2.jpg" alt="2" border="0"></img>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="m-b-20"><strong>Your pleasure is our principle</strong></h1>
                        <p class="m-b-40">A warm welcome awaits</p>
                        <p><a class="btn btn-lg btn-circle btn-outline-new-white" onClick={handleShow} >Request a booking</a></p>
                    </div>
                </div>
            </div>
        </li>
    </ul>

    <div class="slides-navigation">
        <a href="#" class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
        <a href="#" class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
    </div>

    <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Booking</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
          <Form>
          
             <Row>
             <Col><Form.Label>Check-In</Form.Label>
             <Form.Control type='Date' placeholder="dd-mm-yyyy" min={new Date().toISOString().split('T')[0]} name="Cin" required onChange={function(e){
               const cin = e.target.value;
                 SetCin(cin)
              

             }}  /></Col>
             </Row>
             <br></br>
             <Row>
             <Col><Form.Label>Check-Out</Form.Label>
             <Form.Control type='Date' id="ccout" min={Cin} placeholder="dd-mm-yyyy" name="Cout" onChange={function(e){
                // const cout = e.target.value;
                // if(Cin<cout)
                //   {  
                // SetCout(cout)
                //   }

                //   else{
                //     alert("Checkout date cannot be before CheckIn date");
                //     document.getElementById("ccout").value="";
                    
                //   }

                SetCout(e.target.value)
             }} /></Col>
             </Row>
             <br></br>
             <Row>
             <Col><Form.Label>Number of People(s)</Form.Label>
             <Form.Control
    as="select"
    className="my-1 mr-sm-2"
    id="inlineFormCustomSelectPref"
    custom
    name="NoP" onChange={function(e){
                 SetNoP(e.target.value)
    }} 
  >
    <option value="0">Choose...</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>

  </Form.Control>
  </Col>
             </Row>
             <Modal.Footer>
          
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Link to='/rooms' state={{State1:Cin,State2:Cout}}>
            <Button variant="primary" onClick={function(){
                
            }}>
                Book Now!
              
            </Button></Link>
          </Modal.Footer>
            </Form>
          </Modal.Body>
          
        </Modal>

            
    </div>

    );
}

export default Slider;