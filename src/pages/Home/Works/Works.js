import React from 'react';
import works1 from '../../../images/works/works1.jpg';
import works2 from '../../../images/works/works2.jpg';
import works3 from '../../../images/works/works3.jpg';
import works4 from '../../../images/works/works4.jpg';
import works5 from '../../../images/works/works5.jpg';
import works6 from '../../../images/works/works6.jpg';
import works7 from '../../../images/works/works7.jpg';
import works8 from '../../../images/works/works8.jpg';
import works9 from '../../../images/works/works9.jpg';
import Work from '../Work/Work';

const Works = () => {
    const works = [
        {id: 1, name: 'Passionate Eye',img: works1, des: 'A wild cat with his iconic pose.', price: 77.99},
        {id: 2, name: 'Destination',img: works2, des: 'Train running through mountain of Yunhai, China.', price: 45.99},
        {id: 3, name: 'Happiness', img: works3, des: 'A delightful women with her precious smile.', price: 56.99},
        {id: 4, name: 'Waiting',img: works4, des: 'Birds on the lampost in Berline.', price: 65.99},
        {id: 5, name: 'Peace',img: works5, des: 'My last tour on Tanzania,Mount Kilimanjaro.', price: 40.99},
        {id: 6, name: 'Iconic', img: works6, des: 'Ifel Tower in a lazy noon.', price: 65.99},
        {id: 7, name: 'Detailed',img: works7, des: 'Giraffe neck photography,looks like an edge.', price: 35.99},
        {id: 8, name: 'Dream',img: works8, des: 'Created a doll model with her pet.', price: 78.99},
        {id: 9, name: 'Rest',img: works9, des: 'Skating shoes in my balcony.', price: 25.99},
    ]
    return (
        <div className='py-4' style={{backgroundColor:'#f2f5f7'}}>
            
            <div className="container my-5">
            
            <div className="row">
            <h2 className='my-3 me-5'>My leatest works</h2>
            <p className='mb-2'>Here's some of leatest works are given below. I'm a freelancer photographer. Taking lots of shots around the world and sell it on my website and with that money take antoher tour. All my photos are premium here and good qualities.</p>
                {
                    works.map(work => <Work key={work.id} work={work}></Work>)
                }
            </div>
            </div>
            
        </div>
    );
};

export default Works;