import React from "react"
import {useState,useEffect,useRef,Component} from 'react';
import { Modal } from 'react-bootstrap';

function Store(){

   
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var cart = [['https://i.ibb.co/yB08PXr/1.jpg','https://i.ibb.co/ScsBvvG/2.jpg','https://i.ibb.co/yB08PXr/1.jpg','http://i.ibb.co/yB08PXr/1.jpg','https://i.ibb.co/yB08PX/1.jpg','https://i.ibb.co/yB08Pr/1.jpg','https://i.ibb.co/y08PXr/1.jpg','https://i.ibbco/yB08PXr/1.jpg','https://i.ibb.co/yB08PXr/.jpg','https://i.ibbco/yB08PXr/1.jpg','https://i.ib.co/yB08PXr/1.jpg'],[0,0,0,0,0,0,0,0],[100,150,100,100,100,100,100,100,100,100]];

    const [item,setItem]=useState(cart);

    return(<div>

<button class="cartButton" onClick={function(e){
        
        handleShow();
    }}>Open Cart</button>

    
<Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Art item</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
          <div class="content">

  <table class="items">
    <thead>
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Total(Nrs)</th>
      </tr>
    </thead>
    <tbody>  

    {item.map((d,a) => {
       
       return (
                   d.map((r,i)=>{
                      

                       if(a==1 && r>0){

                        console.log(item)
                    return(
                        
                       <tr>
                       
                   <td data-label="ROOM">
                       <p id="prodName"><img class="img-fluid" src={item[0][i]} alt="invalid-img" border="0"></img><br/></p>
                   </td>
                   <td data-label="RATE" class="rate">{item[1][i]}</td>

                   <td data-label="TOTAL" class="xx">{item[2][i]}

                   <a href="#" class="remove" onClick=
                        {function(e){
                            for(var k = 0; k < 10; k++){
                                     if(item[0][k] == item[0][i]){
                                                 var index = k;
                                                 console.log("index is "+index)
                                                 break;
                                    }
                            }
                            

                        if (index !== -1) {
                             item[1][index]=0;

                        } 
                        console.log(item)
                        handleClose();
                        

                        }}> <img src="/img/remove.png" style={{height:"25px",width:"25px"}}></img></a></td>
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

    <a class="cta" href="#" onClick={function(){
                            handleClose();
    }}><strong>Buy Now</strong> &raquo;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
  </div>
</div> 
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
          </Modal>

  
<div class="Grid">

  <div class="Grid-item"><div>
  <div class="flip-box">
  <div class="flip-box-inner" id="fbInner">
  <div class="flip-box-front">
  <a class="lightbox" href="https://i.ibb.co/yB08PXr/1.jpg"><img class="img-fluid" src="https://i.ibb.co/yB08PXr/1.jpg" alt="Whats-App-Image-2022-11-01-at-17-21ss-45" border="0"></img></a></div>
  <div class="flip-box-back">
      <h2 style={{"fontWeight":"bold"}}>Painting 1</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <br></br>
      <h4 style={{"fontWeight":"bold"}}>Price: NRS.250</h4>
      <br></br>
      <button class="revert" onClick={()=>{document.getElementById("fbInner").style.transform="rotateY(360deg)";}}><i class="fa fa-redo fa-2x"></i></button>
  </div>
  </div></div>

<div class="buttons">
<button class="CartButtons" onClick={()=>{
  if(document.getElementById("fbInner").style.transform!="rotateY(180deg)"){
  document.getElementById("fbInner").style.transform="rotateY(180deg)";
  }
  else{
    document.getElementById("fbInner").style.transform="rotateY(360deg)";
  }
}}>Details</button>
<button class="CartButtons" value="https://i.ibb.co/yB08PXr/1.jpg" onClick={                  
function(e){
for(var k = 0; k < 10; k++){
    if(item[0][k] == e.target.value){
    var i = k;
    break;
}
}
if(item[1][i]==0){
  item[1][i]++;
}
console.log(item)
handleShow();
}}>Buy </button>
</div>

</div></div>





<div class="Grid-item"><div>
  <div class="flip-box">
  <div class="flip-box-inner" id="fbInner1">
  <div class="flip-box-front">
  <a class="lightbox" href="https://i.ibb.co/yB08PXr/1.jpg"><img class="img-fluid" src="https://i.ibb.co/yB08PXr/1.jpg" alt="Whats-App-Image-2022-11-01-at-17-21ss-45" border="0"></img></a></div>
  <div class="flip-box-back">
      <h2 style={{"fontWeight":"bold"}}>Painting 2</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <br></br>
      <h4 style={{"fontWeight":"bold"}}>Price: NRS.250</h4>
      <br></br>
      <button class="revert" onClick={()=>{document.getElementById("fbInner1").style.transform="rotateY(360deg)";}}><i class="fa fa-redo fa-2x"></i></button>
  </div>
  </div></div>

<div class="buttons">
<button class="CartButtons" onClick={()=>{
  if(document.getElementById("fbInner1").style.transform!="rotateY(180deg)"){
  document.getElementById("fbInner1").style.transform="rotateY(180deg)";
  }
  else{
    document.getElementById("fbInner1").style.transform="rotateY(360deg)";
  }
}}>Details</button>
<button class="CartButtons" value="https://i.ibb.co/yB08PXr/1.jpg" onClick={                  
function(e){
for(var k = 0; k < 10; k++){
    if(item[0][k] == e.target.value){
    var i = k;
    break;
}
}
if(item[1][i]==0){
  item[1][i]++;
}
console.log(item)
handleShow();
}}>Buy </button>
</div>

</div></div>



<div class="Grid-item"><div>
  <div class="flip-box">
  <div class="flip-box-inner" id="fbInner2">
  <div class="flip-box-front">
  <a class="lightbox" href="https://i.ibb.co/yB08PXr/1.jpg"><img class="img-fluid" src="https://i.ibb.co/yB08PXr/1.jpg" alt="Whats-App-Image-2022-11-01-at-17-21ss-45" border="0"></img></a></div>
  <div class="flip-box-back">
      <h2 style={{"fontWeight":"bold"}}>Painting 3</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <br></br>
      <h4 style={{"fontWeight":"bold"}}>Price: NRS.250</h4>
      <br></br>
      <button class="revert" onClick={()=>{document.getElementById("fbInner2").style.transform="rotateY(360deg)";}}><i class="fa fa-redo fa-2x"></i></button>
  </div>
  </div></div>

<div class="buttons">
<button class="CartButtons" onClick={()=>{
  if(document.getElementById("fbInner2").style.transform!="rotateY(180deg)"){
  document.getElementById("fbInner2").style.transform="rotateY(180deg)";
  }
  else{
    document.getElementById("fbInner2").style.transform="rotateY(360deg)";
  }
}}>Details</button>
<button class="CartButtons" value="https://i.ibb.co/yB08PXr/1.jpg" onClick={                  
function(e){
for(var k = 0; k < 10; k++){
    if(item[0][k] == e.target.value){
    var i = k;
    break;
}
}
if(item[1][i]==0){
  item[1][i]++;
}
console.log(item)
handleShow();
}}>Buy </button>
</div>

</div></div>



<div class="Grid-item"><div>
  <div class="flip-box">
  <div class="flip-box-inner" id="fbInner3">
  <div class="flip-box-front">
  <a class="lightbox" href="https://i.ibb.co/yB08PXr/1.jpg"><img class="img-fluid" src="https://i.ibb.co/yB08PXr/1.jpg" alt="Whats-App-Image-2022-11-01-at-17-21ss-45" border="0"></img></a></div>
  <div class="flip-box-back">
      <h2 style={{"fontWeight":"bold"}}>Painting 4</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <br></br>
      <h4 style={{"fontWeight":"bold"}}>Price: NRS.250</h4>
      <br></br>
      <button class="revert" onClick={()=>{document.getElementById("fbInner3").style.transform="rotateY(360deg)";}}><i class="fa fa-redo fa-2x"></i></button>
  </div>
  </div></div>

<div class="buttons">
<button class="CartButtons" onClick={()=>{
  if(document.getElementById("fbInner3").style.transform!="rotateY(180deg)"){
  document.getElementById("fbInner3").style.transform="rotateY(180deg)";
  }
  else{
    document.getElementById("fbInner3").style.transform="rotateY(360deg)";
  }
}}>Details</button>
<button class="CartButtons" value="https://i.ibb.co/yB08PXr/1.jpg" onClick={                  
function(e){
for(var k = 0; k < 10; k++){
    if(item[0][k] == e.target.value){
    var i = k;
    break;
}
}
if(item[1][i]==0){
  item[1][i]++;
}
console.log(item)
handleShow();
}}>Buy </button>
</div>

</div></div>


<div class="Grid-item"><div>
  <div class="flip-box">
  <div class="flip-box-inner" id="fbInner4">
  <div class="flip-box-front">
  <a class="lightbox" href="https://i.ibb.co/yB08PXr/1.jpg"><img class="img-fluid" src="https://i.ibb.co/yB08PXr/1.jpg" alt="Whats-App-Image-2022-11-01-at-17-21ss-45" border="0"></img></a></div>
  <div class="flip-box-back">
      <h2 style={{"fontWeight":"bold"}}>Painting 5</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <br></br>
      <h4 style={{"fontWeight":"bold"}}>Price: NRS.250</h4>
      <br></br>
      <button class="revert" onClick={()=>{document.getElementById("fbInner4").style.transform="rotateY(360deg)";}}><i class="fa fa-redo fa-2x"></i></button>
  </div>
  </div></div>

<div class="buttons">
<button class="CartButtons" onClick={()=>{
  if(document.getElementById("fbInner4").style.transform!="rotateY(180deg)"){
  document.getElementById("fbInner4").style.transform="rotateY(180deg)";
  }
  else{
    document.getElementById("fbInner4").style.transform="rotateY(360deg)";
  }
}}>Details</button>
<button class="CartButtons" value="https://i.ibb.co/yB08PXr/1.jpg" onClick={                  
function(e){
for(var k = 0; k < 10; k++){
    if(item[0][k] == e.target.value){
    var i = k;
    break;
}
}
if(item[1][i]==0){
  item[1][i]++;
}
console.log(item)
handleShow();
}}>Buy </button>
</div>

</div></div>


<div class="Grid-item"><div>
  <div class="flip-box">
  <div class="flip-box-inner" id="fbInner5">
  <div class="flip-box-front">
  <a class="lightbox" href="https://i.ibb.co/yB08PXr/1.jpg"><img class="img-fluid" src="https://i.ibb.co/yB08PXr/1.jpg" alt="Whats-App-Image-2022-11-01-at-17-21ss-45" border="0"></img></a></div>
  <div class="flip-box-back">
      <h2 style={{"fontWeight":"bold"}}>Painting 6</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <br></br>
      <h4 style={{"fontWeight":"bold"}}>Price: NRS.250</h4>
      <br></br>
      <button class="revert" onClick={()=>{document.getElementById("fbInner5").style.transform="rotateY(360deg)";}}><i class="fa fa-redo fa-2x"></i></button>
  </div>
  </div></div>

<div class="buttons">
<button class="CartButtons" onClick={()=>{
  if(document.getElementById("fbInner5").style.transform!="rotateY(180deg)"){
  document.getElementById("fbInner5").style.transform="rotateY(180deg)";
  }
  else{
    document.getElementById("fbInner5").style.transform="rotateY(360deg)";
  }
}}>Details</button>
<button class="CartButtons" value="https://i.ibb.co/yB08PXr/1.jpg" onClick={                  
function(e){
for(var k = 0; k < 10; k++){
    if(item[0][k] == e.target.value){
    var i = k;
    break;
}
}
if(item[1][i]==0){
  item[1][i]++;
}
console.log(item)
handleShow();
}}>Buy </button>
</div>

</div></div>


<div class="Grid-item"><div>
  <div class="flip-box">
  <div class="flip-box-inner" id="fbInner6">
  <div class="flip-box-front">
  <a class="lightbox" href="https://i.ibb.co/yB08PXr/1.jpg"><img class="img-fluid" src="https://i.ibb.co/yB08PXr/1.jpg" alt="Whats-App-Image-2022-11-01-at-17-21ss-45" border="0"></img></a></div>
  <div class="flip-box-back">
      <h2 style={{"fontWeight":"bold"}}>Painting 7</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <br></br>
      <h4 style={{"fontWeight":"bold"}}>Price: NRS.250</h4>
      <br></br>
      <button class="revert" onClick={()=>{document.getElementById("fbInner6").style.transform="rotateY(360deg)";}}><i class="fa fa-redo fa-2x"></i></button>
  </div>
  </div></div>

<div class="buttons">
<button class="CartButtons" onClick={()=>{
  if(document.getElementById("fbInner6").style.transform!="rotateY(180deg)"){
  document.getElementById("fbInner6").style.transform="rotateY(180deg)";
  }
  else{
    document.getElementById("fbInner6").style.transform="rotateY(360deg)";
  }
}}>Details</button>
<button class="CartButtons" value="https://i.ibb.co/yB08PXr/1.jpg" onClick={                  
function(e){
for(var k = 0; k < 10; k++){
    if(item[0][k] == e.target.value){
    var i = k;
    break;
}
}
if(item[1][i]==0){
  item[1][i]++;
}
console.log(item)
handleShow();
}}>Buy </button>
</div>

</div></div>


<div class="Grid-item"><div>
  <div class="flip-box">
  <div class="flip-box-inner" id="fbInner7">
  <div class="flip-box-front">
  <a class="lightbox" href="https://i.ibb.co/yB08PXr/1.jpg"><img class="img-fluid" src="https://i.ibb.co/yB08PXr/1.jpg" alt="Whats-App-Image-2022-11-01-at-17-21ss-45" border="0"></img></a></div>
  <div class="flip-box-back">
      <h2 style={{"fontWeight":"bold"}}>Painting 8</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <br></br>
      <h4 style={{"fontWeight":"bold"}}>Price: NRS.250</h4>
      <br></br>
      <button class="revert" onClick={()=>{document.getElementById("fbInner7").style.transform="rotateY(360deg)";}}><i class="fa fa-redo fa-2x"></i></button>
  </div>
  </div></div>

<div class="buttons">
<button class="CartButtons" onClick={()=>{
  if(document.getElementById("fbInner7").style.transform!="rotateY(180deg)"){
  document.getElementById("fbInner7").style.transform="rotateY(180deg)";
  }
  else{
    document.getElementById("fbInner7").style.transform="rotateY(360deg)";
  }
}}>Details</button>
<button class="CartButtons" value="https://i.ibb.co/yB08PXr/1.jpg" onClick={                  
function(e){
for(var k = 0; k < 10; k++){
    if(item[0][k] == e.target.value){
    var i = k;
    break;
}
}
if(item[1][i]==0){
  item[1][i]++;
}
console.log(item)
handleShow();
}}>Buy </button>
</div>

</div></div>

<div class="Grid-item"><div>
  <div class="flip-box">
  <div class="flip-box-inner" id="fbInner8">
  <div class="flip-box-front">
  <a class="lightbox" href="https://i.ibb.co/ScsBvvG/2.jpg"><img class="img-fluid" src="https://i.ibb.co/ScsBvvG/2.jpg" alt="Whats-App-Image-2022-11-01-at-17-21ss-45" border="0"></img></a></div>
  <div class="flip-box-back">
      <h2 style={{"fontWeight":"bold"}}>Painting 9</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <br></br>
      <h4 style={{"fontWeight":"bold"}}>Price: NRS.250</h4>
      <br></br>
      <button class="revert" onClick={()=>{document.getElementById("fbInner8").style.transform="rotateY(360deg)";}}><i class="fa fa-redo fa-2x"></i></button>
  </div>
  </div></div>

<div class="buttons">
<button class="CartButtons" onClick={()=>{
  if(document.getElementById("fbInner8").style.transform!="rotateY(180deg)"){
  document.getElementById("fbInner8").style.transform="rotateY(180deg)";
  }
  else{
    document.getElementById("fbInner8").style.transform="rotateY(360deg)";
  }
}}>Details</button>
<button class="CartButtons" value="https://i.ibb.co/ScsBvvG/2.jpg" onClick={                  
function(e){
for(var k = 0; k < 10; k++){
    if(item[0][k] == e.target.value){
    var i = k;
    break;
}
}
if(item[1][i]==0){
  item[1][i]++;
}
console.log(item)
handleShow();
}}>Buy </button>
</div>

</div></div>



</div>

</div>);
}

export default Store;