import React from "react";

function Reviews(){
    return(<div class="customer-reviews-box">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="heading-title text-center head">
                    <h2>Our Team</h2>
                    <p>Get to know us before you visit us</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 mr-auto ml-auto text-center">
                <div id="reviews" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner mt-4">
                        <div class="carousel-item text-center active">
                            <div class="img-box p-1 border rounded-circle m-auto">
                                <img class="d-block w-100 rounded-circle" src="./img/satye.png" alt=""/>
                            </div>
                            <h5 class="mt-4 mb-0"><strong class="text-warning text-uppercase">Satyendra Sah</strong></h5>
                            <h6 class="text-dark m-0">Owner</h6>
                            <p class="m-0 pt-3"></p>
                        </div>
                        <div class="carousel-item text-center">
                            <div class="img-box p-1 border rounded-circle m-auto">
                                <img class="d-block w-100 rounded-circle" src="images/profile-3.jpg" alt=""/>
                            </div>
                            <h5 class="mt-4 mb-0"><strong class="text-warning text-uppercase">Robin Mandal</strong></h5>
                            <h6 class="text-dark m-0">Manager</h6>
                            <p class="m-0 pt-3"></p>
                        </div>
                        <div class="carousel-item text-center">
                            <div class="img-box p-1 border rounded-circle m-auto">
                                <img class="d-block w-100 rounded-circle" src="images/profile-7.jpg" alt=""/>
                            </div>
                            <h5 class="mt-4 mb-0"><strong class="text-warning text-uppercase">Sanjay Sah</strong></h5>
                            <h6 class="text-dark m-0">Store and Account Manager</h6>
                            <p class="m-0 pt-3"></p>
                        </div>
                        <div class="carousel-item text-center">
                            <div class="img-box p-1 border rounded-circle m-auto">
                                <img class="d-block w-100 rounded-circle" src="images/profile-7.jpg" alt=""/>
                            </div>
                            <h5 class="mt-4 mb-0"><strong class="text-warning text-uppercase">Dipendra Sonar</strong></h5>
                            <h6 class="text-dark m-0">Housekeeping incharge</h6>
                            <p class="m-0 pt-3"></p>
                        </div>

                    </div>
                    <a class="carousel-control-prev" href="#reviews" role="button" data-slide="prev">
                        <i class="fa fa-angle-left" aria-hidden="true"></i>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#reviews" role="button" data-slide="next">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>);
}

export default Reviews;