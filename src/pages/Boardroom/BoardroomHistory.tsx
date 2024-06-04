import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { useEffect, useState } from "react"
import BoardroomTierHistory from "./BoardroomTierHistory"

const boardroomTierHistory = [
  {
    tierName: "30days",
    id: 0,
    multiplier: "1",
    tierTotals: "tier totals",
    stacked: "jashdjkahdkj",
    history: "asdfasdasdasdasdasd",
  },
  {
    tierName: "90days",
    id: 1,
    multiplier: "2.5",
    tierTotals: "tier totals",
    stacked: "jashdjkahdkj",
    history: "asdfasdasdasdasdasd",
  },
  {
    tierName: "180days",
    id: 2,
    multiplier: "6",
    tierTotals: "tier totals",
    stacked: "jashdjkahdkj",
    history: "asdfasdasdasdasdasd",
  },
  {
    tierName: "365days",
    id: 3,
    multiplier: "15",
    tierTotals: "tier totals",
    stacked: "jashdjkahdkj",
    history: "asdfasdasdasdasdasd",
  },
]

function BoardroomHistory() {
  const [showHistory, setShowHistory] = useState([false, false, false, false])

  const handleShowHistory = (index) => {
    const newShowHistory = [...showHistory]
    newShowHistory[index] = !newShowHistory[index]
    console.log(newShowHistory)
    setShowHistory(newShowHistory)
  }

  const tierHistoryList = boardroomTierHistory.map((item, index) => {
    return (
      <>
        <li
          key={item.id}
          className={`hover:bg-gray-50 relative flex justify-between gap-x-6  px-4 py-5 sm:px-6 ${item.multiplier === "1" ? "bg-slate-500 dark:bg-pink-800" : null} ${item.multiplier === "2.5" ? "bg-slate-600 dark:bg-green-800" : null} ${item.multiplier === "6" ? "bg-slate-700 dark:bg-blue-800" : null} ${item.multiplier === "15" ? "bg-yellow-800" : null}`}
          onClick={() => handleShowHistory(index)}
        >
          <div className="flex gap-x-4 ">
            <div className="min-w-0 flex-auto">
              <p className="text-xl leading-6  text-white">
                <span className="absolute inset-x-0 -top-px bottom-0" />
                {item.tierName}
              </p>
              <p className="mt-1 flex text-xs leading-5 text-white">
                Multiplier {item.multiplier}
              </p>
            </div>
          </div>
          <div className="col-2 flex flex-col items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-xl leading-6 text-white">Total Stakced</p>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-white">{item.tierTotals}</p>
            </div>
          </div>
          <div className="col-2 flex flex-col items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-xl leading-6 text-white">Stakced</p>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-white">{item.stacked}</p>
            </div>
          </div>
          <ChevronRightIcon
            className="text-gray-400 h-5 w-5 flex-none"
            aria-hidden="true"
          />
          <div></div>
        </li>
        {showHistory[index] ? <BoardroomTierHistory /> : null}
      </>
    )
  })

  return (
    <div className="mt-10 flex items-center justify-center">
      <ul
        role="list"
        className="divide-gray-100 ring-main w-3/4 divide-y overflow-hidden rounded-3xl shadow-xl ring-1"
      >
        {tierHistoryList}
      </ul>
    </div>
  )
}

export default BoardroomHistory

// old
{
  /* <li
          key="1days"
          className="hover:bg-gray-50 relative flex justify-between gap-x-6 px-4 py-5 sm:px-6"
          onClick={() => console.log("first")}
        >
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-gray-900 text-sm font-semibold leading-6">
                <span className="absolute inset-x-0 -top-px bottom-0" />7 Days
              </p>
              <p className="text-gray-500 mt-1 flex text-xs leading-5">
                email?
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-gray-900 text-sm leading-6">APR...</p>
            </div>
            <ChevronRightIcon
              className="text-gray-400 h-5 w-5 flex-none"
              aria-hidden="true"
            />
          </div>
        </li>
        <li
          key="2days"
          className="hover:bg-gray-50 relative flex justify-between gap-x-6 px-4 py-5 sm:px-6"
        >
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-gray-900 text-sm font-semibold leading-6">
                <span className="absolute inset-x-0 -top-px bottom-0" />7 Days
              </p>
              <p className="text-gray-500 mt-1 flex text-xs leading-5">
                email?
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-gray-900 text-sm leading-6">APR...</p>
            </div>
            <ChevronRightIcon
              className="text-gray-400 h-5 w-5 flex-none"
              aria-hidden="true"
            />
          </div>
        </li>
        <li
          key="3days"
          className="hover:bg-gray-50 relative flex justify-between gap-x-6 px-4 py-5 sm:px-6"
        >
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-gray-900 text-sm font-semibold leading-6">
                <span className="absolute inset-x-0 -top-px bottom-0" />7 Days
              </p>
              <p className="text-gray-500 mt-1 flex text-xs leading-5">
                email?
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-gray-900 text-sm leading-6">APR...</p>
            </div>
            <ChevronRightIcon
              className="text-gray-400 h-5 w-5 flex-none"
              aria-hidden="true"
            />
          </div>
        </li>
        <li
          key="5days"
          className="hover:bg-gray-50 relative flex justify-between gap-x-6 px-4 py-5 sm:px-6"
        >
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-gray-900 text-sm font-semibold leading-6">
                <span className="absolute inset-x-0 -top-px bottom-0" />7 Days
              </p>
              <p className="text-gray-500 mt-1 flex text-xs leading-5">
                email?
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-gray-900 text-sm leading-6">APR...</p>
            </div>
            <ChevronRightIcon
              className="text-gray-400 h-5 w-5 flex-none"
              aria-hidden="true"
            />
          </div>
        </li>
        <li
          key="7days"
          className="hover:bg-gray-50 relative flex justify-between gap-x-6 px-4 py-5 sm:px-6"
        >
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-gray-900 text-sm font-semibold leading-6">
                <span className="absolute inset-x-0 -top-px bottom-0" />7 Days
              </p>
              <p className="text-gray-500 mt-1 flex text-xs leading-5">
                email?
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-gray-900 text-sm leading-6">APR...</p>
            </div>
            <ChevronRightIcon
              className="text-gray-400 h-5 w-5 flex-none"
              aria-hidden="true"
            />
          </div>
        </li> */
}
