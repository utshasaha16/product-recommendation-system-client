import React from "react";
import { useNavigate } from "react-router-dom";

const QueriesCard = ({ query }) => {
    const navigate = useNavigate();
  const {
    productImage,
    queryTitle,
    productName,
    productBrand,
    recommendationCount,
    _id,
  } = query || {};
  

  const handleRecommended = (id) => {
    navigate(`/queryDetails/${id}`);
  }

  return (
    <div className="card card-compact bg-[#E8EBE4] rounded-xl hover:translate-y-2 hover:rounded-none ">
      <figure>
        <img src={productImage} alt="product image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black">{productName}</h2>
        <p className="text-xs">{productBrand}</p>
        <p>{queryTitle}</p>
        <p>Recommendations: {recommendationCount}</p>
        <div className="card-actions">
          <button onClick={() => handleRecommended(_id)} className="px-8 py-3 border rounded-md bg-[#dedcff] transition duration-300 hover:bg-[#c5baff] hover:scale-105 text-black">
          Recommend
          </button>
        </div>
      </div>
    </div>
  );
};

export default QueriesCard;
