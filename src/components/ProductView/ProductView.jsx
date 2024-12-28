import React from "react";
import productImg1 from "../../assets/productView/ProFlex Yoga Mat.jpg.jpg";
import productImg2 from "../../assets/productView/StrikeForce Soccer Ball.jpg.jpg";
import { GoArrowUpRight } from "react-icons/go";

const ProductView = () => {
  return (
    <div className="flex md:flex-row flex-col md:gap-10 gap-5">
      {/* card-1 */}
      <div className="rounded-md bg-base-100 ">
        <figure>
          <img className="rounded-md" src={productImg1} alt="product image" />
        </figure>
        <div className="p-3 flex justify-between">
          <div>
            <h2 className="card-title">ProFlex Yoga Mat</h2>
            <p>ZenFlex</p>
          </div>
          <div className="w-10 h-10 mt-3 rounded-full flex items-center justify-center bg-black text-white text-2xl">
            <GoArrowUpRight></GoArrowUpRight>
          </div>
        </div>
      </div>
      {/* card-2 */}
      <div className="rounded-md bg-base-100 ">
        <figure>
          <img className="rounded-md" src={productImg2} alt="product image" />
        </figure>
        <div className="p-3 flex justify-between">
          <div>
            <h2 className="card-title">StrikeForce Soccer Ball</h2>
            <p>GoalMaker</p>
          </div>
          <div className="w-10 h-10 mt-3 rounded-full flex items-center justify-center bg-black text-white text-2xl">
            <GoArrowUpRight></GoArrowUpRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
