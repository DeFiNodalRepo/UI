import React from "react";

const StableSwapInput = () => {
  return (
    <>
      <div className="mt-5 grid grid-cols-1 gap-4 px-10 sm:grid-cols-2 ">
        <div>
          <label htmlFor="email" className="sr-only">
            Exchange
          </label>
          <input
            type="number"
            name="smish"
            id="email"
            className="block w-full rounded-md border-0 bg-main-500 px-2.5 py-3 pr-4 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="   exchange amount"
          />
        </div>
        <button
          type="button"
          className="block w-full rounded-md border-main-600 bg-main-800 px-2.5 py-1.5 text-lg  font-semibold text-indigo-300 shadow-sm ring-2 ring-main-400 hover:bg-main-500"
        >
          Conditional BTN
        </button>
      </div>
    </>
  );
};

export default StableSwapInput;
