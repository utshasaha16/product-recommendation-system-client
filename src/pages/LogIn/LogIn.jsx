import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import signInAnimation from "../../assets/lottie/signIn.json";
import Lottie from "lottie-react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
const LogIn = () => {
  const { logInUser, googleLogIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Success!",
          text: "Successfully logIn",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: "Failed to logIn please check email and password",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Success!",
          text: "Successfully logIn",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: "Failed to logIn please check email and password",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div className="hero bg-[#E8EDEF] min-h-screen pt-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={signInAnimation}></Lottie>
        </div>
        <div className="card w-full max-w-sm shrink-0 shadow-sm">
          <h1 className="text-3xl text-center font-bold">Login now!</h1>
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="border py-2 px-5 rounded-md bg-[#f6cf0c] text-black transition duration-300 hover:bg-[#e5be00] hover:scale-105 font-medium">
                Login
              </button>
            </div>
          </form>
          <p className="text-center font-semibold mb-3">
            Don't have an account?{" "}
            <Link className="text-black font-semibold" to="/register">
              Register
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleLogIn}
            className="border py-2 px-5 rounded-md flex items-center justify-center gap-1 font-semibold bg-[#dedcff] transition duration-300 hover:bg-[#c5baff] hover:scale-105 text-black"
          >
            Google <FaGoogle></FaGoogle>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
