import React from "react";

function TierCards() {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        <div className="relative card-main py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <div className=" text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6 w-16 h-16">
            30d
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold my-2">30 day Lockup</p>
            <div className="flex justify-between">
              <div className="my-2">
                <p className="font-semibold text-base mb-2">Your Investment</p>
                <div className="flex space-x-2">esshistis</div>
              </div>
              <div className="my-2">
                <p className="font-semibold text-base mb-2">APR</p>
                <div className="text-base text-gray-400 font-semibold">
                  <p>4%</p>
                </div>
              </div>
            </div>

            <div className="border-t-2"></div>

            <div className="flex flex-col justify-between">
              <input
                type="text"
                className="mt-4 mb-4 pl-4 w-full text-md rounded-xl text-white bg-slate-600 h-10"
                placeholder="Add DNOD amount"
              />
              <button className="text-green-300 dark:text-white border-1 border-pink-700 text-2xl rounded-xl h-10 bg-pink-500">
                Lock
              </button>
            </div>
          </div>
        </div>
        <div className="relative card-main py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <div className=" text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6 w-16 h-16">
            90d
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold my-2">90 day Lockup</p>
            <div className="flex justify-between">
              <div className="my-2">
                <p className="font-semibold text-base mb-2">Your Investment</p>
                <div className="flex space-x-2">esshistis</div>
              </div>
              <div className="my-2">
                <p className="font-semibold text-base mb-2">APR</p>
                <div className="text-base text-gray-400 font-semibold">
                  <p>14%</p>
                </div>
              </div>
            </div>
            <div className="border-t-2"></div>
            <div className="flex flex-col justify-between">
              <input
                type="text"
                className="mt-4 mb-4 pl-4 w-full text-md rounded-xl text-white bg-slate-600 h-10"
                placeholder="Add DNOD amount"
              />
              <button className="text-white dark:text-white border-1 border-green-700 text-2xl rounded-xl h-10 bg-green-500">
                Lock
              </button>
            </div>
          </div>
        </div>
        <div className="relative card-main py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <div className=" text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6 w-16 h-16">
            180d
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold my-2">180 day Lockup</p>
            <div className="flex justify-between">
              <div className="my-2">
                <p className="font-semibold text-base mb-2">Your Investment</p>
                <div className="flex space-x-2">esshistis</div>
              </div>
              <div className="my-2">
                <p className="font-semibold text-base mb-2">APR</p>
                <div className="text-base text-gray-400 font-semibold">
                  <p>44%</p>
                </div>
              </div>
            </div>
            <div className="border-t-2"></div>
            <div className="flex flex-col justify-between">
              <input
                type="text"
                className="mt-4 mb-4 pl-4 w-full text-md rounded-xl text-white bg-slate-600 h-10"
                placeholder="Add DNOD amount"
              />
              <button className="text-cyan-300 dark:text-white border-1 border-green-700 text-2xl rounded-xl h-10 bg-blue-500">
                Lock
              </button>
            </div>
          </div>
        </div>
        <div className="relative card-main py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <div className=" text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6 w-16 h-16">
            365d
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold my-2">365 day Lockup</p>
            <div className="flex justify-between">
              <div className="my-2">
                <p className="font-semibold text-base mb-2">Your Investment</p>
                <div className="flex space-x-2">esshistis</div>
              </div>
              <div className="my-2">
                <p className="font-semibold text-base mb-2">APR</p>
                <div className="text-base text-gray-400 font-semibold">
                  <p>94%</p>
                </div>
              </div>
            </div>
            <div className="border-t-2"></div>
            <div className="flex flex-col justify-between">
              <input
                type="text"
                className="mt-4 mb-4 pl-4 w-full text-md rounded-xl text-white bg-slate-600 h-10"
                placeholder="Add DNOD amount"
              />
              <button className="text-white dark:text-white border-1 border-green-700 text-2xl rounded-xl h-10 bg-yellow-500">
                Lock
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TierCards;
