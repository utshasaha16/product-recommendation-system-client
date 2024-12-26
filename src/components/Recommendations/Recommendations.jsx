import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const {user} = useContext(AuthContext)
  const fetchRecommendations = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/userRecommendation/${user?.email}`
      );
      setRecommendations(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRecommendations();
  }, []);
  console.log(recommendations);
  return (
    <div className="md:p-4 p-2 md:mt-12 mt-6">
      <h1 className="text-lg font-bold mb-4">All Recomendations</h1>
      <section>
        {recommendations.map((recommendation) => (
          <div key={recommendation._id} className="flex gap-3">
            <img
              className="w-12 h-12 rounded-full"
              src={recommendation.recommendedProductImage}
              alt=""
            />
            <div className="md:p-2 p-0 bg-base-200">
              <p className="text-sm font-medium">
                {recommendation.recommendedProductName}
              </p>
              <p>{recommendation.recommendedReason}</p>
              <div className="flex justify-between">
                <p className="mt-4 text-xs">
                  Recomended By: {recommendation.recommenderName}
                </p>
                <p className="mt-4 text-xs">{recommendation.currentDate}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Recommendations;
