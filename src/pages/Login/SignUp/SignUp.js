import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const SignUp = () => {
    const navigate = useNavigate();
    let loadingEle;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      if(loading){
        loadingEle = <p>
            <Loading></Loading>
        </p> 
      }


      const hanleSignUp =async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const displayName = event.target.name.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName});
      }

      if(user){
          navigate('/home');
      }
    return (
        <div className="container w-50">
      <h2 className="text-secondary text-center my-5">Sign Up</h2>
      <Form onSubmit={hanleSignUp}>
        <Form.Group className="mb-5" controlId="formBasicEmail">
          <Form.Control name="name" type="text" placeholder="Your Name" />
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicEmail">
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Control name="ConfPassword" type="password" placeholder="Confirm Password" />
        </Form.Group>
        {loadingEle}
        <Button
          className="w-50 mx-auto d-block rounded-pill mb-1"
          variant="primary"
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
      <p className="mt-2">
      Already have an account?{" "}
        <Link className="text-decoration-none text-primary" to={"/login"}>
          Sign In
        </Link>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
    );
};

export default SignUp;