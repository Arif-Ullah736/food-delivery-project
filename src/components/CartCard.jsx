import React from "react";
import image3 from "../assets/image3.avif";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, DeleteItem, Increment } from "../redux/cartSlice";
import toast from "react-hot-toast";

const CartCard = ({ image, name, price, id, quantity }) => {
  const items = useSelector((item) => item.cart);

  const dispatch = useDispatch();
  return (
    <div className="w-full  flex flex-col  gap-4">
      {/* Cart  */}
      <div className="w-full  h-[250px] md:h-[100px] md:flex  md:justify-between shadow-lg rounded-md px-2 ">
        {/* Left div */}
        <div className=" w-[70%] md:h-full mx-auto md:mx-0  md:flex   md:items-start gap-5  ">
          <div className="md:w-35 md:h-full p-2 w-auto h-20 ">
            <p className="text-black font-semibold md:hidden pb-2 text-center ">
              {name}
            </p>

            <img
              src={image}
              alt=""
              className="w-full h-[80%] object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col items-center justify-center  pt-10 md:pt-2 gap-1">
            <p className="text-black font-semibold hidden md:block ">{name}</p>
            <div className="flex items-center justify-between      border-2  rounded-md ">
              <button
                className="w-6 h-5  flex items-center justify-center  md:w-7 md:h-8 text-center hover:bg-gray-300 transition-all duration-300 ease-in cursor-pointer "
                onClick={() =>
                  quantity > 1 ? dispatch(Decrement(id)) : quantity
                }
              >
                -
              </button>
              <p className=" w-6 h-5  md:w-7 md:h-8 bg-gray-300 text-center flex items-center justify-center">
                {quantity}
              </p>
              <button
                className=" w-6 h-5  md:w-7 md:h-8 hover:bg-gray-300 transition-all duration-300 ease-in cursor-pointer flex items-center justify-center"
                onClick={() => dispatch(Increment(id))}
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Right div */}
        <div className="flex  gap-3 md:gap-1 items-center   flex-col pt-2  ">
          <p>Rs {price}/-</p>
          <RiDeleteBinLine
            size={20}
            className="text-red-400 ml-5  cursor-pointer"
            onClick={() => (
              dispatch(DeleteItem(id)), toast.error("item deleted successfully")
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
