import React from "react"
import {useState,useEffect,useRef,Component} from 'react';
import { Modal } from 'react-bootstrap';
import { resolveModuleName } from "typescript";
import {useParams} from 'react-router';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import Select from 'react-select'



function Roooms(){
    
const location = useLocation();
const Prevdata = location.state;
const options=[]

const[verified1,setVerified1]=useState(true);
const[verified2,setVerified2]=useState(true);
const[verified3,setVerified3]=useState(true);
const[verified4,setVerified4]=useState(true);
const[verified5,setVerified5]=useState(true);
const[verified6,setVerified6]=useState(true);
const[verified7,setVerified7]=useState(true);
const[verified8,setVerified8]=useState(true);

    var array1 = [['Double bed Appartment with A/C','1 Double bed + Single bed Appartment with A/C','Triple single bed Appartment with A/C','1 Double bed Deluxe room with A/C','1 Double bed Standard room with A/C','1 single bed room NON-A/C','2 single bed room NON-A/C','3 single bed room NON-A/C'],[0,0,0,0,0,0,0,0],[4000,4500,4500,3500,3000,1200,2000,3000],[1,2,1,2,2,3,2,1]];
    const [product,setProduct]=useState([]);
    const [quantity,setQuantity]=useState([]);

    const [room,setRoom]=useState(array1);

    function handleClick(){
        console.log();
      }

      useEffect(() => {
        if(room[3][0]<1){
            setVerified1(false);
        }
        if(room[3][1]<1){
            setVerified2(false);
        }
        if(room[3][2]<1){
            setVerified3(false);
        }
        if(room[3][3]<1){
            setVerified4(false);
        }
        if(room[3][4]<1){
            setVerified5(false);
        }
        if(room[3][5]<1){
            setVerified6(false);
        }
        if(room[3][6]<1){
            setVerified7(false);
        }
        if(room[3][7]<1){
            setVerified8(false);
        }
        
    })
      
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      const rows=[];
    return(<div class="roomDe">
 
 <button class="cartButton" onClick={function(e){
        
        handleShow();
    }}>Open Cart</button>

<Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Room selection</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
          <div class="content">

  <table class="items">
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
                            var x  = room[3][i];
 
                            return(
                               
                        <tr>
                    <td data-label="ROOM">
                        <p id="prodName">{room[0][i]}<br/></p>
                    </td>
                    <td data-label="RATE" class="rate">{room[2][i]}</td>

                    <td data-label="QUANTITY">
                        <select id="foo" style={{width:"60px"}} defaultValue={room[1][i]} class="quantity" onChange={function(e){
                            room[1][i]=e.target.value;
                            
                    }}>    
                    <option value="1" hidden={x<1}>1</option>
                    <option value="2" hidden={x<2} >2</option>
                    <option value="3" hidden={x<3}>3</option>
                    <option value="4" hidden={x<4} >4</option>
                                            

                        </select>
                        

                        {/* <Select options={options} class="quantity"  onChange={function(e){
                            console.log(e.value)
                            room[1][i]=e.value;

                    }} /> */}

                    {/* </td> */}
                    {/* <td data-label="QUANTITY">
                        <input type="number" defaultValue={room[1][i]} class="quantity" min="1" max="5" onChange={function(e){
                            room[1][i]=e.target.value;
                        }}/> */}

                        <a href="#" class="remove" onClick=
                        {function(e){
                            for(var k = 0; k < 8; k++){
                                     if(room[0][k] == room[0][i]){
                                                 var index = k;
                                    }
                            }
                            

                        if (index !== -1) {
                             room[1][index]=0;
                        } 
                        
                        handleClose();
                        

                        }}> <img src="/img/remove.png" style={{height:"25px",width:"25px"}}></img></a>
                        
                    </td>
                    <td data-label="TOTAL" class="itemTotal">4000</td>
                </tr> 
                      ) }
                      
                
                })
                )
                
    }
    
    )
    
    }
                   
  </tbody>
  </table>
  
  <div class="cost">


  <Link to='/Book' state={{room:room,prev:Prevdata}} > <a class="cta Next" href="#"><strong>Next &raquo;</strong>  </a></Link>
    



    <a class="cta" href="#" onClick={function(){
                            handleClose();
    }}><strong> Add More</strong> &raquo;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
  </div>
</div> 
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
          </Modal>

  <div class="how-container">
      <div class="left-container">
      <div class="left-content">
      <a class="lightbox" href="/img/4.jpg">
                        <img class="img-fluid" style={{"minHeight":"300px","minWidth":"400px","maxHeight":"300px","maxWidth":"400px"}} src="/img/4.jpg" alt="Gallery Images"/>
                    </a>  
      </div>
    </div>
    <div class="right-container">
        <div class="right-content">
        <div class="roomdeets">
                        <h1>Double bed Appartment with A/C</h1>
                        <h3>A luxurious room with a double bed, flat screen tv, sofa, tea table, attached washroom, wooden cabinets, kitchen and kitchenwares</h3>
                        <div class="row">
                            <div class="col-md-6">
                                <h4>
                                    <img src="/img/wifi.png"/>
                                       Fast wifi</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/air-conditioner.png"/>
                                     Air conditioning</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/kitchen-set.png"/> Kitchen</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/shower.png"/>
                                    24 hr running water</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/roomservice.png"/>Room service</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/silent.png"/>
                                    Silent neighbourhood</h4>
                            </div>

                            <div class="col-md-6">
                                <h4>
                                <img src="/img/fridge.png"/>Freezer</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/tv-monitor.png"/>
                                    Net TV</h4>
                            </div>
                        </div>
                        <p>Price: रू 4000 + taxes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Total Available: {room[3][0]} &nbsp;&nbsp; <button class="selectRoom" disabled={!verified1} value="Double bed Appartment with A/C" onClick={
                            
                            function(e){
                                for(var k = 0; k < room.length; k++){
                                    
                                     if(room[0][k] == e.target.value){
                                                 var i = k;
                                    }
}
                                    
                                    if(room[1][i]==0){
                                        room[1][i]++;
                                    }
                                    
                                                                
        
                                
                                    handleShow();
                                  
                 }}>Check Availability</button></p>
                    </div>

        </div>
    </div>
  </div>



  <div class="how-container">
      <div class="left-container">
      <div class="left-content">
      <a class="lightbox" href="/img/doublebedapp2.jpg">
                        <img class="img-fluid" style={{"minHeight":"300px","minWidth":"400px","maxHeight":"300px","maxWidth":"400px"}} src="/img/doublebedapp2.jpg" alt="Gallery Images"/>
                    </a>   
      </div>
    </div>
    <div class="right-container">
        <div class="right-content">
        <div class="roomdeets">
                <h1>1 Double bed + Single bed Appartment with A/C</h1>
                        <h3>A luxurious room with a double bed, flat screen tv, single bed, tea table, attached washroom, wooden cabinets, kitchen and kitchenwares</h3>
                        <div class="row">
                            <div class="col-md-6">
                                <h4>
                                    <img src="/img/wifi.png"/>
                                       Fast wifi</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/air-conditioner.png"/>
                                     Air conditioning</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/kitchen-set.png"/> Kitchen</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/shower.png"/>
                                    24 hr running water</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/roomservice.png"/>Room service</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/silent.png"/>
                                    Silent neighbourhood</h4>
                            </div>

                            <div class="col-md-6">
                                <h4>
                                <img src="/img/fridge.png"/>Freezer</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/tv-monitor.png"/>
                                    Net TV</h4>
                            </div>
                        </div>
                        <p>Price:  रू 4500 + taxes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Total Available: {room[3][1]} &nbsp;&nbsp; <button class="selectRoom" disabled={!verified2} value="1 Double bed + Single bed Appartment with A/C"
                         onClick={
                            
                            function(e){
                                for(var k = 0; k < room.length; k++){
                                   
                                     if(room[0][k] == e.target.value){
                                                 var i = k;
                                    }
}
                                    

                                    if(room[1][i]==0){
                                        room[1][i]++;
                                    }
                                                                
                                
                            
                                
                                    handleShow();
                                  
                 }}>Check Availability</button></p>
                    </div>

        </div>
    </div>
  </div>

  {/* <div class="how-container">
      <div class="left-container">
      <div class="left-content">
      <a class="lightbox" href="/img/err.png">
                        <img class="img-fluid" src="/img/err.png" alt="Gallery Images"/>
                    </a> 
      </div>
    </div>
    <div class="right-container">
        <div class="right-content">
        <div class="roomdeets">
                <h1>Triple single bed Appartment with A/C</h1>
                        <h3>A luxurious room with three single beds, flat screen tv, tea table, attached washroom, wooden cabinets, kitchen and kitchenwares</h3>
                        <div class="row">
                            <div class="col-md-6">
                                <h4>
                                    <img src="/img/wifi.png"/>
                                       Fast wifi</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/air-conditioner.png"/>
                                     Air conditioning</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/kitchen-set.png"/> Kitchen</h4>
                            </div>
                            <div class="col-md-6">  
                                <h4>
                                <img src="/img/shower.png"/>
                                    24 hr running water</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/roomservice.png"/>Room service</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/silent.png"/>
                                    Silent neighbourhood</h4>
                            </div>

                            <div class="col-md-6">
                                <h4>
                                <img src="/img/fridge.png"/>Freezer</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/tv-monitor.png"/>
                                    Net TV</h4>
                            </div>
                        </div>
                        <p>Price:  रू 4500 + taxes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Total Available: {room[3][2]} &nbsp;&nbsp;<button class="selectRoom" disabled={!verified3} value="Triple single bed Appartment with A/C" onClick={
                            
                            function(e){
                                for(var k = 0; k < 7; k++){
                                   
                                     if(room[0][k] == e.target.value){
                                                 var i = k;
                                    }
}
                                    

if(room[1][i]==0){
                                        room[1][i]++;
                                    }                      
                                
                               
                                
                                    handleShow();
                                  
                 }}>Check Availability</button></p>
                    </div>

        </div>
        </div>
  </div> */}

  <div class="how-container">
      <div class="left-container">
      <div class="left-content">
      <a class="lightbox" href="/img/withbalcony.jpg">
                        <img class="img-fluid" style={{"minHeight":"300px","minWidth":"400px","maxHeight":"300px","maxWidth":"400px"}} src="/img/withbalcony.jpg" alt="Gallery Images"/>
                    </a>   
      </div>
    </div>
    <div class="right-container">
        <div class="right-content">
        <div class="roomdeets">
                <h1>1 Double bed Deluxe room with A/C</h1>
                        <h3>A deluxe room with a double bed, flat screen tv, attached washroom, wooden closet, balcony and Dressing table</h3>
                        <div class="row">
                            <div class="col-md-6">
                                <h4>
                                    <img src="/img/wifi.png"/>
                                       Fast wifi</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/air-conditioner.png"/>
                                     Air conditioning</h4>
                            </div>

                            <div class="col-md-6">
                                <h4>
                                <img src="/img/balcony.png"/>
                                     Balcony</h4>
                            </div>
                        
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/shower.png"/>
                                    24 hr running water</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/roomservice.png"/>Room service</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/silent.png"/>
                                    Silent neighbourhood</h4>
                            </div>

                           
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/tv-monitor.png"/>
                                    Net TV</h4>
                            </div>
                        </div>
                        <p>Price:  रू 3500 + taxes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Total Available: {room[3][3]} &nbsp;&nbsp;<button class="selectRoom" disabled={!verified4} value="1 Double bed Deluxe room with A/C" onClick={
                            
                            function(e){
                                for(var k = 0; k < 7; k++){
                                   
                                     if(room[0][k] == e.target.value){
                                                 var i = k;
                                    }
}
                                   

if(room[1][i]==0){
                                        room[1][i]++;
                                    }                       
                                
                              
                                
                                    handleShow();
                                  
                 }}>Check Availability</button></p>
                    </div>

        </div>
        </div>
  </div>

  <div class="how-container">
      <div class="left-container">
      <div class="left-content">
      <a class="lightbox" href="/img/dbwb2.jpg">
                        <img class="img-fluid" style={{"minHeight":"300px","minWidth":"400px","maxHeight":"300px","maxWidth":"400px"}} src="/img/dbwb2.jpg" alt="Gallery Images"/>
                    </a>   
      </div>
    </div>
    <div class="right-container">
        <div class="right-content">
        <div class="roomdeets">
                <h1>1 Double bed Standard room with A/C</h1>
                        <h3>A standard room with a double bed, flat screen tv, attached washroom, furniture closet,washroom and Dressing table</h3>
                        <div class="row">
                            <div class="col-md-6">
                                <h4>
                                    <img src="/img/wifi.png"/>
                                       Fast wifi</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/air-conditioner.png"/>
                                     Air conditioning</h4>
                            </div>
                           
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/shower.png"/>
                                    24 hr running water</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/roomservice.png"/>Room service</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/silent.png"/>
                                    Silent neighbourhood</h4>
                            </div>

                           
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/tv-monitor.png"/>
                                    Net TV</h4>
                            </div>
                        </div>
                        <p>Price:  रू 3000 + taxes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Total Available: {room[3][4]} &nbsp;&nbsp;<button class="selectRoom" disabled={!verified5} value="1 Double bed Standard room with A/C" onClick={
                            
                            function(e){
                                for(var k = 0; k < 7; k++){
                                  
                                     if(room[0][k] == e.target.value){
                                                 var i = k;
                                    }
}
                                 

if(room[1][i]==0){
                                        room[1][i]++;
                                    }
                                                                
                                
                             
                                
                                    handleShow();
                                  
                 }}>Check Availability</button></p>
                    </div>

        </div>
        </div>
  </div>

  <div class="how-container">
      <div class="left-container">
      <div class="left-content">
      <a class="lightbox" href="https://i.ibb.co/qJLzpP1/Whats-App-Image-2023-01-08-at-14-32-48.jpg">
                        <img class="img-fluid" style={{"minHeight":"300px","minWidth":"400px","maxHeight":"300px","maxWidth":"400px"}} src="https://i.ibb.co/qJLzpP1/Whats-App-Image-2023-01-08-at-14-32-48.jpg" alt="Gallery Images"/>
                    </a>  
      </div>
    </div>
    <div class="right-container">
        <div class="right-content">
        <div class="roomdeets">
                <h1>1 single bed room NON-A/C</h1>
                        <h3>A comfortable room with a single bed, flat screen tv, furniture closet (NON ATTACHED WASHROOM)</h3>
                        <div class="row">
                            <div class="col-md-6">
                                <h4>
                                    <img src="/img/wifi.png"/>
                                       Fast wifi</h4>
                            </div>
                           
                           
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/shower.png"/>
                                    24 hr running water</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/roomservice.png"/>Room service</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/silent.png"/>
                                    Silent neighbourhood</h4>
                            </div>

                            
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/tv-monitor.png"/>
                                    Net TV</h4>
                            </div>
                        </div>
                        <p>*Washroom is only shared among the people staying in this room</p>
                        <p>Price:  रू 1200 + taxes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Total Available: {room[3][5]} &nbsp;&nbsp; <button class="selectRoom" disabled={!verified6} value="1 single bed room NON-A/C" onClick={
                            
                            function(e){
                                for(var k = 0; k < 8; k++){
                                  
                                     if(room[0][k] == e.target.value){
                                                 var i = k;
                                    }
}
                                  

if(room[1][i]==0){
                                        room[1][i]++;
                                    }
                                                                
                             
                                
                                    handleShow();
                                  
                 }}>Check Availability</button></p>
                    </div>

        </div>
        </div>
  </div>

  <div class="how-container">
      <div class="left-container">
      <div class="left-content">
      <a class="lightbox" href="/img//img/2singlebed.jpg">
                        <img class="img-fluid" style={{"minHeight":"300px","minWidth":"400px","maxHeight":"300px","maxWidth":"400px"}} src="/img/2singlebed.jpg" alt="Gallery Images"/>
                    </a> 
      </div>
    </div>
    <div class="right-container">
        <div class="right-content">
        <div class="roomdeets">
                        <h1>2 single bed room NON-A/C</h1>
                        <h3>A comfortable room with two single bed, flat screen tv and two furniture closet (NON ATTACHED WASHROOM)</h3>
                        <div class="row">
                            <div class="col-md-6">
                                <h4>
                                    <img src="/img/wifi.png"/>
                                       Fast wifi</h4>
                            </div>
                           
                            
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/shower.png"/>
                                    24 hr running water</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/roomservice.png"/>Room service</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/silent.png"/>
                                    Silent neighbourhood</h4>
                            </div>

                           
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/tv-monitor.png"/>
                                    Net TV</h4>
                            </div>
                        </div>

                        


                        <p>*Washroom is only shared among the people staying in this room</p>
                        <p>Price: रू 2000 + taxes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Total Available: {room[3][6]} &nbsp;&nbsp; <button class="selectRoom" disabled={!verified7} value="2 single bed room NON-A/C" onClick={
                            
                            function(e){
                                for(var k = 0; k < 8; k++){
                                  
                                     if(room[0][k] == e.target.value){
                                                 var i = k;
                                    }
}
                                 

if(room[1][i]==0){
                                        room[1][i]++;
                                    }
                                                                
                                
                             
                                
                                    handleShow();
                                  
                 }}>Check Availability</button></p>
                    </div>

        </div>
        </div>
  </div>

  <div class="how-container">
      <div class="left-container">
      <div class="left-content">
      <a class="lightbox" href="https://i.ibb.co/MS4559Y/Whats-App-Image-2023-01-08-at-14-32-34.jpg">
                        <img class="img-fluid" style={{"minHeight":"300px","minWidth":"400px","maxHeight":"300px","maxWidth":"400px"}} src="https://i.ibb.co/MS4559Y/Whats-App-Image-2023-01-08-at-14-32-34.jpg" alt="Gallery Images"/>
                    </a>  
      </div>
    </div>
    <div class="right-container">
        <div class="right-content">
        <div class="roomdeets">
                        <h1>3 single bed room NON-A/C</h1>
                        <h3>A comfortable room with 3 single bed, flat screen tv and 3 furniture closet (NON ATTACHED WASHROOM)</h3>
                        <div class="row">
                            <div class="col-md-6">
                                <h4>
                                    <img src="/img/wifi.png"/>
                                       Fast wifi</h4>
                            </div>
                            
                            
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/shower.png"/>
                                    24 hr running water</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/roomservice.png"/>Room service</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/silent.png"/>
                                    Silent neighbourhood</h4>
                            </div>

                          
                            <div class="col-md-6">
                                <h4>
                                <img src="/img/tv-monitor.png"/>
                                    Net TV</h4>
                            </div>
                        </div>
                        <p>*Washroom is only shared among the people staying in this room</p>
                        <p>Price: रू 3000 + taxes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Total Available: {room[3][7]} &nbsp;&nbsp;  <button class="selectRoom" disabled={!verified8} value="3 single bed room NON-A/C"onClick={
                            
                            function(e){
                                for(var k = 0; k < 8; k++){
                             
                                     if(room[0][k] == e.target.value){
                                                 var i = k;
                                    }
}
                                   

if(room[1][i]==0){
                                        room[1][i]++;
                                    }
                                                                
                                
                          
                                
                                    handleShow();
                                  
                 }}>Check Availability</button></p>
                    </div>

                    </div>
</div>
            <br></br>
            <div style={{textAlign: "center",fontSize:"20px"}}><p>View <a href="/Tariff">*Tariff</a> section for price breakdowns</p></div>
            <br></br>

            </div>
        
    
        </div>

        
       

        );
        
            
}

export default Roooms;