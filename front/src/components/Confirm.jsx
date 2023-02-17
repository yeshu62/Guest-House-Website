import React,{useState,useEffect,useRef,Component} from 'react';
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom'

import swal from '@sweetalert/with-react'

import ReCAPTCHA from "react-google-recaptcha";
import { setTextRange } from 'typescript';




function Confirm(){

  const form = useRef();

const [phone,setphone]=useState("");
const [email,setemail]=useState("");
const [name,setName]=useState("");
const [cin,setcin]=useState("");
const [cout,setcout]=useState("");
const [room,setRoom]=useState([]);
const [fin,setFin]=useState(""); 
const [tax,setTax]=useState(""); 
const [sc,setSc]=useState(""); 
const [total,setTotal]=useState(""); 
const[verified,setVerified]=useState(false);

const [selectedRoom,setSelectRoom]=useState([]);
const [quantity,setQuantity]=useState([]);




var selectedRoomArr=[];
var quantityRoomArr=[];


const location = useLocation();
const data = location.state;


function handle(){
  setVerified(true)
}

const handleSubmit = (e) => {

  var templateParams = {
    name: name,
    email: email,
    cin:cin,
    cout:cout,
    phone:phone,  
    fin:fin,
    total:total,
    selectedRoom:selectedRoom,
    quantity:quantity
  };


    console.log(selectedRoom)
    e.preventDefault();
  
    if(verified){
      
    // emailjs.sendForm('service_43xmhgt', 'template_srzismx', form.current, 'p87AIKhlpzHzrnl46')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });

    emailjs.send('service_43xmhgt', 'template_srzismx', templateParams, 'p87AIKhlpzHzrnl46')
      
      swal("Your booking request has been received", "You will be contacted shortly", "success").then((confirmed) => {
      if(confirmed){
        window.location.href="http://janakpurinn.com";
      }
      }
       
      )
        
        
    }
  
    else{
      swal("Check capcha and try again lol", `...`, "error")  
    }
      
  };


useEffect(() => {


    
if(data.data.room){
    setRoom(data.data.room);

    }
    
    if(data.data.prev){
    setcin(data.data.prev.State1)
    setcout(data.data.prev.State2)
    }
    
    if(data.phone){
    setphone(data.phone)
    }
    
    if(data.email){
    setemail(data.email)
    }
    
    if(data.fname && data.lname){
    setName(data.fname+" "+ data.lname)
    }

    setFin(sum)
    var sc = 0.10*sum;
    setSc(sc)
    var tax = (sum+sc)*0.13; 
    setTax(tax)
    var total = sum + sc + tax
    setTotal(total)
    });


    var sum = 0;
 





  return(<div>

<div class="containerConfirm">
  <div class="row">
    <div class="col-md-8 col-sm-6 col-xs-12 col-md-pull-6 col-sm-pull-6">
                      <div class="panel panel-default">
                          <div class="panel-heading text-center"><h4><strong>Room confirmation</strong></h4></div>
                          <div class="panel-body">
                          <table class="table table-light">
    <thead>
      <tr>
        <th>Product</th>
        <th>Price(Nrs)</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>

   

    {room.map((d,a) => {
       
        
        return (
                    d.map((r,i)=>{

                     
                      
                        if(a==1 && r>0){
                            sum = sum + room[2][i]*room[1][i];
                            selectedRoomArr.push(room[0][i]);
                            quantityRoomArr.push(room[1][i]);
                            return(
                        <tr>
                    <td data-label="ROOM">
                        <p id="prodName">{room[0][i]}<br/></p>
                    </td>
                    <td data-label="RATE" class="rate">{room[2][i]}</td>
                    <td data-label="QUANTITY">
                        <input type="number" defaultValue={room[1][i]} class="quantity" min="1" max="5" disabled />

                        
                    </td>
                    <td data-label="TOTAL" class="itemTotal">{room[2][i] * room[1][i]}  </td>
                    
                </tr> 
                      )  }
                      
                
                })
                )
                
    }
    )
    }
    
                   
  </tbody>
  </table>
    </div>
    </div>
      
    <div class="panel-heading text-center">
                        <h4 style={{padding:"30px 0 20px 0"}}><strong>Details confirmation</strong></h4>
                    </div>

<section id="address-form">


<form id='formFinal' ref={form} onSubmit={handleSubmit}> 
  <div class="form-row">
        <div class="form-group col-md-6">
      <label for="inputname">Name</label>
      <input type="text" class="form-control" id="inputname" required defaultValue={name}  name="name" onChange={function(e){
        setName(e.target.value)
      }}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" required defaultValue={email}  name="email" onChange={function(e){
        setemail(e.target.value)
      }}/>
    </div>

  </div>
    <div class="form-row">
        <div class="form-group col-md-6">
      <label for="inputnumber1">Contact Number</label>
      <input type="number" class="form-control" id="inputnumber1" required defaultValue={phone}  name="phone" onChange={function(e){
        setphone(e.target.value)
      }}/>
    </div>
   

  </div>
  <div class="form-group">
    <label for="inputAddress">Check In</label>
    <input type="date" class="form-control" id="inputAddress"  name="cin" required min={new Date().toISOString().split('T')[0]} defaultValue={cin} onChange={function(e){
        setcin(e.target.value)
      }}/>
  </div>
  <div class="form-group">
    <label for="inputAddress">Check Out</label>
    <input type="date" class="form-control" id="inputAddress"  name="cout" min={cin} required defaultValue={cout} onChange={function(e){
        setcout(e.target.value)
      }}/>
  </div>

  <div class="captcha" align="center">
      <ReCAPTCHA 
    sitekey="6Lc4PaEiAAAAALeDaAji_7-XCprCfQB804R9_Mkv"
    onChange={handle} 
  />
      </div>

</form>
 

</section>

                  </div>
                  <br></br>
                  <br></br>
                  <br></br>

    <div class="col-md-4 col-sm-6 col-xs-12 col-md-push-6 col-sm-push-6" >
               <div class="panel panel-default" >
                    <div class="panel-heading text-center">
                        <h4 style={{padding:"30px 0 20px 0"}}><strong>Booking overview</strong></h4>
                    </div>
                    <div class="panel-body">
                        <div class="col-md-12"><strong>Subtotal:</strong><div class="pull-right">रू{fin}</div></div>
                        
                        <div class="col-md-12"><strong>Service Charge(10%):</strong><div class="pull-right">रू{sc}</div></div>
                        <div class="col-md-12"><strong>Tax (13%):</strong><div class="pull-right">रू{tax}</div>

                                  <hr></hr>
                                  </div>
                                  <div class="col-md-12">
                                      <strong>Order Total</strong>
                                      <div class="pull-right">रू{total}</div>
                                      <hr></hr>
                                  </div>
                            
                                 

                          </div>
                                
<button type='submit' form='formFinal' class="finalButton" disabled={!verified} onClick={function(e){
                  setSelectRoom(selectedRoomArr);
                  setQuantity(quantityRoomArr);
                  
                }}><span class="alertFor" >Fill captcha to continue</span>
               
                    </button>
                    

                      </div>
                     
                  </div>
  </div>
  
</div>
</div>);
}


export default Confirm;

