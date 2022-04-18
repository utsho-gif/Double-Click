import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <div>
                <h3 className='text-danger'>Q1: <span className='text-dark'>Difference between authorization and authentication</span></h3>
            <h4 className='text-success'>Answer: <span className='text-dark'>There's a much difference between authorization and authentication. Authorization is mianly identifying or verifying who someone is. It can be a random person can be a stranger. On digital interfaces authetication of a person can be done in many ways.
            It could be OTP, it could be email and paassword, it could be one tap login or biometric authentication. On the other hand authorization define what resources a user can access. Autherrization always happens after authentication. Authorization mainly maintained by the organizations.</span></h4>
            </div>
            <div className='mt-5'>
                <h3 className='text-danger'>Q2: <span className='text-dark'>What other services does firebase provide other than authentication</span></h3>
            <h4 className='text-success'>Answer: <span className='text-dark'>Firebase is a multipurpose service provider organization. Which is a sub-org of Google. Firebase mainly used and popular for their authentication system. People mainly used it for their security purpose. And it's totally free for the user. Beside authentication firebase provide many other things such as: Cloud Firestone, Cloud Function, Hosting, Cloud Storage, Google Analytics, Prediction, Cloud Messaging and so on.</span></h4>
            </div>
            
        </div>
    );
};

export default Blogs;