import {Carousel} from "react-bootstrap";
import React from "react";


function Try(){
    return(
<div>
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://miro.medium.com/max/1400/0*5gXmB8UxhAjoPwq2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://en.as.com/meristation_en/2022/02/17/news/1645059859_923391.html"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://medium.com/illumination/one-piece-motivational-anime-e8d3bcd4f22b"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>)
}

export default Try;