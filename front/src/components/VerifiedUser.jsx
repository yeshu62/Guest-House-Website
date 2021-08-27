import React,{useEffect, useState} from 'react';

import Axios from "axios";

function VerifiedUser(){
    var name;

    useEffect(function(){
        Axios.get('http://localhost:3001/VerifiedAdmin').then((Response)=>{
          console.log(Response);

          if(Response.data.loggedIn){
            console.log(Response.data.user[0].uname);
            name=Response.data.user[0].uname;
            
        } 
        });
      })



    return(
        <div>Verified as <h1>{name}</h1></div>
    )
}


export default VerifiedUser;