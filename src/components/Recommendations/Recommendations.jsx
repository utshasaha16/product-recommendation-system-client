import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const Recommendations = ({ recommenderEmail }) => {
  const [recommendations, setRecommendations] = useState([]);
  const fetchRecommendations = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/userRecommendation/${recommenderEmail}`
      );
      setRecommendations(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRecommendations();
  }, [recommenderEmail]);
  console.log(recommendations);
  return (
    <div className="p-4 mt-12">
      <h1 className="text-lg font-bold mb-4">All Recomendations</h1>
      <section>
        {recommendations.map((recommendation) => (
          <div className="flex gap-3">
            <div>
              <img
                className="w-12 h-12 rounded-full"
                src={recommendation.recommendedProductImage}
                alt=""
              />
            </div>
            <div className="p-2 bg-base-200">
              <p className="text-sm font-medium">{recommendation.recommendedProductName}</p>
              <p>{recommendation.recommendedReason}</p>
              <p className="mt-4 text-xs">{recommendation.currentDate}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Recommendations;
