import React from "react"

function Gallery(){
    return(<div class="gallery-box">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="heading-title text-center">
                <br/>
                </div>
            </div>
        </div>
        <div class="tz-gallery">
            <div class="row">
                <div class="col-sm-12 col-md-4 col-lg-4">
                    <a class="lightbox" href="https://i.ibb.co/j8Gbrdv/1.png">
                        <img class="img-fluid" src="https://i.ibb.co/j8Gbrdv/1.png" alt="Gallery Images"/>
                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                    <a class="lightbox" href="https://i.ibb.co/xLrvTRr/2.jpg">
                        <img class="img-fluid" src="https://i.ibb.co/xLrvTRr/2.jpg" alt="Gallery Images"/>
                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                    <a class="lightbox" href="https://i.ibb.co/vB7KFCK/dbwb2.jpg">
                        <img class="img-fluid" src="https://i.ibb.co/vB7KFCK/dbwb2.jpg" alt="Gallery Images"/>
                    </a>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                    <a class="lightbox" href="https://i.ibb.co/k91zQ9m/4.jpg">
                        <img class="img-fluid" src="https://i.ibb.co/k91zQ9m/4.jpg" alt="Gallery Images"/>
                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                    <a class="lightbox" href="https://i.ibb.co/ScXk4Rq/outside.jpg">
                        <img class="img-fluid" src="https://i.ibb.co/ScXk4Rq/outside.jpg" alt="Gallery Images"/>
                    </a>
                </div> 
                <div class="col-sm-6 col-md-4 col-lg-4">
                    <a class="lightbox" href="./img/3.jpg">
                        <img class="img-fluid" src="./img/3.jpg" alt="Gallery Images"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>);
}

export default Gallery;