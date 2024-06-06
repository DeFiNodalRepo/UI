// Todo Check why checkboxes are not checked when the input field is clicked
// Todo: Do not allow minting if balance is less than zero or there is no value for inputValue
// Todo Simulate contract 1 to 0.995 if no simulation is found

import DefaultLayout from "../../layout/DefaultLayout"
import { useState, useCallback, useEffect } from "react"
import { RadioGroup } from "@headlessui/react"
import { CheckCircleIcon } from "@heroicons/react/20/solid"
import { collateralSelection } from "../../constants/sdnod"
import {
  useSimulateContract,
  useReadContract,
  useReadContracts,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi"
import CollSdnodABI from "../../abi/STBalancer.json"
import {
  formatUnits,
  parseUnits,
  erc20Abi,
  numberToHex,
  maxUint256,
} from "viem"
import useGetBalance from "../../hooks/web3/useGetBalance"
import { sDNODAddress } from "../../constants/sdnod"
import BouncingBalls from "../../ui/bouncingBalls"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

function SDnod({ chain, chainId, userAddress }: any) {
  const sDnodBalanceConfig = [
    {
      address: sDNODAddress,
      abi: erc20Abi,
      functionName: "balanceOf",
      args: [userAddress],
      id: "sdnod",
    },
  ] as const
  const maxAllowance = numberToHex(maxUint256)

  let collateralsAvailable

  if (chainId !== 1337 || !chainId) {
    collateralsAvailable = collateralSelection[1]
  } else {
    collateralsAvailable = collateralSelection[chainId]
  }
  const [isMintClicked, setIsMintClicked] = useState(false)
  const [isRedeemClicked, setIsRedeemClicked] = useState(false)
  const [selectedCollateral, setSelectedCollateral] = useState(
    collateralsAvailable[0]
  )
  const [inputValue, setInputValue] = useState("1")

  const { data: writeHash, isPending, writeContract } = useWriteContract()

  const { balanceResult, refetch: refetchSDnod } =
    useGetBalance("erc20Platform")

  // let sdnodUserBalance = 0;

  let sdnodBalance =
    balanceResult.sdnod.status === "success" ? (
      Number(formatUnits(balanceResult.sdnod.result, 18)).toFixed(2)
    ) : (
      <BouncingBalls />
    )

  // Allowances read
  const mintAllowance = useReadContract({
    abi: erc20Abi,
    address: selectedCollateral.address,
    functionName: "allowance",
    args: [userAddress, "0xb0e77224e214e902dE434b51125a775F6339F6C9"],
    account: userAddress,
  })

  const redeemAllowance = useReadContract({
    abi: erc20Abi,
    address: "0xb0e77224e214e902dE434b51125a775F6339F6C9",
    functionName: "allowance",
    args: [userAddress, "0xb0e77224e214e902dE434b51125a775F6339F6C9"],
    account: userAddress,
  })

  const balancesConfig = {
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [userAddress],
  }

  let balancesToGet = []

  collateralsAvailable.map((collateral) => {
    balancesToGet.push({
      address: collateral.address,
      ...balancesConfig,
    })
  })

  const { data, refetch } = useReadContracts({
    contracts: balancesToGet,
  })

  // console.log(data)

  // Refetching balance when there is change in the writehash
  useEffect(() => {
    refetch()
    refetchSDnod()
  }, [writeHash])

  let collWithBalances = []

  if (data) {
    data.map((balance: any, i) => {
      if (balance.result !== undefined) {
        collWithBalances.push({
          ...collateralsAvailable[i],
          balance: formatUnits(
            balance.result,
            collateralsAvailable[i].numberOfDecimals
          ),
        })
      } else {
        // Correctly handle the case where balance.result is undefined
        console.warn(`Balance result is undefined for collateral at index ${i}`)
        collWithBalances.push({
          ...collateralsAvailable[i],
          balance: "0", // Default value or handle as needed
        })
      }
    })
  } else {
    // Handle the case where data is not available
    collWithBalances = collateralsAvailable
  }

  const handleMintClick = useCallback(() => {
    setIsMintClicked(true)
    setIsRedeemClicked(false)
  }, [])

  const handleRedeemClick = useCallback(() => {
    setIsRedeemClicked(true)
    setIsMintClicked(false)
  }, [])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setInputValue("1")
    } else {
      setTimeout(() => setInputValue(event.target.value), 2000)
    }
  }

  // const handleClearInput = () => {
  //   setInputValue("")
  // }

  let balanceCheck

  collWithBalances.map((coll) => {
    if (coll.address === selectedCollateral.address) {
      if (coll.balance < inputValue) {
        balanceCheck = <p>You do not have enough balance</p>
        // console.log(coll.balance)
      }
    }
  })

  const buttonSelected = isMintClicked ? "Mint" : "Redeem"

  const simulateResult = useSimulateContract({
    abi: CollSdnodABI,
    address: "0xb0e77224e214e902dE434b51125a775F6339F6C9",
    functionName: "toSDNOD",
    args: [
      selectedCollateral.address,
      parseUnits(inputValue.toString(), selectedCollateral.numberOfDecimals),
      0,
    ],
    query: {
      refetchOnReconnect: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  })

  let renderedSimulatedResult
  if (
    inputValue > 10 &&
    simulateResult &&
    simulateResult.data &&
    redeemAllowance
  ) {
    renderedSimulatedResult = (
      <span className="text-bold">
        You will receive {formatUnits(simulateResult.data.result, 18)} sDNOD
      </span>
    )
  } else {
    renderedSimulatedResult = (
      <div>The amount should be higher than 10 units</div>
    )
  }

  let btnSimulateStatus = false

  if (simulateResult.status === "pending") {
    btnSimulateStatus = true
  }

  async function handleTransactionSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("btnclicked")

    if (isMintClicked) {
      if (
        mintAllowance.data <
        parseUnits(inputValue.toString(), selectedCollateral.numberOfDecimals)
      ) {
        const txAllowance = await writeContract({
          abi: erc20Abi,
          address: selectedCollateral.address,
          functionName: "approve",
          args: ["0xb0e77224e214e902dE434b51125a775F6339F6C9", maxAllowance],
        })
      }
      const tx = await writeContract({
        abi: CollSdnodABI,
        address: "0xb0e77224e214e902dE434b51125a775F6339F6C9",
        functionName: "toSDNOD",
        args: [
          selectedCollateral.address,
          parseUnits(
            inputValue.toString(),
            selectedCollateral.numberOfDecimals
          ),
          0,
        ],
      })
      // handleClearInput();
    } else {
      if (
        redeemAllowance.data <
        parseUnits(inputValue.toString(), selectedCollateral.numberOfDecimals)
      ) {
        const txAllowance = await writeContract({
          abi: erc20Abi,
          address: "0xb0e77224e214e902dE434b51125a775F6339F6C9",
          functionName: "approve",
          args: ["0xb0e77224e214e902dE434b51125a775F6339F6C9", maxAllowance],
        })
      }
      const tx = await writeContract({
        abi: CollSdnodABI,
        address: "0xb0e77224e214e902dE434b51125a775F6339F6C9",
        functionName: "fromSDNOD",
        args: [
          selectedCollateral.address,
          parseUnits(inputValue.toString(), 18),
          0,
        ],
      })
    }
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash: writeHash,
    })

  return (
    <DefaultLayout>
      {/* Header Section */}
      <header className="text-3xl">SDnod</header>
      <div className="mb-8 mt-12 flex items-center justify-center">
        {!chain ? (
          <div className="grid grid-cols-1 place-items-center gap-y-6 sm:gap-x-4">
            <h1 className="w-2/3 text-xl">
              Currently your wallet is not connect to a network supported by
              DefiNodal. Please connect your wallet to the Polygon network. Once
              connected you will be able to exchange your stable coins with the
              overcollaterilized stable SDnod.
            </h1>
          </div>
        ) : (
          <h1>
            Currently you are on the{" "}
            <span className="font-bold text-red-500">{chain.name}</span>. The
            following collaterals are available to be exchanged with SDnod
          </h1>
        )}
      </div>
      {/* Buttons Section */}
      <div className="mb-8 mt-12 flex items-center justify-center">
        <div className="flex w-1/2 items-center justify-center">
          <span className="bg-main w-full rounded-md shadow-sm">
            <button
              type="button"
              className={`border-main ring-main relative h-16 w-1/2 flex-1  rounded-l-md px-3 py-2 text-xl font-semibold shadow-sm ring-2 ring-inset  focus:z-10 ${
                isMintClicked ? "bg-red-500" : ""
              }`}
              onClick={handleMintClick}
            >
              Mint
            </button>

            <button
              type="button"
              className={`ring-main relative h-16 w-1/2  rounded-r-md px-3 py-2 text-xl font-semibold ring-2 ring-inset  focus:z-10 ${
                isRedeemClicked ? "bg-red-500" : ""
              }`}
              onClick={handleRedeemClick}
            >
              Redeem
            </button>
          </span>
        </div>
      </div>

      {/* Collateral List Section */}
      <div className="flex items-center justify-center">
        <RadioGroup value={selectedCollateral} onChange={setSelectedCollateral}>
          <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
            {collWithBalances.map((collateral) => (
              <RadioGroup.Option
                key={collateral.name}
                value={collateral}
                className={({ checked, active }) =>
                  classNames(
                    checked ? "border-transparent" : "border-main",
                    active ? "border-indigo-600 ring-2 ring-indigo-600" : "",
                    "bg-main relative flex min-w-64 cursor-pointer rounded-lg border p-4 shadow-sm focus:outline-none"
                  )
                }
              >
                {({ checked, active }) => (
                  <>
                    <span className="flex flex-1">
                      <span className="flex flex-col">
                        <RadioGroup.Label
                          as="span"
                          className="flex items-center gap-2 text-sm font-medium"
                        >
                          <img
                            src={collateral.icon}
                            width={20}
                            height={20}
                            alt={collateral.name}
                          />
                          {collateral.name}
                        </RadioGroup.Label>

                        <RadioGroup.Description
                          as="span"
                          className="mt-1 flex items-center text-sm"
                        >
                          Available Balance: {collateral.balance}{" "}
                          {collateral.name}
                        </RadioGroup.Description>
                      </span>
                    </span>
                    <CheckCircleIcon
                      className={classNames(
                        !checked ? "invisible" : "",
                        "h-5 w-5"
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        active ? "border" : "border-2",
                        checked ? "border-indigo-600" : "border-transparent",
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
      </div>

      {/* Form Section */}
      <div className="flex items-center justify-center">
        <div className="bg-main mt-8 w-full rounded-lg px-6 py-5 shadow sm:w-1/2">
          <div className="px-4 py-2 sm:p-6">
            <form
              className="mt-5 sm:flex sm:items-center"
              onSubmit={handleTransactionSubmit}
            >
              <div className="w-full sm:max-w-xs">
                <div className="flex items-center">
                  <p className="mr-1">Your $SDNOD balance:</p>
                  <div>{sdnodBalance}</div>
                </div>

                <label htmlFor="amount">
                  <h3 className="pb-2 text-base font-semibold leading-6">
                    Amount to {isMintClicked ? "Mint" : "Redeem"}
                  </h3>
                </label>
                <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-center md:space-x-4 md:space-y-0">
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    className="text-gray-900 ring-main block w-full rounded-md border-0 py-1.5 pl-2 text-black shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="123"
                    onChange={handleInputChange}
                  />

                  <button
                    type="submit"
                    disabled={isPending || btnSimulateStatus || !chainId}
                    className={`mt-3 inline-flex w-full items-center justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto ${
                      isPending || btnSimulateStatus || !chainId
                        ? "bg-indigo-400"
                        : "bg-indigo-600 hover:bg-indigo-500"
                    }`}
                  >
                    {buttonSelected}
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-6">
              {balanceCheck}
              <p>
                {isPending ? "Please confirm transaction in your wallet" : null}
              </p>

              {isConfirming && <div>Waiting for confirmation...</div>}
              {isConfirmed && <div>Transaction confirmed.</div>}
              {renderedSimulatedResult}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default SDnod
