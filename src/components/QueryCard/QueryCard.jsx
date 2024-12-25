import React from "react";
import { Link } from "react-router-dom";

const QueryCard = ({ query }) => {
  const {
    productImage,
    queryTitle,
    productName,
    productBrand,
    currentDateAndTime,
    _id,
  } = query || {}
  return (
    <div className="card card-compact bg-base-100 rounded-xl hover:translate-y-2 hover:rounded-none shadow-xl">
      <figure>
        <img
          src={productImage}
          alt="product image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black">{productName}</h2>
        <p className="text-xs">{productBrand}</p>
        <p>{queryTitle}</p>
        <p>{currentDateAndTime}</p>
        <div className="card-actions">
         <Link to={`/queryDetails/${_id}`}> <button className="py-1 px-2 border border-black hover:bg-black hover:text-white">View details</button></Link>
          <Link><button className="py-1 px-2 border border-black hover:bg-black hover:text-white">Update</button></Link>
          <button className="py-1 px-2 border border-black hover:bg-black hover:text-white">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default QueryCard;
