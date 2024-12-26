import React from "react";

const MyRecommendationTable = ({ recommendation }) => {
  const {
    recommendedProductImage,
    recommendedProductName,
    recommenderName,
    currentDate,
  } = recommendation;
  return (
    <tr>
      <td>
        <img
          className="md:w-12 md:h-12 rounded-full"
          src={recommendedProductImage}
          alt=""
        />
      </td>
      <td>{recommendedProductName}</td>
      <td>{recommenderName}</td>
      <td>{currentDate}</td>
      <td>
        <button className="btn">X</button>
      </td>
    </tr>
  );
};

export default MyRecommendationTable;
