import React, { useState } from "react";
import PizzaModal from "./PizzaModal";

function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("small");

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-[350px] p-[40px] shadow-xl">
      <h1 className="font-bold">{pizza.name}</h1>
      <img
        src={pizza.image}
        alt="image"
        className="cursor-pointer img-fluid"
        onClick={() => setIsVisible(true)}
      />
      <div className="flex justify-between w-[100%] mt-5">
        <div>
          <p>Varients</p>
          <select
            key={pizza._id}
            className="w-[100px] h-[30px] bg-white border-2 border-gray-300 rounded-md"
            value={variant}
            onChange={(e) => {
              setVariant(e.target.value);
            }}
          >
            {pizza.varients.map((variant) => {
              return <option value={variant}>{variant}</option>;
            })}
          </select>
        </div>
        <div>
          <p>Quantity</p>
          <select
            className="w-[100px] h-[30px] bg-white border-2 border-gray-300 rounded-sm"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            key={pizza._id}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex justify-between w-[100%] items-center mt-5">
        <div className="font-bold">
          Price Rs : {pizza.prices[0][variant] * quantity}
        </div>
        <button className="w-[120px] h-[40px] bg-orange-400 rounded-md hover:bg-orange-600 text-white ">
          Add to cart
        </button>
      </div>
      <PizzaModal isVisible={isVisible} onClose={() => setIsVisible(false)} pizza={pizza} />
    </div>
  );
}

export default Pizza;
