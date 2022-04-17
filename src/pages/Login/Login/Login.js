import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const handleSignIn = event => {
          event.preventDefault();
          const email = event.target.email.value;
          const password = event.target.password.value;
          signInWithEmailAndPassword(email, password);
      }
      if(user){
          navigate('/home');
      }
  return (
    <div className="container w-50">
      <h2 className="text-secondary text-center my-5">Sign In</h2>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-5" controlId="formBasicEmail">
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Button
          className="w-50 mx-auto d-block rounded-pill mb-1"
          variant="primary"
          type="submit"
        >
          Sign In
        </Button>
      </Form>
      <p className="mt-2">
        New To Genius?{" "}
        <Link className="text-decoration-none text-primary" to={"/signup"}>
          Create An Account
        </Link>
      </p>
      <p>
        Forget Password?{" "}
        <button
          className="btn btn-link text-primary text-decoration-none"
          
        >
          Reset Password
        </button>{" "}
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;