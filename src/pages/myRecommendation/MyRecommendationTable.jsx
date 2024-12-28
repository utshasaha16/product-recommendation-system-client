import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const MyRecommendationTable = ({ recommendation, myRecommendations, setMyRecommendations }) => {
  const {
    recommendedProductImage,
    recommendedProductName,
    recommenderName,
    currentDate,
    _id,
  } = recommendation;

  const handleDelete = async (_id) => {
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
            fetch(`https://product-recommendation-system-server-eight.vercel.app/userRecommendation/${_id}`, {
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
                 const remaining = myRecommendations.filter(item => item._id !== _id)
                 setMyRecommendations(remaining)
                }
              });
          }
        });

  };

  return (
    <tr>
      <td>
        <img
          className="md:w-12 md:h-12 rounded-full"
          src={recommendedProductImage}
          alt=""
        />
      </td>
      <td>{recommendedProductName}</td>
      <td>{recommenderName}</td>
      <td>{currentDate}</td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="border border-black hover:bg-black hover:text-white p-2 font-medium"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyRecommendationTable;
