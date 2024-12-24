import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const AddQueries = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  // console.log(user);

  const handleAddQuery = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productBrand = form.productBrand.value;
    const productImage = form.productImage.value;
    const queryTitle = form.queryTitle.value;
    const boycottingReason = form.boycottingReason.value;
    const email = form.email.value;
    const currentDateAndTime = startDate;

    const formData = {
      productName,
      productBrand,
      productImage,
      queryTitle,
      boycottingReason,
      recommender: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      currentDateAndTime,
      recommendationCount: 0,
    };
    console.log(formData);

    // post request
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/add-recommendation`,
      formData
    );
    console.log(data);
  };

  return (
    <div className=" md:p-12 p-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Add Your Recommendation</h2>
      </div>
      <form onSubmit={handleAddQuery}>
        {/* input field for Product Name url and Product Brand */}
        <div className="md:flex gap-4 items-center">
          <div className="md:w-1/2">
            <label className="text-gray-700 font-medium mb-1">
              Product Name
            </label>

            <input
              type="text"
              name="productName"
              placeholder="Enter product name"
              required
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            ></input>
          </div>
          <div className="md:w-1/2">
            <label className=" text-gray-700 font-medium mb-1">
              Product Brand
            </label>

            <input
              type="text"
              name="productBrand"
              placeholder="Enter product brand"
              required
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            ></input>
          </div>
        </div>
        {/* input field for Product Image-URL and Query TItle */}
        <div className="md:flex gap-4 items-center">
          <div className="md:w-1/2">
            <label className="text-gray-700 font-medium mb-1">
              Product Image-URL
            </label>

            <input
              type="url"
              name="productImage"
              placeholder="Enter product image-URL"
              required
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            ></input>
          </div>
          <div className="md:w-1/2">
            <label className=" text-gray-700 font-medium mb-1">
              Query TItle
            </label>

            <input
              type="text"
              name="queryTitle"
              placeholder="Enter Query tItle"
              required
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            ></input>
          </div>
        </div>
        {/* input field for Boycotting Reason Details and user email */}
        <div className="md:flex gap-4 items-center">
          <div className="md:w-1/2">
            <label className="text-gray-700 font-medium mb-1">
              Boycotting Reason Details
            </label>

            <input
              type="text"
              name="boycottingReason"
              placeholder="Boycotting reason details"
              required
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            ></input>
          </div>
          <div className="md:w-1/2">
            <label className=" text-gray-700 font-medium mb-1">
              User Email
            </label>

            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              readOnly
              placeholder="User email"
              required
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            ></input>
          </div>
        </div>
        {/* input field for current Date and Time */}

        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-medium mb-1">
            Current Date and Time
          </label>

          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>

        <input
          className="w-full border-2 border-black hover:bg-black hover:text-white p-2 rounded-md mt-3 font-medium"
          type="submit"
          value="Add Query"
        />
      </form>
    </div>
  );
};

export default AddQueries;
