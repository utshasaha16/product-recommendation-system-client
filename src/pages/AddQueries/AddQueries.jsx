import React from "react";

const AddQueries = () => {
  return (
    <div className=" md:p-12 p-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Add Your Recommendation</h2>
      </div>
      <form >
        {/* input field for Product Name url and Product Brand */}
        <div className="md:flex gap-4 items-center">
          <div className="md:w-1/2">
            <label className="text-gray-700 font-medium mb-1">Product Name</label>

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
            <label className="text-gray-700 font-medium mb-1">Boycotting Reason Details</label>

            <input
              type="text"
              name="boycottingReason"
              placeholder="Boycotting reason details"
              required
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            ></input>
          </div>
          <div className="md:w-1/2">
            <label className=" text-gray-700 font-medium mb-1">User Email</label>

            <input
              type="text"
              name="rating"
              placeholder="User email"
              required
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            ></input>
          </div>
        </div>
        {/* input field for user name and user profile */}
        <div className="md:flex gap-4 items-center">
          <div className="md:w-1/2">
            <label className="text-gray-700 font-medium mb-1">
              User Name
            </label>

            <input
              type="text"
              name="userName"
              placeholder="User name"
              required
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            ></input>
          </div>
          <div className="md:w-1/2">
            <label className=" text-gray-700 font-medium mb-1">
              User Profile
            </label>

            <input
              type="text"
              name="userProfile"
              placeholder="User profile"
              required
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            ></input>
          </div>
        </div>
        {/* input field for current Date and Time and recommendationCount */}
        <div className="md:flex gap-4 items-center">
          <div className="md:w-1/2">
            <label className="text-gray-700 font-medium mb-1">
            Current Date and Time
            </label>

            <input
              type="text"
              name="currentDateAndTime"
              placeholder="Current date and time"
              required
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            ></input>
          </div>
          <div className="md:w-1/2">
            <label className=" text-gray-700 font-medium mb-1">Recommendation Count</label>

            <input
              type="text"
              name="recommendationCount"
              placeholder="Recommendation count"
              required
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            ></input>
          </div>
        </div>
        <input
          className="w-full bg-[#EB453B] text-white p-2 rounded-md mt-3 font-medium"
          type="submit"
          value="Add Query"
        />
      </form>
    </div>
  );
};

export default AddQueries;
