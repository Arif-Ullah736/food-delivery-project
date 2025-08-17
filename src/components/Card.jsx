import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiCirclingFish } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import toast from "react-hot-toast";

const Card = ({ id, name, category, type, quantity, image, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-[200px] h-[250px] bg-white rounded-md shadow-lg p-2 flex flex-col items-center justify-between  border border-transparent hover:border-3 hover:border-green-500  transition-all duration-300 ease-in   ">
      <div className="w-full h-[55%]">
        <img
          src={image}
          alt=""
          className="w-full h-full rounded-md object-cover"
        />
      </div>
      <div className="flex iitems-center justify-start w-full  font-semibold">
        <p>{name}</p>
      </div>
      <div className=" w-full flex items-center justify-between text-green-500 font-semibold text-[14px] pr-1 ">
        <p>Rs {price}/-</p>
        <p className="flex items-center justify-center gap-1">
          {type === "veg" ? <LuLeafyGreen /> : <GiCirclingFish />}

          <span> {type}</span>
        </p>
      </div>
      <button
        className="w-full py-1 rounded-sm bg-green-500 flex items-center justify-center text-[13px] font-semibold hover:bg-green-300 text-white transition-all duration-200 ease-in"
        onClick={() => (
          dispatch(AddItem({ name, image, price, id, quantity })),
          toast.success("item added successfully")
        )}
      >
        Add to Dish
      </button>
    </div>
  );
};

export default Card;
