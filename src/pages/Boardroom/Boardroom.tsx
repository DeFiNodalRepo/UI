import DefaultLayout from "../../layout/DefaultLayout";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import TierCards from "./TierCards";

const stats = [
  { name: "Number of deploys", value: "405" },
  { name: "Average deploy time", value: "3.65", unit: "mins" },
  { name: "Number of servers", value: "3" },
  { name: "Success rate", value: "98.5%" },
];

function Boardroom() {
  return (
    <DefaultLayout>
      <div>Boardroom</div>

      <div className="flex flex-col justify-center items-center mb-10">
        <div className=" ring-1 ring-main sm:rounded-xl w-full flex justify-center ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-28">
            {stats.map((stat) => (
              <div key={stat.name} className=" px-4 py-6 sm:px-6 lg:px-8">
                <p className="text-sm font-medium leading-6 ">{stat.name}</p>
                <p className="mt-2 flex items-baseline gap-x-2">
                  <span className="text-4xl font-semibold tracking-tight ">
                    {stat.value}
                  </span>
                  {stat.unit ? (
                    <span className="text-sm ">{stat.unit}</span>
                  ) : null}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TierCards />
      <div className="flex items-center justify-center mt-10">
        <ul
          role="list"
          className="divide-y divide-gray-100 overflow-hidden  shadow-sm ring-1 ring-main sm:rounded-xl w-3/4"
        >
          <li
            key="7days"
            className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
          >
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  <span className="absolute inset-x-0 -top-px bottom-0" />7 Days
                </p>
                <p className="mt-1 flex text-xs leading-5 text-gray-500">
                  email?
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">APR...</p>
              </div>
              <ChevronRightIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </div>
          </li>
          <li
            key="7days"
            className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
          >
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  <span className="absolute inset-x-0 -top-px bottom-0" />7 Days
                </p>
                <p className="mt-1 flex text-xs leading-5 text-gray-500">
                  email?
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">APR...</p>
              </div>
              <ChevronRightIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </div>
          </li>
          <li
            key="7days"
            className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
          >
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  <span className="absolute inset-x-0 -top-px bottom-0" />7 Days
                </p>
                <p className="mt-1 flex text-xs leading-5 text-gray-500">
                  email?
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">APR...</p>
              </div>
              <ChevronRightIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </div>
          </li>
          <li
            key="7days"
            className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
          >
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  <span className="absolute inset-x-0 -top-px bottom-0" />7 Days
                </p>
                <p className="mt-1 flex text-xs leading-5 text-gray-500">
                  email?
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">APR...</p>
              </div>
              <ChevronRightIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </div>
          </li>
          <li
            key="7days"
            className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
          >
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  <span className="absolute inset-x-0 -top-px bottom-0" />7 Days
                </p>
                <p className="mt-1 flex text-xs leading-5 text-gray-500">
                  email?
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">APR...</p>
              </div>
              <ChevronRightIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </div>
          </li>
        </ul>
      </div>
    </DefaultLayout>
  );
}

export default Boardroom;
