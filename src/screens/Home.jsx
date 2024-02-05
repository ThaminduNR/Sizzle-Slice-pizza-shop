import React from "react";
import pizzas from "../Data";
import Pizza from "../components/Pizza";

function Home() {
  return (
    <div className="mt-10">
      
      <div className="flex justify-center">
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
          {pizzas.map((pizza,index) => {
            return (
              <div key={index}>
                <Pizza pizza={pizza} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
