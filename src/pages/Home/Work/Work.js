import React from "react";
import { useNavigate } from "react-router-dom";

const Work = ({ work }) => {
  const navigate = useNavigate();
  const { img, des, price } = work;
  return (
    <div className="col-12 col-lg-4 col-md-6">
      <img className="img-fluid h-75" src={img} alt="" />
      <p className="p-2 fw-bold mt-3">{des}</p>
      <h3>${price}</h3>
      <button className="btn btn-outline-dark w-50" onClick={() => navigate('/checkout')}>Purchase</button>
    </div>
  );
};

export default Work;
