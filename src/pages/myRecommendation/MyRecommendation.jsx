import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import MyRecommendationTable from "./MyRecommendationTable";

const MyRecommendation = () => {
  const [myRecommendations, setMyRecommendations] = useState([]);
  const { user } = useContext(AuthContext);
  const fetchMyRecommendation = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/userRecommendation/${user?.email}`
      );
      setMyRecommendations(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyRecommendation();
  }, []);
  console.log(myRecommendations);
  return (
    <div className="overflow-x-auto md:py-10 py-5 container mx-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Recommended Product Name</th>
            <th>Recommended By</th>
            <th>Current Date</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {myRecommendations.map((recommendation) => (
            <MyRecommendationTable
              myRecommendations={myRecommendations}
              setMyRecommendations={setMyRecommendations}
              key={recommendation._id}
              recommendation={recommendation}
            ></MyRecommendationTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyRecommendation;
