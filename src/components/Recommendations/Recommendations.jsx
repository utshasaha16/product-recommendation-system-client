import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import AllRecommendation from "./AllRecommendation";

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
         <AllRecommendation key={recommendation._id} recommendation={recommendation}></AllRecommendation>
        ))}
      </section>
    </div>
  );
};

export default Recommendations;
