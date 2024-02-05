import React from "react";

function Navbar() {
  return (
    <nav>
      <header className="absolute flex flex-wrap w-full py-4 text-sm bg-white shadow-lg zixed-50 sm:justify-start sm:flex-nowrap">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <a className="flex-none text-2xl font-bold text-black" href="#">
            Sizzle Slice
          </a>
          <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
            <a
              className="font-medium text-gray-600 hover:text-gray-400"
              href="#"
              aria-current="page"
            >
              Cart
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400"
              href="#"
            >
              Login
            </a>
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-800">
              Contct
            </button>
          </div>
        </nav>
      </header>
    </nav>
  );
}

export default Navbar;
