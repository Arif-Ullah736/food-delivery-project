import React, { createContext, useState } from "react";
import { data } from "react-router-dom";
import { food_items } from "../food";

export const dataContext = createContext();
const UserContext = ({ children }) => {
  const [input, setInput] = useState("");
  const [cate, setCate] = useState(food_items);
  const [show, setShow] = useState(false);

  let data = {
    input,
    setInput,
    cate,
    setCate,
    show,
    setShow,
  };
  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
};

export default UserContext;
