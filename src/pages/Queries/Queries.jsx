import axios from "axios";
import React, { useEffect, useState } from "react";
import QueriesCard from "../../components/QueriesCard/QueriesCard";

const Queries = () => {
  const [queries, setQueries] = useState([]);

  const fetchQueries = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/recommendations`
      );
      setQueries(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchQueries();
  }, []);
  console.log(queries);
  return (
    <div>
      <h2 className="text-xl font-medium text-center mt-4">All Queries</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:py-12 py-6 md:w-11/12 mx-auto">
        {
            queries.map(query => <QueriesCard key={query._id} query={query}></QueriesCard>)
        }
      </section>
    </div>
  );
};

export default Queries;
