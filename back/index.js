const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors=require('cors');
const bcrypt=require('bcrypt');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const saltRounds=10;

const jwt=require('jsonwebtoken');

 


const db = mysql.createConnection({
    host: "localhost" ,
    user: "root",
    password: "",
    database: "hotdb"
    });
  
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(cookieParser());

app.use(express.json());

app.use(session({
  key:"user id",
  secret: "minatoflash821",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60*60*24,
  }
}))

db.connect(function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log("Connected to mysql :)");
        }
});

// const sqlInsert = "INSERT INTO room_type (id,name,beds,price,description) VALUES (1,'studio-flat',3,4000,'Very Nice');"

//db.query(sqlInsert, function(err,resu){
//});


var Cin,Cout,NoP="";
var data =[];
app.post("/home",function(req,res){
    data[0]=req.body.Cin;
    data[1]=req.body.Cout;
    data[2]=req.body.NoP;

});


app.post("/Book",function(req,res){
  var {checkIn,checkout,fname,lname,nop,phone,room}=req.body;
  const phone1 = parseInt(phone);

 
  db.query('SELECT id FROM customer WHERE id = (SELECT MAX(id) FROM customer)',function(err,foundcust){
    db.query('SELECT id FROM initialBook WHERE id = (SELECT MAX(id) FROM initialBook)',function(err,found){
    var i = found[0].id;
    var j= found[0].id;

    db.query('INSERT INTO customer SET ?', { id:j+1,fname:fname,lname:lname,contact:phone1,category:3},function(err,result){
      if(err){
        console.log(err);
      }
        console.log(phone);
        console.log(phone1);
    });

    db.query('INSERT INTO initialBook SET ?', { id:i+1,cin:checkIn,cout:checkout,roomreq:room,nop:nop,custid:j+1},function(err,result){
      if(err){
        console.log(err);
      }
    });
  });
    });

});

app.get("/VerifiedUser",(req,res)=>{
  if(req.session.user){
    res.send({loggedIn:true, user:req.session.user})
  }
  
  else{
    res.send({loggedIn:false});
  
  }
})


app.get("/Admin",(req,res)=>{
  if(req.session.user){
    res.send({loggedIn:true, user:req.session.user})
  }
  
  else{
    res.send({loggedIn:false});
  
  }
})

app.post("/Admin",function(req,res){

  var {uname,pass}=req.body;
  console.log(uname,pass);

  // bcrypt.hash(pass,saltRounds,(err,hash)=>
  // {
  //   db.query('INSERT into admin SET ?',{uname:uname,pass:hash},function(err,res){
  //     console.log('Done');
  //   });

  // });

  db.query('SELECT * from admin where uname=?',[uname],function(err,result){
    
    console.log(result);

    if(result.length>0){
      bcrypt.compare(pass,result[0].pass,(err,response)=>{

          if(response){
            req.session.user=result;
            console.log(req.session.user);
            res.send(result);
          }
          else{
            res.send({message:"Wrong combination"});
          }

      });

      
    }
    else{
      res.send({message:"Invalid username"});
    }
    

  });
  
 
});


app.get("/Book",function(req,res){
res.send(data);
});


app.get("/",function(req,res){
res.send("Ayo");
});



app.listen(3001, function(){
    console.log("listening on 3001");
  });
