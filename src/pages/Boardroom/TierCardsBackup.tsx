// Todo: Check dnod balance and disable the lock button, check amount and if dnod balance is less than the amount disable
// Todo fix webbaddressess

import { useEffect, useState } from "react"
import BoardroomABI from "../../abi/BRLogic.json"
import { useErc20Allownce } from "../../hooks/web3/useErc20Allowance"
import { web3Addresses } from "../../constants/sideWide"
import { numberToHex, parseUnits, maxUint256, erc20Abi } from "viem"
import { useAccount, useReadContract, useWriteContract } from "wagmi"
import BRBalanceNotification from "./BRBalanceNotification"
import TierCardUi from "./tierCardUi/tierCardUi"

function TierCards({ availableUserDnodBalance, refetchUserDnodBalance }) {
  const [tier, setTier] = useState(0)
  const [amount, setAmount] = useState("")

  console.log("backup")

  const maxAllowance = numberToHex(maxUint256)
  const { address: userAddress, chainId } = useAccount()
  const {
    data: writeHash,
    isPending,
    writeContract,
    writeContractAsync: allowanceWriteContractAsync,
  } = useWriteContract()

  const btnDisabled = availableUserDnodBalance < 50 ? true : false

  const handleDnodStackedAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setTimeout(() => setAmount(e.target.value), 2000)
  }

  let parsedAmount = parseUnits(amount.toString(), 18)

  const mintAllowance = useReadContract({
    abi: erc20Abi,
    address: web3Addresses.dnod,
    functionName: "allowance",
    args: [userAddress, web3Addresses.boardroomAddress],
    account: userAddress,
  })

  const checkAllowance = async () => {
    if (mintAllowance.data < parseUnits(amount.toString(), 18)) {
      await allowanceWriteContractAsync({
        abi: erc20Abi,
        address: web3Addresses.dnod,
        functionName: "approve",
        args: [web3Addresses.boardroomAddress, maxAllowance],
      })
    }
  }

  const writeTx = async () => {
    await writeContract({
      abi: BoardroomABI,
      address: web3Addresses.boardroomAddress,
      functionName: "deposit",
      args: [tier, parsedAmount],
    })
  }

  useEffect(() => {
    refetchUserDnodBalance()
  }, [writeHash])

  // useEffect(() => {
  //   checkAllowance()
  //   writeTx()
  // }, [tier])

  const handleButtonClick = async (days) => {
    setTier(days)

    await checkAllowance()
    await writeTx()
  }

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
      </div>
    </>
  )
}

export default TierCards
