import { useContext, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { MdFastfood } from "react-icons/md";
import { PiShoppingBagOpen } from "react-icons/pi";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";

const Nav = () => {
  const { input, setInput, cate, setCate, show, setShow } =
    useContext(dataContext);

  const cartData = useSelector((item) => item.cart);

  useEffect(() => {
    let inputList = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(inputList);
  }, [input]);

  return (
    <div className="w-[100%] h-[80px]  flex items-center justify-between px-4 md:px-8">
      <div className="h-12 w-11 bg-white flex items-center justify-center  text-green-500 rounded-md shadow-xl">
        <MdFastfood className="w-[25px] h-[25px]" />
      </div>
      <div className="flex items-center justify-between w-[50%] md:w-[70%] h-12 bg-white  md:px-5  gap-5 rounded-md shadow-md">
        <button className="text-green-500 pl-3 hidden md:block">
          <CiSearch className="w-5 h-5" />
        </button>
        <input
          type="text"
          className=" outline-0 w-full text-[14px] md:text-[20px] flex-wrap px-2 md:px-0"
          placeholder="Search your dish..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
      <div
        className="h-12 w-12 bg-white flex items-center justify-center  text-green-500 rounded-md shadow-xl relative cursor-pointer"
        onClick={() => setShow(true)}
      >
        <PiShoppingBagOpen className="w-[25px] h-[25px]" />
        <span className="absolute right-2 -top-1  font-semibold text-[14px]">
          {cartData.length}
        </span>
      </div>
    </div>
  );
};

export default Nav;
