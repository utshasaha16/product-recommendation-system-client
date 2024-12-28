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
          <button onClick={handleAddQuery} className="px-4 py-2 border text-white bg-black border-black">Add Queries</button>
        </div>
      </div>
    </div>
  );
};

export default MyQueriesBanner;
