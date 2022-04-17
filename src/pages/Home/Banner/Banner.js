import React from "react";
import { motion } from "framer-motion"
import { Carousel } from "react-bootstrap";
import banner1 from '../../../images/banner/mountain.jpg';
import banner2 from '../../../images//banner/nature.jpg';
import banner3 from '../../../images/banner/camera.jpg';

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <motion.h2  animate={{ x: [0, 100, 0] }} transition={{ ease: "easeOut", duration: 2 }}>hello! this is double click.</motion.h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
