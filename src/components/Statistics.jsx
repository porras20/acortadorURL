import React from "react";
import iconBrand from "../../public/icon-brand-recognition.svg";
export default function Statistics() {
  return (
    <div className="mt-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-700 font-[Poppins] capitalize mb-5">
          Advanced statistics
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          aliquam!
        </p>
      </div>
      <div className="h-72 my-16 flex gap-5">
        <div className="bg-neutral-200   shadow-lg rounded-md p-3 self-start  ">
          <div className="relative bottom-10">
            <div className="bg-[#2c2451] rounded-full p-3 inline-block whitespace-no-wrap">
              <img src={iconBrand} alt="" className="" />
            </div>
            <h3 className="font-bold capitalize text-xl font-[Poppins]">
              Lorem, ipsum dolor.
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              facere in placeat, iste sapiente ex iure fugiat. Odio?
            </p>
          </div>
        </div>
        <div className="bg-neutral-200 shadow-lg rounded-md p-3 self-center">
          <div className="relative bottom-10">
            <div className="bg-[#2c2451] rounded-full p-3 inline-block whitespace-no-wrap">
              <img src={iconBrand} alt="" className="" />
            </div>
            <h3 className="font-bold capitalize text-xl font-[Poppins]">
              Lorem, ipsum dolor.
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              facere in placeat, iste sapiente ex iure fugiat. Odio?
            </p>
          </div>
        </div>
        <div className="bg-neutral-200 shadow-lg rounded-md p-3 self-end">
          <div className="relative bottom-10">
            <div className="bg-[#2c2451] rounded-full p-3 inline-block whitespace-no-wrap">
              <img src={iconBrand} alt="" className="" />
            </div>
            <h3 className="font-bold capitalize text-xl font-[Poppins]">
              Lorem, ipsum dolor.
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              facere in placeat, iste sapiente ex iure fugiat. Odio?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
