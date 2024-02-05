import React from "react";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white hero-section">
      <h1 className="mb-4 text-5xl font-bold text-white">
        Welcome to Sizzle Slice
      </h1>
      <p className="mb-8 text-xl text-white">The best pizza in town</p>
      <button className="px-4 py-2 font-bold text-white bg-orange-400 rounded hover:bg-orange-600">
        Order Now
      </button>
    </div>
  );
}

export default Hero;
