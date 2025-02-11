import React from "react";
import image1 from '../../assets/boycottedProduct/PowerLift Dumbbell Set.jpg.jpg'
import image2 from '../../assets/boycottedProduct/Cyclone Mountain Bike.jpg.jpg'
import image3 from '../../assets/boycottedProduct/Pro Tennis Racket.jpg.jpg'

const BoycottingReason = () => {
  return (
    <div className="flex md:flex-row flex-col gap-3">
      {/* card 1 */}
      <div className="bg-[#f6cf0c] rounded-md shadow-md">
        <div className="p-4">
          <div className="flex gap-2">
            <img className="w-12 h-12 rounded-full" src={image1} alt="product image" />
            <h2 className="card-title text-black">PowerLift Dumbbell Set</h2>
          </div>
          <p className="mt-3">
            The handles are slippery and uncomfortable during long workouts,
            especially when hands are sweaty. The coating on the weights chips
            easily, exposing the metal and risking rust.
          </p>
        </div>
      </div>
      {/* container-2 */}
      <div className="flex md:flex-col flex-col gap-3">
        {/* card-2 */}
        <div className=" bg-[#0b0b0b] text-white rounded-md shadow-md">
          <div className="p-4">
            <div className="flex gap-2">
              <img className="w-12 h-12 rounded-full" src={image2} alt="product image" />
              <h2 className="card-title">Cyclone Mountain Bike</h2>
            </div>
            <p className="mt-3">
              The frame is prone to bending under heavy use, and the suspension
              system fails to absorb shocks effectively. The bike also requires
              frequent adjustments to the gears, which is inconvenient.
            </p>
          </div>
        </div>
        {/* card-3 */}
        <div className="bg-[#e5e4f7] rounded-md shadow-md">
          <div className="p-4">
            <div className="flex gap-2">
              <img className="w-12 h-12 rounded-full" src={image3} alt="product image" />
              <h2 className="card-title text-black">Pro Tennis Racket</h2>
            </div>
            <p className="mt-3">
              The strings lose tension quickly and need frequent restringing,
              which adds to maintenance costs. Additionally, the grip becomes
              slippery after minimal use, reducing control during matches.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoycottingReason;
