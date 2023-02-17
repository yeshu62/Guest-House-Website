import React,{useState,useEffect,useRef,Component} from 'react';
import emailjs from '@emailjs/browser';
import swal from '@sweetalert/with-react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Resturant(){
    const form = useRef();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   

    const sendEmail = (e) => {
        e.preventDefault();
      
      
        emailjs.sendForm('service_43xmhgt', 'template_b32nurf', form.current, 'p87AIKhlpzHzrnl46')
          .then((result) => {
            swal("Your reservation has been received, You will be contacted shortly", "Meanwhile Please Take A Look At Our Menu", "success").then((confirmed) => {
                if(confirmed){
                  window.location.href="http://janakpurinn.com/menu";
                }
                }
                 
                )

              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
         
      };

    return( <div>
    <div class="contentboxx_Restro">
  <section class="box_Restro">
    <h1></h1>
    <p class="fancy1">We are pleased to offer our restaurant services to in-house guests of the hotel. To ensure the best possible dining experience for all guests, we require that any outside guests who wish to dine at the restaurant must make a reservation in advance of their visit. This allows us to accommodate everyone who wishes to enjoy our food and provides a more pleasant experience for all guests. We thank you for your understanding and look forward to welcoming you to the restaurant.</p>

    
  </section>
  <br></br>
  <button class="btn btn-lg btn-circle btn-outline-new-white" style={{"margin":"0 auto","display":"block"}} onClick={handleShow} >Reservation</button>
  <br></br>
  <p style={{"textAlign":"center"}}>Note: Reservation is only necessary for the guests who are NOT staying in the hotel. <br></br>Contact us on +977 41-591317 for further details.</p>
</div>
<Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Reservation</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
          
                                        <form class="restroSubmitButton" ref={form} onSubmit={sendEmail}>
                                        <input type="text" class="form-control form-group"  name="name" placeholder="Name" required />
                                        <input type="text" class="form-control form-group" name="email" placeholder="Email" required />
                                        <input type="text" class="form-control form-group" name="phone" placeholder="Phone" required />
                                        <input type="number" class="form-control form-group" name="number" min="1" max="10" placeholder="Number of people" required></input>
                                       
                                        <input type="time" id='timepicker' class="form-control form-group" name="time" placeholder="Expected time of arrival" required />
                                        <textarea class="form-control form-group" name="message" placeholder="Message" required></textarea>
                                        
                                        <input type="submit" style={{"margin":"0 auto", "display":"block"}} value="Submit" />
                                        
                                        </form>

                                        
                                    
                            
 
            <br></br>
             <Modal.Footer>
          
            <Button variant="outline-info" onClick={handleClose}>
              Close
            </Button>
            
            
          </Modal.Footer>
          </Modal.Body>
          
        </Modal>

</div>);
}

export default Resturant;