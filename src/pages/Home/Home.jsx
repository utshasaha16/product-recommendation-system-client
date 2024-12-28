import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import axios from "axios";
import QueriesCard from "../../components/QueriesCard/QueriesCard";
import BoycottingReason from "../../components/BoycottingReason/BoycottingReason";
import ProductView from "../../components/ProductView/ProductView";


const Home = () => {
  const [recommendations, setRecommendations] = useState([]);

  const fetchRecommendation =async () => {
    try{
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/recommendations`)
      const letestRecommendation = data.slice(0, 6)
      setRecommendations(letestRecommendation)
    }
    catch(error){
      console.log(error);
    }
  }
  console.log(recommendations);

  useEffect(() => {
    fetchRecommendation()
  }, [])

  return (
    <div>
      <header className="md:py-12 py-6">
        {/* banner section */}
        <Banner></Banner>
      </header>
      <main className=" md:w-11/12 mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:py-12 py-6">
          {
            recommendations.map(query => <QueriesCard key={query._id} query={query}></QueriesCard>)
          }
        </section>
        {/* boycotted products section */}
        <section className="md:py-12 py-6">
          <h1 className="text-center font-bold mb-5 text-xl">Boycotting Products</h1>
          <BoycottingReason></BoycottingReason>
        </section>
        {/* product view section */}
        <section className="md:py-12 py-6">
          <ProductView></ProductView>
        </section>
      </main>
    </div>
  );
};

export default Home;
