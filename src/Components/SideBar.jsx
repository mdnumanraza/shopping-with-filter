import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const SideBar = () => {
  const sizes = [
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 44, 45, 46, 47, 48, 49,
  ];
  const [priceRange, setPriceRange] = useState("300");
  const [side,setSide] = useState(false);

  if(side){
      return (
        <div className="px-8 flex flex-col gap-4  bg-slate-800 text-white w-[300px]">
          
          <div className="my-4  ">
            <button type="button" className=" bg-slate-600 rounded-2xl hover:bg-slate-900 hover:border-red-500 hover:border-dashed p-3 ">
              Clear Filter 
              {/* <FaFilter /> */}
            </button>
          </div>
    
        <p className="border border-white w-full mb-3"></p>
          
          <div>
            <h2 className="text-lg font-bold text-slate-300 mb-4">
              Price Range <span> (in $) </span>{" "}
            </h2>
            <input
              type="range"
              min={"300"}
              max={"10000"}
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            />
            <p className="block">
    
           $  {priceRange} /-
            </p>
          </div>
    
          <p className="border border-white w-full mb-3 mt-3"></p>
    
          <div>
            <h3 className="text-lg font-bold text-slate-300 mb-4">Categories</h3>
            <div>
              <label className="flex gap-2">
                <input type="checkbox" name="Sports" id="" />
                <p>Sports</p>
              </label>
              <label className="flex gap-2">
                <input type="checkbox" name="Sneakers" id="" />
                <p>Sneakers</p>
              </label>
              <label className="flex gap-2">
                <input type="checkbox" name="Boots" id="" />
                <p>Boots</p>
              </label>
              <label className="flex gap-2">
                <input type="checkbox" name="Formal" id="" />
                <p>Formal</p>
              </label>
            </div>
          </div>
    
          <p className="border border-white w-full mb-3 mt-3"></p>
    
          <div className="mb-10">
            <h2 className="text-lg font-bold text-slate-300">Size</h2>
    
            <div className="flex flex-col">
              {sizes.map((size, index) => (
                <label key={index} className="flex gap-2">
                  <input type="checkbox" value={size} />
                  {size}
                </label>
              ))}
            </div>
          </div>
        </div>
        
        
      );
    
  }
  else{
    return(
        <div className="px-2 flex flex-col gap-4 md:hidden  bg-slate-800 text-white w-[60px]">
           <div className="flex justify-center mt-5 ">
            <FiMenu/> 

           </div>
        </div>
    )
  }
};

export default SideBar;
