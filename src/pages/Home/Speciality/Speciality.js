import React from 'react';
import './Speciality.css'
import { motion } from "framer-motion"

const Speciality = ({speciality}) => {
    const {img, cata} = speciality;
    return (
        <div className='col-12 col-lg-4 col-md-6 position-relative'>
            <img className='img-fluid h-75 w-100' src={img} alt="" />
            <motion.p animate={{y:[0, 100, 0]}} className='position-absolute fw-bold tstyle'>{cata}</motion.p>
        </div>
    );
};

export default Speciality;