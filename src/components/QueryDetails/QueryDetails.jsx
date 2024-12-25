import React from "react";
import { useLoaderData } from "react-router-dom";

const QueryDetails = () => {
  const {
    recommender,
    queryTitle,
    productName,
    productImage,
    productBrand,
    currentDateAndTime,
    boycottingReason,
  } = useLoaderData();
  console.log(recommender);
  return (
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
      <section>
        
      </section>
    </div>
  );
};

export default QueryDetails;
