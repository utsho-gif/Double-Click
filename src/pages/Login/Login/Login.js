import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  let loadingEle;
  if (loading || sending) {
    loadingEle = (
      <p>
        <Loading></Loading>
      </p>
    );
  }

  let errorELe;
  if (error || resetError) {
    errorELe = (
      <p className="text-danger fw-bold">
        {error?.message || resetError?.message}
      </p>
    );
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  const handleResetPass = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Email sent", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Did ya forget to enter email");
    }
  };
  return (
    <div className="container w-50">
      <h2 className="text-secondary text-center my-5">Sign In</h2>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-5" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
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
        {error ? errorELe : loadingEle}

        <Button
          className="w-50 mx-auto d-block rounded-pill mb-1"
          variant="primary"
          type="submit"
        >
          Sign In
        </Button>
      </Form>
      <p className="mt-4">
        New To Click?{" "}
        <Link className="text-decoration-none text-primary mx-3" to={"/signup"}>
          Create An Account
        </Link>
      </p>
      <p>
        Forget Password?{" "}
        <button
          onClick={handleResetPass}
          className="btn text-primary text-decoration-none"
        >
          Reset Password
        </button>{" "}
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Login;
