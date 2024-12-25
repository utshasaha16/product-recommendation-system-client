import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/web-logo/icons8-product-96.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-base-200 py-12">
      <footer className="footer text-base-content p-10">
        <aside>
          <img src={logo} alt="" />
          <p>
            Product Recommendation.
            <br />
            Providing reliable tech since 1992
          </p>
          <div className="flex gap-2 mt-3 items-center justify-center">
            <FaLinkedin className="text-3xl"></FaLinkedin>
            <FaFacebook className="text-3xl"></FaFacebook>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Menu</h6>
          <Link className="link link-hover">Queries</Link>
          <Link className="link link-hover">Recommendations For Me</Link>
          <Link className="link link-hover">My Queries</Link>
          <Link className="link link-hover">My Recommendations</Link>
          {/* <a className="link link-hover">Recommendations For Me</a>
        <a className="link link-hover">My Queries</a>
        <a className="link link-hover">My Recommendations</a> */}
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
