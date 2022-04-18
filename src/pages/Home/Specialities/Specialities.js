import React from 'react';
import lifestyle from '../../../images/speciality/lifestyle.jpg';
import sports from '../../../images/speciality/sport.jpg';
import nature from '../../../images/speciality/nature.jpg';
import Speciality from '../Speciality/Speciality';

const Specialities = () => {
    const specialities = [
        {id:1, img:lifestyle, cata:'Lifestyle Photography'},
        {id:2, img:sports, cata:'Sports Photography'},
        {id:3, img:nature, cata:'Nature Photography'}
    ]
    return (
        <div className='container' style={{fontFamily: 'Georgia, serif'}}>
            <h2 className='mt-5 mb-4'>My Specialties</h2>
            <p className='special-text mb-4'>I'm a professional phtographer. I've experience more than <span className='fw-bold text-warning'>Five</span> years in photography. As well as I'm a solo traveller. I travel around the world and make moments. I shoot on Lifestyles, Sports, Nature. This is my passion. And this passion move me on to my profession.</p>
            <div className='row'>
                {
                    specialities.map(speciality => <Speciality key={speciality.id} speciality={speciality}></Speciality>)
                }
            </div>
        </div>
    );
};

export default Specialities;