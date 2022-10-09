import React from "react";

function Testimonials(){
    return(<div>
        <body>
    <div class="testimonials-clean">
        <div class="container">
            <div class="intro">
                <h2 class="text-center">Testimonials </h2>
            </div>
            <div class="row people">
                <div class="col-md-6 col-lg-4 item">
                    <div class="box">
                        <p class="description">Thanks to all Nepalese, we people from India feel very homely at Nepal and with Nepali people. </p>
                    </div>
                    <div class="author"><img class="rounded-circle" src="./img/user.png"/>
                        <h5 class="name">Dr Ramesh Devda</h5>
                        <p class="title">Mandsaur, India</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 item">
                    <div class="box">
                        <p class="description">Staff behaviour was excellent.</p>
                    </div>
                    <div class="author"><img class="rounded-circle" src="./img/user.png"/>
                        <h5 class="name">V.K Kulshrestha</h5>
                        <p class="title">Jaipur, India</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 item">
                    <div class="box">
                        <p class="description">Very nice overall service</p>
                    </div>
                    <div class="author"><img class="rounded-circle" src="./img/user.png"/>
                        <h5 class="name">Pushpa Karwa</h5>
                        <p class="title">Bombay, India</p>
                    </div>

                   
                </div>
                <a href="/morereviews"  style={{"margin-left":"auto", "margin-right":"auto"} }><button class="viewmorebutton"><span>view more </span></button></a>
            </div>
         
        </div>
       
    </div>
</body>


    </div>)
}

export default Testimonials;