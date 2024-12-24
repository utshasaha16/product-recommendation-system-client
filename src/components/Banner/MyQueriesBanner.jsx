import React from "react";
import bannerImg from '../../assets/banner-img/my-queries-banner-image.png'
import { useNavigate } from "react-router-dom";

const MyQueriesBanner = () => {
  const navigate = useNavigate();
  const handleAddQuery = () => {
    navigate("/addQueries")
  }
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat rounded-2xl md:w-full h-full md:h-[30rem]"
      style={{
        backgroundImage:
          `url(${bannerImg})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Welcome to My Queries
        </h1>
        <button
          onClick={handleAddQuery}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-lg font-medium rounded-md shadow-lg transition duration-300"
        >
          Add Queries
        </button>
      </div>
    </div>
  );
};

export default MyQueriesBanner;
