const tierHistory = [
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
    index: 1212, // index of getAllDepositInfo
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
    tierId: 45646,
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
    tierId: 45646,
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
    tierId: 45646,
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
    tierId: 45646,
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
    tierId: 45646,
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
    tierId: 45646,
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
    tierId: 45646,
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
    tierId: 45646,
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
    tierId: 45646,
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
    tierId: 45646,
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
    tierId: 45646,
    tierAllocPoint: 5675,
    withdrawn: false,
    unlockRate: 5,
    unlockFeeLimit: 12,
  },
]

export default function BoardroomTierHistory() {
  return (
    <>
      <ul role="list" className="divide-gray-100 divide-y">
        {tierHistory.map((history, index) => (
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
                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                  <circle cx={1} cy={1} r={1} />
                </svg>
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
    </>
  )
}
