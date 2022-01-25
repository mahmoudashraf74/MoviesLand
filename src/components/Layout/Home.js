import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import logo from "../../Media/pic/1.jpg";
import logo2 from "../../Media/pic/2.jpg";
import logo3 from "../../Media/pic/3.jpg";
import logo4 from "../../Media/pic/4.jpg";

import "./Home.css";
import Movie from "../Movie/Movie";
const Home = (props) => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={700}>
          <img className="d-block w-100" src={logo} alt="First slide" />
          <Carousel.Caption>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <a href="#Movies" className="getStart">
              Get Started
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={700}>
          <img className="d-block w-100" src={logo2} alt="Third slide" />

          <Carousel.Caption>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <a href="#Movies" className="getStart">
              Get Started
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={700}>
          <img className="d-block w-100" src={logo3} alt="Third slide" />

          <Carousel.Caption>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <a href="#Movies" className="getStart">
              Get Started
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={700}>
          <img className="d-block w-100" src={logo4} alt="Third slide" />

          <Carousel.Caption>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <a href="#Movies" className="getStart">
              Get Started
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Movie />
    </div>
  );
};
export default Home;
