import React, { useEffect, useState } from "react";
import MyQueriesBanner from "../../components/Banner/MyQueriesBanner";
import axios from "axios";
import QueryCard from "../../components/QueryCard/QueryCard";

const MyQueries = () => {
  const [queries, setQueries] = useState([]);
  useEffect(() => {
    fetchAllRecommendation();
  }, []);
  const fetchAllRecommendation = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/recommendations`
    );
    setQueries(data);
  };
  console.log(queries);
  return (
    <div>
      <header className="py-12">
        <MyQueriesBanner></MyQueriesBanner>
      </header>
      <main className="py-12">
      <h1 className="text-xl font-bold text-center mb-6">My Queries</h1>
        <section >
          <div>
            {queries.length === 0 ? (
              <div>
                <p className="text-gray-600 mb-4">No queries found.</p>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Query
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    queries.map(query => <QueryCard key={query._id} query={query}></QueryCard>)
                }
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyQueries;
