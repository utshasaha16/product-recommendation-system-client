import React from "react";

const TableRecommendationForMe = ({recommandation}) => {
    console.log(recommandation);
    const {recommendedProductName, recommenderName, currentDate, prevProductName} = recommandation;
  return (
    <tr>
      <td>
       {prevProductName}
      </td>
      <td>{recommendedProductName}</td>
      <td>{recommenderName}</td>
      <td>{currentDate}</td>
    </tr>
  );
};

export default TableRecommendationForMe;
