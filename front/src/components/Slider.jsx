import React,{useState} from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Redirect } from 'react-router';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Axios from "axios";



function Slider(){
    

    const [Cin,SetCin]=useState('');
    const [Cout,SetCout]=useState('');
    const [NoP,SetNoP]=useState('');



    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [redirect, setRedirect] = useState();
  


    const submitBooking = function(){
        Axios.post('http://localhost:3001/home',
        {Cin:Cin, Cout:Cout, NoP:NoP});

    }

    return(
    <div id="slides" class="cover-slides">
    <ul class="slides-container">
        <li class="text-center">
            <img src="./img/slider-01.jpg" alt=""/>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="m-b-20"><strong>Hello</strong></h1>
                        <p class="m-b-40">Something</p>
                        <p><button class="btn btn-lg btn-circle btn-outline-new-white" onClick={handleShow}>Book Now</button></p>
                    </div>
                </div>
            </div>
        </li>
        <li class="text-center">
            <img src="./img/slider-02.jpg" alt=""/>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="m-b-20"><strong>Hello2ndSlide</strong></h1>
                        <p class="m-b-40">Something</p>
                        <p><button class="btn btn-lg btn-circle btn-outline-new-white" onClick={handleShow}>Book Now</button></p>
                    </div>
                </div>
            </div>
        </li>
        <li class="text-center">
            <img src="./img/slider-03.jpg" alt=""/>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="m-b-20"><strong>Hello3rdSlide</strong></h1>
                        <p class="m-b-40">Something</p>
                        <p><a class="btn btn-lg btn-circle btn-outline-new-white" onClick={handleShow}>Book Now</a></p>
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
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
    <option value="5">Five</option>

  </Form.Control>
  </Col>
             </Row>
             <Modal.Footer>
          
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Link to='/Book' onClick={() => window.location.href="/Book"}>
            <Button variant="primary" onClick={function(){
                submitBooking();
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