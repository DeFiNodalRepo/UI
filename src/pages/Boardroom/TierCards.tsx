// Todo: Check dnod balance and disable the lock button, check amount and if dnod balance is less than the amount disable

import { useEffect, useState } from "react"
import BoardroomABI from "../../abi/BRLogic.json"
import { web3Addresses } from "../../constants/sideWide"
import { numberToHex, parseUnits, maxUint256, erc20Abi } from "viem"
import { useAccount, useReadContract, useWriteContract } from "wagmi"
import BRBalanceNotification from "./BRBalanceNotification"

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
    multiplier: "3",
    tierTotals: "tier totals",
    stacked: "jashdjkahdkj",
  },
  {
    tierName: "180",
    id: 2,
    multiplier: "8",
    tierTotals: "tier totals",
    stacked: "jashdjkahdkj",
  },
  {
    tierName: "365",
    id: 3,
    multiplier: "20",
    tierTotals: "tier totals",
    stacked: "jashdjkahdkj",
  },
]

function TierCards2({ availableUserDnodBalance, refetchUserDnodBalance }) {
  const [tier, setTier] = useState(0)
  const [amount, setAmount] = useState([0, 0, 0, 0])

  const maxAllowance = numberToHex(maxUint256)
  const { address: userAddress, chainId } = useAccount()
  const {
    data: writeHash,
    isPending,
    writeContract,
    writeContractAsync: allowanceWriteContractAsync,
  } = useWriteContract()

  const btnDisabled = availableUserDnodBalance < 50 ? true : false

  const handleDnodStackedAmount = ({ e, index }) => {
    console.log("first")
    e.preventDefault()
    const newValue = e.target.value
    const updatedAmount = [...amount]
    updatedAmount[index] = newValue
    console.log("updatedAmount", updatedAmount)
    console.log("amount at index", index, " ", updatedAmount[index])
    setAmount(updatedAmount)
  }

  console.log(amount)
  // let parsedAmount = parseUnits(amount[tier].toString(), 18)

  const mintAllowance = useReadContract({
    abi: erc20Abi,
    address: "0xb0e77224e214e902dE434b51125a775F6339F6C9",
    functionName: "allowance",
    args: [userAddress, web3Addresses.dnod],
    account: userAddress,
  })

  const checkAllowance = async () => {
    if (mintAllowance.data < parseUnits(amount[tier].toString(), 18)) {
      await allowanceWriteContractAsync({
        abi: erc20Abi,
        address: web3Addresses.dnod,
        functionName: "approve",
        args: [web3Addresses.boardroomAddress, maxAllowance],
      })
    }
  }

  useEffect(() => {
    refetchUserDnodBalance()
  }, [writeHash])

  const handleButtonClick = async (tier) => {
    await setTier(tier)
    console.log("tier", tier)
    await checkAllowance()
    const currentParsedAmount = parseUnits(amount[tier].toString(), 18) // Assuming `amount` is an array and `tier` is the index
    writeTx(tier, currentParsedAmount) // Use the recalculated `parsedAmount`
  }

  const writeTx = async (tier, parsedAmount) => {
    await writeContract({
      abi: BoardroomABI,
      address: web3Addresses.boardroomAddress,
      functionName: "deposit",
      args: [tier, parsedAmount],
    })
  }

  const renderedCards = tierDataArray.map((item, index) => {
    return (
      <div className="card-main relative my-4 w-64 rounded-3xl px-6 py-6 shadow-xl">
        <div
          className={`absolute -top-6 left-4 flex h-16 w-16 items-center justify-center rounded-full px-4 py-4 text-white shadow-xl ${
            item.tierName === "30"
              ? "bg-pink-500"
              : item.tierName === "90"
                ? "bg-green-500"
                : item.tierName === "180"
                  ? "bg-blue-500"
                  : item.tierName === "365"
                    ? "bg-yellow-500"
                    : "bg-pink-500"
          }`}
        >
          {item.tierName}d
        </div>
        <div className="mt-8">
          <p className="my-2 text-xl font-semibold">
            {item.tierName} days Lockup
          </p>
          <div className="flex justify-between">
            <div className="my-2">
              <p className="mb-2 text-base font-semibold">Your Investment</p>
              <div className="flex space-x-2">{item.stacked}</div>
            </div>
            <div className="my-2">
              <p className="mb-2 text-base font-semibold">Multiplier</p>
              <div className="text-gray-400 text-base font-semibold">
                <p>{item.multiplier}</p>
              </div>
            </div>
          </div>

          <div className="border-t-2"></div>

          <div className="flex flex-col justify-between">
            <input
              type="text"
              className="text-md mb-4 mt-4 h-10 w-full rounded-xl bg-slate-600 pl-4 text-white"
              placeholder="Add DNOD amount"
              onChange={(e) => handleDnodStackedAmount({ e, index })}
            />
            <button
              className={`border-1 h-10 rounded-xl ${
                item.id === 0
                  ? "border-pink-700 bg-pink-500 text-2xl text-green-300 dark:text-white"
                  : item.id === 1
                    ? "border-green-700 bg-green-500 text-2xl text-white"
                    : item.id === 2
                      ? "border-green-700 bg-blue-500 text-2xl text-cyan-300 dark:text-white"
                      : item.id === 3
                        ? "border-green-700 bg-yellow-500 text-2xl text-white"
                        : "border-pink-700 bg-pink-500 text-2xl text-green-300 dark:text-white"
              }`}
              onClick={() => handleButtonClick(index)}
              disabled={btnDisabled}
            >
              Lock
            </button>
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      {availableUserDnodBalance < amount ? (
        <BRBalanceNotification text="You have insufficient DNOD balance" />
      ) : null}
      {isPending ? (
        <BRBalanceNotification text="Transaction pending, please wait" />
      ) : null}
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {renderedCards}
        </div>
      </div>
    </>
  )
}

export default TierCards2

{
  /* <div className="flex items-center justify-center">
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
  <div className="card-main relative my-4 w-64 rounded-3xl px-6 py-6 shadow-xl">
    <div className="absolute -top-6 left-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 px-4 py-4 text-white shadow-xl">
      30d
    </div>
    <div className="mt-8">
      <p className="my-2 text-xl font-semibold">30 day Lockup</p>
      <div className="flex justify-between">
        <div className="my-2">
          <p className="mb-2 text-base font-semibold">
            Your Investment
          </p>
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
  <div className="card-main relative my-4 w-64 rounded-3xl px-6 py-6 shadow-xl">
    <div className="absolute -top-6 left-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 px-4 py-4 text-white shadow-xl">
      90d
    </div>
    <div className="mt-8">
      <p className="my-2 text-xl font-semibold">90 day Lockup</p>
      <div className="flex justify-between">
        <div className="my-2">
          <p className="mb-2 text-base font-semibold">
            Your Investment
          </p>
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
          onChange={handleDnodStackedAmount}
        />
        <button
          className="border-1 h-10 rounded-xl border-green-700 bg-green-500 text-2xl text-white dark:text-white"
          onClick={() => handleButtonClick(1)}
          disabled={btnDisabled}
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
          <p className="mb-2 text-base font-semibold">
            Your Investment
          </p>
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
          onChange={handleDnodStackedAmount}
        />
        <button
          className="border-1 h-10 rounded-xl border-green-700 bg-blue-500 text-2xl text-cyan-300 dark:text-white"
          onClick={() => handleButtonClick(2)}
          disabled={btnDisabled}
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
          <p className="mb-2 text-base font-semibold">
            Your Investment
          </p>
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
          onChange={handleDnodStackedAmount}
        />
        <button
          className="border-1 h-10 rounded-xl border-green-700 bg-yellow-500 text-2xl text-white dark:text-white"
          onClick={() => handleButtonClick(3)}
          disabled={btnDisabled}
        >
          Lock
        </button>
      </div>
    </div>
  </div>
</div>
</div> */
}
