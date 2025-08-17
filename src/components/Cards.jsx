import React, { useState } from "react";
import { food_items } from "../food";
import Card from "./Card";
import Filter from "./Filter";
const Cards = ({ cate }) => {
  return (
    <div className="w-full h-auto flex  justify-center flex-wrap gap-5 py-5 px-1">
      {cate.length >= 1 ? (
        cate.map((item) => (
          <Card
            id={item.id}
            name={item.food_name}
            category={item.food_category}
            type={item.food_type}
            quantity={item.food_quantity}
            image={item.food_image}
            price={item.price}
          />
        ))
      ) : (
        <div className="w-full text-green-500 mt-10   flex  justify-center text-[22px] font-semibold">
          No Dish Found
        </div>
      )}
    </div>
  );
};

export default Cards;
