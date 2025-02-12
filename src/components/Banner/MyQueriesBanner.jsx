import React from "react";
import bannerImg from "../../assets/banner-img/myQueriesBanner.jpg.jpg";
import { useNavigate } from "react-router-dom";

const MyQueriesBanner = () => {
  const navigate = useNavigate();
  const handleAddQuery = () => {
    navigate("/addQueries");
  };
  return (
    <div
      className="hero w-full h-96"
      style={{
        backgroundImage:
          `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Wealcome to my queries</h1>
          <button onClick={handleAddQuery} className="border py-2 px-5 rounded-md bg-[#f6cf0c]  transition duration-300 hover:bg-[#e5be00] hover:scale-105 text-black font-medium">Add Queries</button>
        </div>
      </div>
    </div>
  );
};

export default MyQueriesBanner;
