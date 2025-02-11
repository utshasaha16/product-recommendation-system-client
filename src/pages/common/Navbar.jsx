import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          title: "success!",
          text: "Successfully LogOut",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "error!",
          text: "Failed to logout",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/queries">Queries</NavLink>
    </>
  );
  const userLinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/queries">Queries</NavLink>
      <NavLink to="/recommendationForMe">Recommendations For Me</NavLink>
      <NavLink to="/myQueries">My Queries</NavLink>
      <NavLink to="/myRecommendation">My Recommendations</NavLink>
    </>
  );
  return (
    <div className="navbar bg-[#e8edef] fixed z-10 container p-3 border border-b-stone-300">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" onClick={toggleDropdown} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {user ? userLinks : links}
            </ul>
          )}
        </div>
          <a href="/" className="text-xl font-extrabold whitespace-nowrap">Product Recommendation</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ml-10 space-x-2">
          {user ? userLinks : links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button
              onClick={handleLogOut}
              className="border py-2 px-5 rounded-md bg-[#f6cf0c] text-black font-medium"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/logIn">
              <button className="border py-2 px-5 rounded-md bg-[#f6cf0c] text-black font-medium">
                Log In
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
