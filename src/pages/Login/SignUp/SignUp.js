import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const SignUp = () => {
  const [showErr, setShowErr] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from.pathname || '/';
  let loadingEle;
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  if (loading || updating) {
    loadingEle = (
      <p>
        <Loading></Loading>
      </p>
    );
  }

  let errorEle;

  if (error || updateError) {
    errorEle = (
      <p className="text-danger fw-bold">
        {error?.message} || {updateError?.message}
      </p>
    );
  }

  const hanleSignUp = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const cofPass = event.target.ConfPassword.value;
    const displayName = event.target.name.value;
    if(password === cofPass){
      await createUserWithEmailAndPassword(email, password);
    }
    else{
      setShowErr("Password doesn't match!");
    }
    await updateProfile({ displayName });
  };

  if (user) {
    navigate(from, {replace: true});
  }
  return (
    <div className="container w-50">
      <h2 className="text-secondary text-center my-5">Sign Up</h2>
      <Form onSubmit={hanleSignUp}>
        <Form.Group className="mb-5" controlId="formBasicEmail">
          <Form.Control name="name" type="text" placeholder="Your Name" />
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicEmail">
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Control
            name="ConfPassword"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <h6 className="text-danger mb-3">{showErr}</h6>
        {error ? errorEle : loadingEle}

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
