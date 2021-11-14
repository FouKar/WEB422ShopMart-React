import React from "react";
import { Carousel } from "react-bootstrap";
const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 heroImg"
          src="/PCGaming.jpeg"
          alt="First slide"
          object-fit="cover"
        />
        <Carousel.Caption className="carouselLbl">
          <h2 className="capTitle">80% OFF GAMING</h2>
          <p className="capP">Enjoy 80% off select titles, and hardware!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 heroImg"
          src="/blackFriday.jpeg"
          alt="Black Friday"
          object-fit="cover"
        />
        <Carousel.Caption className="carouselLblT">
          <h2 className="capTitle">Black Friday Bonanza!</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 heroImg"
          src="/Electronics.jpeg"
          alt="Holiday Electronics"
          object-fit="cover"
        />
        <Carousel.Caption className="carouselLblT">
          <h2 className="capTitle">Electronics for the Holidays</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
