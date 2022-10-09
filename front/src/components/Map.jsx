import React from "react";




function Map(){

    return(<div>
         <section class="map_sec">
        <div class="container">
            <div class="row">
                <div class="col-md-10 offset-md-1">
                    <div class="map_inner">
                        <h2>Find Us on Google Map</h2>
                        <div class="map_bind">
                            <iframe src="https://maps.google.com/maps?q=hotel%20janakpurinn&t=&z=13&ie=UTF8&iwloc=&output=embed"  width={1000} height={500}></iframe>


                        </div>


                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>);

}


export default Map;
  