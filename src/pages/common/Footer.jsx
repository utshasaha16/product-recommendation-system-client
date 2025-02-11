import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/web-logo/icons8-product-96.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#DCE1E3] py-12">
      <footer className="footer text-black p-5">
        <aside>
          <img src={logo} alt="" />
          <p>
            Product Recommendation.
            <br />
            Providing reliable tech since 1992
          </p>
          <div className="flex gap-2 mt-3 items-center justify-center">
            <Link to='https://www.linkedin.com/in/utsha-saha/'><FaLinkedin className="text-3xl"></FaLinkedin></Link>
            <Link to='https://www.facebook.com/utsha.saha.77'><FaFacebook className="text-3xl"></FaFacebook></Link>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Menu</h6>
          <Link to='/queries' className="link link-hover">Queries</Link>
          <Link to='/recommendationForMe' className="link link-hover">Recommendations For Me</Link>
          <Link to='/myQueries' className="link link-hover">My Queries</Link>
          <Link to='/myRecommendation' className="link link-hover">My Recommendations</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="divider"></div>
      <p className="text-center mb-4">
        Copyright © {new Date().getFullYear()} - All right reserved
      </p>
    </div>
  );
};

export default Footer;
