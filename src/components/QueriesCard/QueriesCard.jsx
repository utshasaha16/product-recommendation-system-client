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
    <div className="card card-compact bg-base-100 rounded-xl hover:translate-y-2 hover:rounded-none shadow-md">
      <figure>
        <img src={productImage} alt="product image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black">{productName}</h2>
        <p className="text-xs">{productBrand}</p>
        <p>{queryTitle}</p>
        <p>Recommendations: {recommendationCount}</p>
        <div className="card-actions">
          <button onClick={() => handleRecommended(_id)} className="py-1 px-2 border border-black hover:bg-black hover:text-white">
          Recommend
          </button>
        </div>
      </div>
    </div>
  );
};

export default QueriesCard;
