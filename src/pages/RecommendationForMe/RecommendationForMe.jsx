import axios from "axios";
import React, { useEffect, useState } from "react";
import TableRecommendationForMe from "./TableRecommendationForMe";

const RecommendationForMe = () => {
  const [recommendations, setRecommendations] = useState([]);

  const fetchRecommendations = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/userRecommendation`
      );
      setRecommendations(data || []);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(recommendations);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  return (
    <div className="overflow-x-auto md:py-10 py-5 container mx-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Recommended Product</th>
            <th>Recommender Name</th>
            <th>Current Date</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            recommendations.map(recommendation => <TableRecommendationForMe key={recommendation._id} recommandation={recommendation}></TableRecommendationForMe>)
          }
          
        </tbody>
      </table>
    </div>
  );
};

export default RecommendationForMe;
