import axios from "axios";
import React, { useEffect, useState } from "react";
import QueriesCard from "../../components/QueriesCard/QueriesCard";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [searchText, setSearchtext] = useState("");
  const [searchProduct, setSearchProduct] = useState([]);

  const fetchQueries = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/recommendations`,
        { withCredentials: true }
      );
      setQueries(data);
      setSearchProduct(data)
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    if (searchText.trim() === "") {
      setSearchProduct(queries);
    } else {
      const filtered = queries.filter((query) =>
        query.productName.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchProduct(filtered);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);
  console.log(queries);
  return (
    <div className="pt-12">
      <h2 className="text-xl font-medium text-center mt-4">All Queries</h2>
      {/* searc */}
      <div className="container mx-auto">
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchText}
          onChange={(e) => setSearchtext(e.target.value)}
          className="input input-bordered w-full mt-4"
        />
        <button onClick={handleSearch}>search</button>
      </div>
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:py-12 py-6 container mx-auto">
        {searchProduct.length > 0 ? (
          searchProduct.map((query) => (
            <QueriesCard key={query._id} query={query}></QueriesCard>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No queries found for "{searchText}".
          </p>
        )}
      </section>
    </div>
  );
};

export default Queries;
