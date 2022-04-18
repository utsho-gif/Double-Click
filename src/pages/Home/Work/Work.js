import React from "react";
import { useNavigate } from "react-router-dom";

const Work = ({ work }) => {
  const navigate = useNavigate();
  const { img, des, price, name } = work;
  return (
    <div className="col-12 col-lg-4 col-md-6">
      <img className="img-fluid h-75" src={img} alt="" />
      <div className="my-2">
      <h5>{name}</h5>
      <p className=" fw-semibold">{des}</p>
      <h3>${price}</h3>
      <button className="btn btn-outline-dark w-50" onClick={() => navigate('/checkout')}>Purchase</button>
      </div>
      
    </div>
  );
};

export default Work;
