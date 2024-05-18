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
            <div className="flex space-x-2 text-gray-400 text-sm">
              kljklj lkj lk jlk
            </div>
            <div className="flex space-x-2 text-gray-400 text-sm my-3">
              dadasd
            </div>
            <div className="border-t-2"></div>

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
          </div>
        </div>
        <div className="relative card-main py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <div className=" text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6 w-16 h-16">
            90d
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold my-2">30 day Lockup</p>
            <div className="flex space-x-2 text-gray-400 text-sm">
              kljklj lkj lk jlk
            </div>
            <div className="flex space-x-2 text-gray-400 text-sm my-3">
              dadasd
            </div>
            <div className="border-t-2"></div>

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
          </div>
        </div>
        <div className="relative card-main py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <div className=" text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6 w-16 h-16">
            180d
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold my-2">30 day Lockup</p>
            <div className="flex space-x-2 text-gray-400 text-sm">
              kljklj lkj lk jlk
            </div>
            <div className="flex space-x-2 text-gray-400 text-sm my-3">
              dadasd
            </div>
            <div className="border-t-2"></div>

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
          </div>
        </div>
        <div className="relative card-main py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <div className=" text-white flex items-center justify-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6 w-16 h-16">
            365d
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold my-2">30 day Lockup</p>
            <div className="flex space-x-2 text-gray-400 text-sm">
              kljklj lkj lk jlk
            </div>
            <div className="flex space-x-2 text-gray-400 text-sm my-3">
              dadasd
            </div>
            <div className="border-t-2"></div>

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default TierCards;
