import React from "react";

const AllRecommendation = ({ recommendation }) => {
  const {
    recommendedProductImage,
    recommendedProductName,
    recommendedReason,
    recommenderName,
    currentDate,
  } = recommendation;
  return (
    <div className="flex gap-3">
      <img
        className="w-12 h-12 rounded-full"
        src={recommendedProductImage}
        alt=""
      />
      <div className="md:p-2 p-0 bg-base-200">
        <p className="text-sm font-medium">
          {recommendedProductName}
        </p>
        <p>{recommendedReason}</p>
        <div className="flex gap-3">
          <p className="mt-4 text-xs">
            Recomended By: {recommenderName}
          </p>
          <p className="mt-4 text-xs">Date: {currentDate}</p>
        </div>
      </div>
    </div>
  );
};

export default AllRecommendation;
