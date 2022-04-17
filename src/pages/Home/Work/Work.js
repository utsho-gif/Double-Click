import React from "react";

const Work = ({ work }) => {
  const { img, des, price } = work;
  return (
    <div className="col-12 col-lg-4 col-md-6">
      <img className="img-fluid h-75" src={img} alt="" />
      <p className="p-2 fw-bold mt-3">{des}</p>
      <h3>${price}</h3>
      <button className="btn btn-outline-dark w-50">Purchase</button>
    </div>
  );
};

export default Work;
