import React,{useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';




import Axios from "axios";

    function Login(){


        Axios.defaults.withCredentials=true;

        useEffect(function(){
            Axios.get('http://localhost:3001/Admin').then((Response)=>{
              console.log(Response);

              if(Response.data.loggedIn){
                console.log(Response.data.user[0].uname);
            } 
        
            });
          })



        const [uname,Setuname]=useState('');
        const [pass,Setpass]=useState('');
        const [validate,setValidate]=useState('');

        const submit = function(){
            Axios.post('http://localhost:3001/Admin',

            {uname:uname,pass:pass}).then((Response)=>{
                console.log(Response);
                setValidate(Response.data.message);

                if(Response.data.message==="Wrong combination"){
                    
                    alert(Response.data.message);
                }

                else{
                alert("Success!");
                 window.location.href="/VerifiedAdmin"
                }
                
            });
        }

        return (<div class="login">

        <div class="body">
        <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-key">
                </div>
                <div class="col-lg-12 login-title">
                    ADMIN PANEL
                </div>
    
                <div class="login-form">
                    <div class="login-form">

                    <Form>
             <Row>
             <Col><Form.Label>User name</Form.Label>
             <Form.Control type='text' placeholder="uname" name="uname" onChange={function(e){
                 Setuname(e.target.value)
             }} /></Col>
             </Row>
             <br></br>
             <Row>
             <Col><Form.Label>Password</Form.Label>
             <Form.Control type='password' placeholder="password" name="pass" onChange={function(e){
                 Setpass(e.target.value)
             }} /></Col>
             </Row>
             <br></br>
            <Button variant="secondary" onClick={function(){
                submit();
            }}>
                Login
            </Button>
            </Form>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
    }
    
    export default Login;