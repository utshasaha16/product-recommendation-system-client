import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import Recommendations from "../Recommendations/Recommendations";

const QueryDetails = () => {
  const navigate = useNavigate();
 
  const { user } = useContext(AuthContext);
  const {
    recommender,
    queryTitle,
    productName,
    productImage,
    productBrand,
    currentDateAndTime,
    boycottingReason,
    _id,
  } = useLoaderData();
  console.log(recommender);

  const handleAddRecommendation = async (e) => {
    e.preventDefault();
    const form = e.target;
    const recommendationTitle = form.recommendationTitle.value;
    const recommendedProductName = form.recommendedProductName.value;
    const recommendedProductImage = form.recommendedProductImage.value;
    const recommendedReason = form.recommendedReason.value;
    const queryId = _id;
    const prevQueryTitle = queryTitle;
    const prevProductName = productName;
    const userEmail = recommender.email;
    const userName = recommender.name;
    const recommenderEmail = user?.email;
    const recommenderName = user?.displayName;
    const currentDate = new Date();

    const recommendation = {
      recommendationTitle,
      recommendedProductName,
      recommendedProductImage,
      recommendedReason,
      queryId,
      prevQueryTitle,
      prevProductName,
      userEmail,
      userName,
      recommenderEmail,
      recommenderName,
      currentDate,
    };
    console.log(queryId);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-user-recommendation`,
        recommendation
      );
      if (data.insertedId) {
        Swal.fire({
          title: "success!",
          text: "successfully added your recommendation",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/myRecommendation")
      }
      form.reset();
    } catch (error) {
      console.log(error);
    }

  };

  
  

  return (
    <div className="md:w-11/12 mx-auto">
      <div className="card card-compact bg-base-100 py-12 rounded-none">
        <figure>
          <img src={productImage} alt="Product Image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{productName}</h2>
          <p className="text-xs">{productBrand}</p>
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10 rounded-full"
              src={recommender.photo}
              alt=""
            />
            <p className="text-sm font-medium">
              Recommended By {recommender.name}
            </p>
          </div>
          <p className="font-medium">Query Title: {queryTitle}</p>
          <p className="font-medium">Boycotting Reason: {boycottingReason}</p>
          <p>Recommender Email: {recommender.email}</p>
          <p>Date and time: {currentDateAndTime}</p>
        </div>
        {/* Add a recommendation section */}
        <section className="p-4 bg-base-100 mt-12">
          <h1 className="text-lg font-bold mb-4">Add A Recommendation</h1>
          <div className="w-full">
            <form onSubmit={handleAddRecommendation}>
              {/* input field for Recommendation Title and Recommended product Name */}
              <div className="md:flex gap-4 items-center">
                <div className="md:w-1/2">
                  <label className="text-gray-700 font-medium mb-1">
                    Recommendation Title
                  </label>

                  <input
                    type="text"
                    name="recommendationTitle"
                    placeholder="Enter recommendation title"
                    required
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                  ></input>
                </div>
                <div className="md:w-1/2">
                  <label className=" text-gray-700 font-medium mb-1">
                    Recommended product Name
                  </label>

                  <input
                    type="text"
                    name="recommendedProductName"
                    placeholder="Enter product name"
                    required
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                  ></input>
                </div>
              </div>
              {/* input field for Recommended Product Image and Recommendation reason */}
              <div className="md:flex gap-4 items-center">
                <div className="md:w-1/2">
                  <label className="text-gray-700 font-medium mb-1">
                    Recommended Product Image
                  </label>

                  <input
                    type="url"
                    name="recommendedProductImage"
                    placeholder="Enter recommended product image"
                    required
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                  ></input>
                </div>
                <div className="md:w-1/2">
                  <label className=" text-gray-700 font-medium mb-1">
                    Recommendation reason
                  </label>

                  <input
                    type="text"
                    name="recommendedReason"
                    placeholder="Enter recommended reason"
                    required
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                  ></input>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="border border-black hover:bg-black hover:text-white p-2 font-medium">
                  Add Recommendation
                </button>
              </div>
            </form>
          </div>
        </section>
        {/*  */}
        <section>
          <Recommendations></Recommendations>
        </section>
      </div>
    </div>
  );
};

export default QueryDetails;
