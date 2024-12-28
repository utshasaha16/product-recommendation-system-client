import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const QueryCard = ({ query, queries, setQueries }) => {
 
  const {
    productImage,
    queryTitle,
    productName,
    productBrand,
    currentDateAndTime,
    _id,
  } = query || {};

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://product-recommendation-system-server-eight.vercel.app/recommendations/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your recommendation has been deleted.",
                icon: "success"
              });
             const remaining = queries.filter(item => item._id !== _id)
             setQueries(remaining)
            }
          });
      }
    });
  };

  return (
    <div className="card card-compact bg-base-100 rounded-xl hover:translate-y-2 hover:rounded-none shadow-xl">
      <figure>
        <img src={productImage} alt="product image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black">{productName}</h2>
        <p className="text-xs">{productBrand}</p>
        <p>{queryTitle}</p>
        <p>{currentDateAndTime}</p>
        <div className="card-actions">
          <Link to={`/queryDetails/${_id}`}>
            {" "}
            <button className="py-1 px-2 border border-black hover:bg-black hover:text-white">
              View details
            </button>
          </Link>
          <Link to={`/updateQueries/${_id}`}>
            <button className="py-1 px-2 border border-black hover:bg-black hover:text-white">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="py-1 px-2 border border-black hover:bg-black hover:text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default QueryCard;
