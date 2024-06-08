import React from "react"

const tierHistory: History[] = [
  {
    dateStacked: "kjhjkh",
    timeLeft: "876 calculated",
    expiryDate: "kjhkjhkjh",
    amountStacked: 9878,
    unlockable: false,
    tierId: 0,
    tierAllocPoint: 5675,
    withdrawn: false,
    unlockRate: 5,
    unlockFeeLimit: 12,
  },
  {
    dateStacked: "kjhjkh",
    timeLeft: "876 calculated",
    expiryDate: "kjhkjhkjh",
    amountStacked: 9234228,
    unlockable: false,
    tierId: 0,
    tierAllocPoint: 5675,
    withdrawn: false,
    unlockRate: 5,
    unlockFeeLimit: 12,
  },
  {
    dateStacked: "kjhjkh",
    timeLeft: "876 calculated",
    expiryDate: "kjhkjhkjh",
    amountStacked: 9878,
    unlockable: false,
    tierId: 1,
    tierAllocPoint: 5675,
    withdrawn: false,
    unlockRate: 5,
    unlockFeeLimit: 12,
  },
  {
    dateStacked: "kjhjkh",
    timeLeft: "876 calculated",
    expiryDate: "kjhkjhkjh",
    amountStacked: 9878,
    unlockable: false,
    tierId: 1,
    tierAllocPoint: 5675,
    withdrawn: false,
    unlockRate: 5,
    unlockFeeLimit: 12,
  },
  {
    dateStacked: "kjhjkh",
    timeLeft: "876 calculated",
    expiryDate: "kjhkjhkjh",
    amountStacked: 9878,
    unlockable: false,
    tierId: 1,
    tierAllocPoint: 5675,
    withdrawn: false,
    unlockRate: 5,
    unlockFeeLimit: 12,
  },
  {
    dateStacked: "kjhjkh",
    timeLeft: "876 calculated",
    expiryDate: "kjhkjhkjh",
    amountStacked: 9878,
    unlockable: false,
    tierId: 1,
    tierAllocPoint: 5675,
    withdrawn: false,
    unlockRate: 5,
    unlockFeeLimit: 12,
  },
  {
    dateStacked: "kjhjkh",
    timeLeft: "876 calculated",
    expiryDate: "kjhkjhkjh",
    amountStacked: 9878,
    unlockable: false,
    tierId: 2,
    tierAllocPoint: 5675,
    withdrawn: false,
    unlockRate: 5,
    unlockFeeLimit: 12,
  },
  {
    dateStacked: "kjhjkh",
    timeLeft: "876 calculated",
    expiryDate: "kjhkjhkjh",
    amountStacked: 9878,
    unlockable: false,
    tierId: 2,
    tierAllocPoint: 5675,
    withdrawn: false,
    unlockRate: 5,
    unlockFeeLimit: 12,
  },
  {
    dateStacked: "kjhjkh",
    timeLeft: "876 calculated",
    expiryDate: "kjhkjhkjh",
    amountStacked: 9878,
    unlockable: false,
    tierId: 2,
    tierAllocPoint: 5675,
    withdrawn: false,
    unlockRate: 5,
    unlockFeeLimit: 12,
  },
  {
    dateStacked: "kjhjkh",
    timeLeft: "876 calculated",
    expiryDate: "kjhkjhkjh",
    amountStacked: 9878,
    unlockable: false,
    tierId: 2,
    tierAllocPoint: 5675,
    withdrawn: false,
    unlockRate: 5,
    unlockFeeLimit: 12,
  },
  {
    dateStacked: "kjhjkh",
    timeLeft: "876 calculated",
    expiryDate: "kjhkjhkjh",
    amountStacked: 9878,
    unlockable: false,
    tierId: 2,
    tierAllocPoint: 5675,
    withdrawn: false,
    unlockRate: 5,
    unlockFeeLimit: 12,
  },
  {
    dateStacked: "kjhjkh",
    timeLeft: "876 calculated",
    expiryDate: "kjhkjhkjh",
    amountStacked: 9878,
    unlockable: false,
    tierId: 2,
    tierAllocPoint: 5675,
    withdrawn: false,
    unlockRate: 5,
    unlockFeeLimit: 12,
  },
  {
    dateStacked: "kjhjkh",
    timeLeft: "876 calculated",
    expiryDate: "kjhkjhkjh",
    amountStacked: 9878,
    unlockable: false,
    tierId: 2,
    tierAllocPoint: 5675,
    withdrawn: false,
    unlockRate: 5,
    unlockFeeLimit: 12,
  },
  {
    dateStacked: "kjhjkh",
    timeLeft: "876 calculated",
    expiryDate: "kjhkjhkjh",
    amountStacked: 9878,
    unlockable: false,
    tierId: 2,
    tierAllocPoint: 5675,
    withdrawn: false,
    unlockRate: 5,
    unlockFeeLimit: 12,
  },
  {
    dateStacked: "kjhjkh",
    timeLeft: "876 calculated",
    expiryDate: "kjhkjhkjh",
    amountStacked: 9878,
    unlockable: false,
    tierId: 2,
    tierAllocPoint: 5675,
    withdrawn: false,
    unlockRate: 5,
    unlockFeeLimit: 12,
  },
  {
    dateStacked: "kjhjkh",
    timeLeft: "876 calculated",
    expiryDate: "kjhkjhkjh",
    amountStacked: 9878,
    unlockable: false,
    tierId: 3,
    tierAllocPoint: 5675,
    withdrawn: false,
    unlockRate: 5,
    unlockFeeLimit: 12,
  },
]

interface History {
  dateStacked: string
  timeLeft: string
  expiryDate: string
  amountStacked: number
  unlockable: boolean
  tierId: number
  tierAllocPoint: number
  withdrawn: boolean
  unlockRate: number
  unlockFeeLimit: number
}

function BoardroomTierHistory({
  tierIndex = {
    dateStacked: "default",
    timeLeft: "default",
    expiryDate: "default",
    amountStacked: 9878,
    unlockable: false,
    tierId: 3,
    tierAllocPoint: 5675,
    withdrawn: false,
    unlockRate: 5,
    unlockFeeLimit: 12,
  },
}) {
  if (!tierHistory) {
    return <div>Loading...</div>
  }

  const groupedByTierId = tierHistory.reduce((acc, history) => {
    ;(acc[history.tierId] = acc[history.tierId] || []).push(history)
    return acc
  }, {})

  // const tierHistoryView = groupedByTierId[tierIndex].map((histories, index) => {
  //   return histories
  // })

  // console.log(tierHistoryView)

  return (
    <ul role="list" className="divide-gray-100 divide-y">
      {groupedByTierId[tierIndex]?.map((history: History, index: number) => (
        <li
          key={index}
          className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap"
        >
          <div>
            <p className="text-gray-900 text-sm font-semibold leading-6">
              {history.dateStacked}
            </p>
            <div className="text-gray-500 mt-1 flex items-center gap-x-2 text-xs leading-5">
              <p>{history.amountStacked}</p>
              <p>
                expiryDate
                {history.expiryDate}
              </p>
            </div>
          </div>
          <dl className="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
            <div className="flex -space-x-0.5">
              <dt className="sr-only">Timeleft</dt>
              {history.timeLeft}
            </div>
            <div className="flex gap-x-2.5">
              <dt>
                <span className="sr-only">tier id</span>
                {history.tierId}
              </dt>
              <dd className="text-gray-900 text-sm leading-6">
                expiryDate: {history.expiryDate}
              </dd>
            </div>
          </dl>

          <input />
          <button>Withdraw</button>
        </li>
      ))}
    </ul>
  )
}

export default BoardroomTierHistory
