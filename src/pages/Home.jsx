import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Filter from "../components/Filter";
import Cards from "../components/Cards";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import Cart from "../components/Cart";
const Home = () => {
  // const [cate, setCate] = useState(food_items);
  const { input } = useContext(dataContext);
  const { cate, setCate, show } = useContext(dataContext);
  const filterCard = (category) => {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  };
  return (
    <div className="w-full min-h-screen    ">
      {!input ? <Filter filterCard={filterCard} /> : null}
      <Cards cate={cate} />
      <Cart />
    </div>
  );
};

export default Home;
