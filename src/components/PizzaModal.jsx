import React, { useState } from "react";

function PizzaModal({ isVisible, onClose, pizza }) {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-55">
      <div className="bg-white p-7 w-[450px] h-[550px] rounded-md relative ">
        {/* <button
          className="w-[20px] h-[20px] bg-red-600 text-white rounded-xl flex justify-center items-center p-3 absolute right-5 top-4"
          onClick={() => onClose()}
        >
          X
        </button> */}
        <h1 className="mt-6 font-bold text-center">{pizza.name}</h1>
        <div className="flex items-center justify-center w-full mt-7">
          <img src={pizza.image} alt="pizza image" />
        </div>
        <div className="flex flex-col items-center justify-center mt-5 text-center">
          <p>{pizza.description}</p>
          <button
            className="w-[120px] h-[40px] bg-orange-400 rounded-md hover:bg-orange-600 text-white  mt-6"
            onClick={() => onClose()}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaModal;
