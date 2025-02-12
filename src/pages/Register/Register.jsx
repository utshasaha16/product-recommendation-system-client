import Lottie from "lottie-react";
import React, { useContext } from "react";
import registerAnimation from "../../assets/lottie/register.json";
import AuthContext from "../../context/AuthContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, photoUrl, email, password };
    console.log(user);

    // Password validation
    // if(password <6){}

    createUser(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Success!",
          text: "Successfully register",
          icon: "success",
          confirmButtonText: "Ok",
        });
        updateUserProfile({ displayName: name, photoURL: photoUrl })
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: "Failed to register please check email and password",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div className="hero bg-base-100 min-h-screen py-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={registerAnimation}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm rounded-none">
          <h1 className="text-3xl text-center font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photoURL"
                className="input input-bordered"
                required
              />
            </div>
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
                Register
              </button>
            </div>
          </form>
          <p className="text-center mb-3 font-semibold">
            Allready have an account?{" "}
            <Link className="text-black font-semibold" to="/logIn">
              LogIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
