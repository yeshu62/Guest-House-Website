import React,{useState,useEffect,useRef,Component} from 'react';
import emailjs from '@emailjs/browser';


function ContactUs(){

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
      
      
        emailjs.sendForm('service_43xmhgt', 'template_b32nurf', form.current, 'p87AIKhlpzHzrnl46')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          alert("Successfully sent!");
      };


    return(<div>
    <section class="contact_us">
        <div class="container">
            <div class="row">
                <div class="col-md-10 offset-md-1">
                    <div class="contact_inner">
                        <div class="row">
                            <div class="col-md-10">
                                <div class="contact_form_inner">
                                    <div class="contact_field">
                                        <h3>Contact Us</h3>
                                        <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                        <form ref={form} onSubmit={sendEmail}>
                                        <input type="text" class="form-control form-group"  name="name" placeholder="Name" required />
                                        <input type="text" class="form-control form-group" name="email" placeholder="Email" required />
                                        <textarea class="form-control form-group" name="msg" placeholder="Message" required></textarea>
                                        <input type="submit" value="Submit" />
                                        
                                        </form>

                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="right_conatct_social_icon d-flex align-items-end">
                                   <div class="socil_item_inner d-flex">
                                      <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
                                      <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                      <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div class="contact_info_sec">
                            <h4>Contact Info</h4>
                            <div class="d-flex info_single align-items-center">
                                <i class="fas fa-headset"></i>
                                <span>+977 41-591317</span>
                            </div>
                            <div class="d-flex info_single align-items-center">
                                <i class="fas fa-envelope-open-text"></i>
                                <span>janakpurinnhna2079@gmail.com</span>
                            </div>
                            <div class="d-flex info_single align-items-center">
                                <i class="fas fa-map-marked-alt"></i>
                                <a href="https://www.google.com/maps/place/Hotel+JanakpurInn/@26.7370373,85.9183426,15z/data=!4m5!3m4!1s0x0:0xc733976a1e32e236!8m2!3d26.7370373!4d85.9183426"><span style={{color:"white"}}>Find us on google maps</span></a>
                            </div>
            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  
</div>);
}

export default ContactUs;