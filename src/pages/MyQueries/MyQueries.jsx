import React, { useContext, useEffect, useState } from "react";
import MyQueriesBanner from "../../components/Banner/MyQueriesBanner";
import axios from "axios";
import QueryCard from "../../components/QueryCard/QueryCard";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";

const MyQueries = () => {
  const [queries, setQueries] = useState([]);
  const {user} = useContext(AuthContext)
  // const [querys, setQuerys] = useState(queries);
  useEffect(() => {
    fetchAllRecommendation();
  }, []);
  const fetchAllRecommendation = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/recommendations?email=${user?.email}`, {withCredentials: true}
    );
    setQueries(data);
  };
  console.log(queries);


  return (
    <div>
      <header className="md:pt-12 pt-6">
        <MyQueriesBanner></MyQueriesBanner>
      </header>
      <main className="md:py-12 py-6 container mx-auto">
        <h1 className="text-xl font-bold text-center md:mb-12 mb-6">My Queries</h1>
        <section>
          <div>
            {queries.length === 0 ? (
              <div className="flex flex-col items-center">
                <p className="text-gray-600 mb-4">No queries found.</p>
                <Link to="/addQueries">
                  <button className="px-4 py-2  border text-black hover:text-white hover:bg-black border-black">
                    Add Query
                  </button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {queries.map((query) => (
                  <QueryCard key={query._id} queries={queries} setQueries={setQueries} query={query}></QueryCard>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyQueries;
