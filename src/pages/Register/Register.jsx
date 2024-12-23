import Lottie from "lottie-react";
import React, { useContext } from "react";
import registerAnimation from "../../assets/lottie/register.json";
import AuthContext from "../../context/AuthContext/AuthContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);

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
    // if(password){}

    createUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Success!",
          text: "Successfully register",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Failed to register please check email and password",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center mb-3">
            Allready have an account{" "}
            <Link className="text-blue-700" to="/logIn">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
