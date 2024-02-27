"use client";
import React, { useState } from "react";

import { useGetMultipleBalances } from "@/web3/wagmi/useGetMultiBalance";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const mailingLists = [
  {
    id: 1,
    title: "USDC",
    description: "asdasdasd",
    users: "234",
  },
  {
    id: 2,
    title: "USDT",
    description: "dfsfsf",
    users: "234234",
  },
  {
    id: 3,
    title: "DAI",
    description: "sdfsdfsdf ",
    users: "5345345",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function CollateralSelection() {
  const balances = useGetMultipleBalances();

  // console.log(balances);

  // console.log(balances);

  const [selectedMailingLists, setSelectedMailingLists] = useState(
    mailingLists[0]
  );
  return (
    <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
      <div className="mt-4 grid grid-cols-1 gap-y-6 bg-main-800 sm:grid-cols-3 sm:gap-x-4">
        {mailingLists.map((mailingList, index) => (
          <RadioGroup.Option
            key={mailingList.id}
            value={mailingList}
            className={({ checked, active }) =>
              classNames(
                checked ? "border-main-600" : "border-main-600",
                active ? "border-main-600 ring-2 ring-main-600" : "",
                "relative flex cursor-pointer rounded-lg border bg-main-800 p-4 shadow-sm focus:outline-none hover:bg-main-600"
              )
            }
          >
            {({ checked, active }) => (
              <>
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className="block text-sm font-medium text-white"
                    >
                      {mailingList.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className="mt-1 flex items-center text-sm text-white"
                    >
                      {mailingList.description}
                    </RadioGroup.Description>
                    <RadioGroup.Description
                      as="span"
                      className="mt-6 text-lg font-medium text-white"
                    >
                      Available funds:{" "}
                      <span className="text-green-400 ">
                        {balances && balances[index].result?.toLocaleString()}
                      </span>
                    </RadioGroup.Description>
                  </span>
                </span>
                <CheckCircleIcon
                  className={classNames(
                    !checked ? "invisible" : "",
                    "h-5 w-5 text-indigo-800"
                  )}
                  aria-hidden="true"
                />
                <span
                  className={classNames(
                    active ? "border" : "border-2",
                    checked ? "border-main-500" : "border-transparent",
                    "pointer-events-none absolute -inset-px rounded-lg"
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}

export default CollateralSelection;
