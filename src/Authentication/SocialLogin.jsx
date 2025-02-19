import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => console.error("Google Sign-In Error:", error));
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        <FaGoogle />
        Sign in with Google
      </button>
    </div>
  );
};

export default SocialLogin;
