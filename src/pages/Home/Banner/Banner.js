import React from "react";
import { motion } from "framer-motion"
import { Carousel } from "react-bootstrap";
import banner1 from '../../../images/banner/mountain.jpg';
import banner2 from '../../../images//banner/nature.jpg';
import banner3 from '../../../images/banner/camera.jpg';

const Banner = () => {
  return (
    <div style={{fontFamily:'Georgia'}}>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <motion.h2  animate={{ y: [0,-300], x:[0,-200]}} transition={{ ease: "easeOut", duration: 1.5 }}>hello! this is double click.</motion.h2>
            <motion.p animate={{ y: [0,-300], x:[0,-200]}} transition={{ ease: "easeOut", duration: 2 }} className="fw-bold">Most completed photography with a huge collection.</motion.p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption className="text-start ms-5 text-dark fw-bolder">
            <motion.h3 className="ms-5 ps-5" animate={{ y: [0,-300], x:[0,-200]}} transition={{ ease: "easeOut", duration: 1.5 }}>Free updates and premium support</motion.h3>
            <motion.h5 className="ms-5 ps-5" animate={{ y: [0,-300], x:[0,-200]}} transition={{ ease: "easeOut", duration: 2 }}>You'll have access to all updates and premium support</motion.h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <motion.h1 animate={{ y: [0,-350], x:[0,-250]}} transition={{ ease: "easeOut", duration: 1.5 }} className="text-dark">Build For Creative Showcase</motion.h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
