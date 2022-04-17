import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] =
    useSignInWithGithub(auth);
  let errorElement;
  if (googleLoading || gitLoading) {
    return <Loading></Loading>;
  }
  if (googleError || gitError) {
    errorElement = (
      <p className="text-danger">
        Error: {googleError?.message} {gitError?.message}
      </p>
    );
  }

  if (googleUser || gitUser) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div style={{ height: "1px" }} className="bg-dark w-50"></div>
        <p className="mt-2 mx-2">or</p>
        <div style={{ height: "1px" }} className="bg-dark w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-light shadow-sm border-secondary rounded-3 w-50 border-2 rounded-pill fw-bold text-secondary d-block mx-auto my-3"
        >
          <FcGoogle className="fw-bold mb-1 me-1 fs-5"></FcGoogle> Sign in with
          Google
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-light shadow-sm border-secondary bg-dark rounded-3 w-50 border-2 rounded-pill fw-bold text-light d-block mx-auto"
        >
          <ImGithub className="fw-bold mb-1 me-1 fs-5 text-success"></ImGithub>{" "}
          Sign in with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
