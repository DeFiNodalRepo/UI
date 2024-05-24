import { useState } from "react";
import BoardroomABI from "../../abi/BRLogic.json";

function TierCards() {
  const [daysLocked, setDaysLocked] = useState(0);

  // console.log(daysLocked);

  // console.log(BoardroomABI);

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        <div className="card-main relative my-4 w-64 rounded-3xl px-6 py-6 shadow-xl">
          <div className="absolute -top-6 left-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 px-4 py-4 text-white shadow-xl">
            30d
          </div>
          <div className="mt-8">
            <p className="my-2 text-xl font-semibold">30 day Lockup</p>
            <div className="flex justify-between">
              <div className="my-2">
                <p className="mb-2 text-base font-semibold">Your Investment</p>
                <div className="flex space-x-2">esshistis</div>
              </div>
              <div className="my-2">
                <p className="mb-2 text-base font-semibold">APR</p>
                <div className="text-gray-400 text-base font-semibold">
                  <p>4%</p>
                </div>
              </div>
            </div>

            <div className="border-t-2"></div>

            <div className="flex flex-col justify-between">
              <input
                type="text"
                className="text-md mb-4 mt-4 h-10 w-full rounded-xl bg-slate-600 pl-4 text-white"
                placeholder="Add DNOD amount"
              />
              <button
                className="border-1 h-10 rounded-xl border-pink-700 bg-pink-500 text-2xl text-green-300 dark:text-white"
                onClick={() => setDaysLocked(30)}
              >
                Lock
              </button>
            </div>
          </div>
        </div>
        <div className="card-main relative my-4 w-64 rounded-3xl px-6 py-6 shadow-xl">
          <div className="absolute -top-6 left-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 px-4 py-4 text-white shadow-xl">
            90d
          </div>
          <div className="mt-8">
            <p className="my-2 text-xl font-semibold">90 day Lockup</p>
            <div className="flex justify-between">
              <div className="my-2">
                <p className="mb-2 text-base font-semibold">Your Investment</p>
                <div className="flex space-x-2">esshistis</div>
              </div>
              <div className="my-2">
                <p className="mb-2 text-base font-semibold">APR</p>
                <div className="text-gray-400 text-base font-semibold">
                  <p>14%</p>
                </div>
              </div>
            </div>
            <div className="border-t-2"></div>
            <div className="flex flex-col justify-between">
              <input
                type="text"
                className="text-md mb-4 mt-4 h-10 w-full rounded-xl bg-slate-600 pl-4 text-white"
                placeholder="Add DNOD amount"
              />
              <button
                className="border-1 h-10 rounded-xl border-green-700 bg-green-500 text-2xl text-white dark:text-white"
                onClick={() => setDaysLocked(90)}
              >
                Lock
              </button>
            </div>
          </div>
        </div>
        <div className="card-main relative my-4 w-64 rounded-3xl px-6 py-6 shadow-xl">
          <div className="absolute -top-6 left-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 px-4 py-4 text-white shadow-xl">
            180d
          </div>
          <div className="mt-8">
            <p className="my-2 text-xl font-semibold">180 day Lockup</p>
            <div className="flex justify-between">
              <div className="my-2">
                <p className="mb-2 text-base font-semibold">Your Investment</p>
                <div className="flex space-x-2">esshistis</div>
              </div>
              <div className="my-2">
                <p className="mb-2 text-base font-semibold">APR</p>
                <div className="text-gray-400 text-base font-semibold">
                  <p>44%</p>
                </div>
              </div>
            </div>
            <div className="border-t-2"></div>
            <div className="flex flex-col justify-between">
              <input
                type="text"
                className="text-md mb-4 mt-4 h-10 w-full rounded-xl bg-slate-600 pl-4 text-white"
                placeholder="Add DNOD amount"
              />
              <button
                className="border-1 h-10 rounded-xl border-green-700 bg-blue-500 text-2xl text-cyan-300 dark:text-white"
                onClick={() => setDaysLocked(180)}
              >
                Lock
              </button>
            </div>
          </div>
        </div>
        <div className="card-main relative my-4 w-64 rounded-3xl px-6 py-6 shadow-xl">
          <div className="absolute -top-6 left-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 px-4 py-4 text-white shadow-xl">
            365d
          </div>
          <div className="mt-8">
            <p className="my-2 text-xl font-semibold">365 day Lockup</p>
            <div className="flex justify-between">
              <div className="my-2">
                <p className="mb-2 text-base font-semibold">Your Investment</p>
                <div className="flex space-x-2">esshistis</div>
              </div>
              <div className="my-2">
                <p className="mb-2 text-base font-semibold">APR</p>
                <div className="text-gray-400 text-base font-semibold">
                  <p>94%</p>
                </div>
              </div>
            </div>
            <div className="border-t-2"></div>
            <div className="flex flex-col justify-between">
              <input
                type="text"
                className="text-md mb-4 mt-4 h-10 w-full rounded-xl bg-slate-600 pl-4 text-white"
                placeholder="Add DNOD amount"
              />
              <button
                className="border-1 h-10 rounded-xl border-green-700 bg-yellow-500 text-2xl text-white dark:text-white"
                onClick={() => setDaysLocked(365)}
              >
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
