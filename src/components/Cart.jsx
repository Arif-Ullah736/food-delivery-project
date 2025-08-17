import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { dataContext } from "../context/UserContext";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";

const Cart = () => {
  const { show, setShow } = useContext(dataContext);
  const cartData = useSelector((item) => item.cart);

  let subTotal = cartData.reduce(
    (total, current) => total + current.quantity * current.price,
    0
  );
  let deliveryFee = 20;
  let taxes = (subTotal * 0.5) / 100;
  let total = subTotal + deliveryFee + taxes;
  console.log("total", subTotal);

  return (
    <div
      className={`h-screen overflow-auto w-[40vw] bg-white fixed top-0 right-0 shadow-xl text-green-500 transition-all  duration-300 ease-in flex items-center  flex-col gap-5  pb-5  ${
        show ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-full flex items-center justify-between px-3 py-3 ">
        <span className="text-[18px]">Order Items</span>
        <RxCross2
          size={25}
          className="cursor-pointer"
          onClick={() => setShow(false)}
        />
      </div>
      {cartData.length <= 0 ? (
        <div className="w-full   flex items-center justify-center mt-10 text-[22px] font-semibold">
          <p>Empty Card...</p>
        </div>
      ) : (
        <>
          {cartData.map((item) => (
            <CartCard
              image={item.image}
              name={item.name}
              price={item.price}
              id={item.id}
              quantity={item.quantity}
            />
          ))}

          <div className="h-0.5 bg-black w-[85%] mx-auto"></div>

          <div className="w-full flex items-center justify-between px-2  md:px-8 ">
            <ul className="flex flex-col  gap-1 text-black ">
              <li>Subtotal</li>
              <li>Delivery Fee</li>
              <li>Taxes</li>
            </ul>
            <ul className="flex flex-col  gap-1 items-end ">
              <li>Rs {subTotal}/-</li>
              <li>Rs {deliveryFee}/-</li>
              <li>Rs {taxes}/-</li>
            </ul>
          </div>
          <div className="h-0.5 bg-black w-[85%] mx-auto"></div>

          <div className="w-full  flex flex-col md:flex-row items-center justify-between px-8 ">
            <span className="text-black font-semibold text-[20px]">Total</span>
            <span>Rs {total}/-</span>
          </div>

          <div className="flex items-center justify-center w-full">
            <button className="w-[75%] py-1.5 rounded-sm bg-green-500 flex items-center justify-center text-[13px] font-semibold hover:bg-green-300 transition-all duration-200 ease-in text-white">
              Order Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
