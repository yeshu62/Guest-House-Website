import React,{useState} from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import {Link} from 'react-router-dom';
import Axios from "axios";

import {useNavigate} from "react-router-dom";

import Book from './Book';


function Slider(){
    

    const [Cin,SetCin]=useState('');
    const [Cout,SetCout]=useState('');
    const [NoP,SetNoP]=useState('');

    const [confirm,setConfirm]=useState(false);
    const navigate = useNavigate();


    const submitBooking = (e) => {
        e.preventDefault();
        setConfirm(true);
        navigate('/Book', {state: Cin});
      };


    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // const submitBooking = function(){
    //     Axios.post('http://localhost:3001/home',
    //     {Cin:Cin, Cout:Cout, NoP:NoP});

    // }

    return(
    <div id="slides" class="cover-slides">
    <ul class="slides-container">
        <li class="text-center">
        <img src="https://i.ibb.co/k91zQ9m/4.jpg" alt="4" border="0"></img>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="m-b-20"><strong>Hotel Janakpur Inn</strong></h1>
                        <p class="m-b-40">Feel like home</p>
                        <p><button class="btn btn-lg btn-circle btn-outline-new-white" onClick={handleShow}>Request a booking</button></p>
                    </div>
                </div>
            </div>
        </li>
        <li class="text-center">
        <img src="https://i.ibb.co/P9qTp0F/doublebedapp2.jpg" alt="doublebedapp2" border="0"></img>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="m-b-20"><strong>We’re more than just a room</strong></h1>
                        <p class="m-b-40">With us, you’re home</p>
                        <p><button class="btn btn-lg btn-circle btn-outline-new-white" onClick={handleShow}>Request a Booking</button></p>
                    </div>
                </div>``
            </div>
        </li>
        <li class="text-center">
        <img src="https://i.ibb.co/xLrvTRr/2.jpg" alt="2" border="0"></img>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="m-b-20"><strong>Your pleasure is our principle</strong></h1>
                        <p class="m-b-40">A warm welcome awaits</p>
                        <p><a class="btn btn-lg btn-circle btn-outline-new-white" onClick={handleShow}>Request a booking</a></p>
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
             <Form.Control type='Date' placeholder="Date" name="Cin" onChange={function(e){
                 SetCin(e.target.value)
             }} /></Col>
             </Row>
             <br></br>
             <Row>
             <Col><Form.Label>Check-Out</Form.Label>
             <Form.Control type='Date' placeholder="Date" name="Cout" onChange={function(e){
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
            <Link to='/Book' onClick={() => window.location.href="/Book/"+Cin+"/"+Cout+"/"+NoP}>
            <Button variant="primary" onClick={function(){
                submitBooking();
            }}>
                Book Now!
              
            </Button></Link>
          </Modal.Footer>
            </Form>
          </Modal.Body>
          
        </Modal>

        <Book data="xx"/>

            
    </div>

    );
}

export default Slider;