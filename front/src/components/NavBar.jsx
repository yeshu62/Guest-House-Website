import React from "react";

function NavBar(){
    return( <div><header class="top-navbar">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="/home">
                <img src="/img/thisonefin2.png" class="img-responsive" alt="" />
                <img src="/img/next1.png" class="img-responsive 2"  alt="" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbars-rs-food">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="/home">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="rooms">Rooms</a></li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">About Us</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown-a">
                            
                            <a class="dropdown-item" href="/aboutus">About us</a>
                            <a class="dropdown-item" href="/about">How to reach us</a>
                            <a class="dropdown-item" href="/policy">Our policy</a>
                        </div>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown-b" data-toggle="dropdown">Restaurant</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown-b">
                            
                            <a class="dropdown-item" href="/resturant">Reservation</a>
                            <a class="dropdown-item" href="/menu">Our Menu</a>
                        
                        </div>
                    </li>

                    <li class="nav-item"><a class="nav-link" href="tariff">Tariff</a></li>
                    
                    

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">More</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown-a">
                            <a class="dropdown-item" href="https://en.wikipedia.org/wiki/Janakpur" target="_blank"> About Janakpur</a>
                            <a class="dropdown-item" href="https://www.facebook.com/watch/?v=473060688004291" target="_blank">Story of Janakpur</a>
                            <a class="dropdown-item" href="/gallery">Gallery</a>
                            <a class="dropdown-item" href="/rooms">Reservation</a>
                            <a class="dropdown-item" href="/morereviews">Reviews</a>
                        </div>
                    </li>


                    <li class="nav-item"><a class="nav-link" href="/map">Map</a></li>
                   
                    <li class="nav-item"><a class="nav-link" href="contactus">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</div>);
}

export default NavBar;