import axios from "axios";
import React, { useEffect, useState } from "react";
import TableRecommendationForMe from "./TableRecommendationForMe";
import Loading from "../Loading/Loading";

const RecommendationForMe = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecommendations = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/userRecommendation`
      );
      setRecommendations(data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(recommendations);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  return (
    <div className="overflow-x-auto py-20 container mx-auto">
      {loading ? (
        <Loading></Loading>
      ) : (
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
            {recommendations.map((recommendation) => (
              <TableRecommendationForMe
                key={recommendation._id}
                recommandation={recommendation}
              ></TableRecommendationForMe>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RecommendationForMe;
