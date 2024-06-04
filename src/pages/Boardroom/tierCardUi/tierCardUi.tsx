const tierDataArray = [
  {
    tierName: "30",
    id: 0,
    multiplier: "1",
    tierTotals: "tier totals",
    stacked: "jashdjkahdkj",
  },
  {
    tierName: "90",
    id: 1,
    multiplier: "1",
    tierTotals: "tier totals",
    stacked: "jashdjkahdkj",
  },
  {
    tierName: "180",
    id: 2,
    multiplier: "1",
    tierTotals: "tier totals",
    stacked: "jashdjkahdkj",
  },
  {
    tierName: "365",
    id: 3,
    multiplier: "1",
    tierTotals: "tier totals",
    stacked: "jashdjkahdkj",
  },
]

const tierData = 

export default function TierCardUi() {
  return (
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
            onChange={handleDnodStackedAmount}
          />
          <button
            className="border-1 h-10 rounded-xl border-pink-700 bg-pink-500 text-2xl text-green-300 dark:text-white"
            onClick={() => handleButtonClick(0)}
            disabled={btnDisabled}
          >
            Lock
          </button>
        </div>
      </div>
    </div>
  )
}
