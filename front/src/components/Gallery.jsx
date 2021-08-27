import React from "react"

function Gallery(){
    return(<div class="gallery-box">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="heading-title text-center">
                <br/>
                    <h2>Gallery</h2>
                    <p>LalalLAlalalLAlalal Gallery</p>
                </div>
            </div>
        </div>
        <div class="tz-gallery">
            <div class="row">
                <div class="col-sm-12 col-md-4 col-lg-4">
                    <a class="lightbox" href="./img/slider-01.jpg">
                        <img class="img-fluid" src="./img/slider-01.jpg" alt="Gallery Images"/>
                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                    <a class="lightbox" href="./img/slider-01.jpg">
                        <img class="img-fluid" src="./img/slider-01.jpg" alt="Gallery Images"/>
                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                    <a class="lightbox" href="./img/slider-01.jpg">
                        <img class="img-fluid" src="./img/slider-01.jpg" alt="Gallery Images"/>
                    </a>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                    <a class="lightbox" href="./img/slider-01.jpg">
                        <img class="img-fluid" src="./img/slider-01.jpg" alt="Gallery Images"/>
                    </a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                    <a class="lightbox" href="./img/slider-01.jpg">
                        <img class="img-fluid" src="./img/slider-01.jpg" alt="Gallery Images"/>
                    </a>
                </div> 
                <div class="col-sm-6 col-md-4 col-lg-4">
                    <a class="lightbox" href="./img/slider-01.jpg">
                        <img class="img-fluid" src="./img/slider-01.jpg" alt="Gallery Images"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>);
}

export default Gallery;