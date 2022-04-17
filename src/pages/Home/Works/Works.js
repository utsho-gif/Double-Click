import React from 'react';
import works1 from '../../../images/works/works1.jpg';
import works2 from '../../../images/works/works2.jpg';
import works3 from '../../../images/works/works3.jpg';
import works4 from '../../../images/works/works4.jpg';
import Work from '../Work/Work';

const Works = () => {
    const works = [
        {id: 1, img: works1, des: 'A wild cat with his iconic pose', price: 77.99},
        {id: 2, img: works2, des: 'Train running through mountain of Yunhai, China', price: 45.99},
        {id: 3, img: works3, des: 'A delightful women with her precious smile', price: 56.99},
        {id: 4, img: works4, des: 'Birds on the lampost in Berline', price: 65.99},
    ]
    return (
        <div className='' style={{backgroundColor:'#f2f5f7'}}>
            
            <div className="container">
            
            <div className="row">
            <h2 className='my-5 me-5'>My lates works</h2>
                {
                    works.map(work => <Work key={work.id} work={work}></Work>)
                }
            </div>
            </div>
            
        </div>
    );
};

export default Works;