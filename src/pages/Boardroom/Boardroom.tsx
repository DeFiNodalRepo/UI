import DefaultLayout from "../../layout/DefaultLayout"

import TierCards from "./TierCards"
import BoardroomStats from "./BoardroomStats"
import BoardroomHistory from "./BoardroomHistory"
import { useAccount } from "wagmi"
import {
  allowedChains,
  web3Addresses,
  web3Addresses2,
} from "../../constants/sideWide"
import { erc20Abi, formatUnits } from "viem"
import useGetBalance from "../../hooks/web3/useGetBalance"
import BouncingBalls from "../../ui/bouncingBalls"
import BRstats from "../../abi/BRManagement.json"
import BRBalanceNotification from "./BRBalanceNotification"
import { erc20Config } from "../../constants/balancesConfig"

function Boardroom() {
  const { address: userAddress, chainId } = useAccount()

  let currentChainId = 1
  if (!chainId) {
    currentChainId = allowedChains[0]
  } else {
    currentChainId = chainId
  }

  const totalBoardroomBalance = [
    {
      address: web3Addresses2[currentChainId]["boardroomAddress"],
      abi: BRstats,
      functionName: "getTotalDeposits",
      args: [],
      id: "totalDnod",
    },
  ] as const

  const { balanceResult, refetch: refetchUserDnodBalance } = useGetBalance(
    "erc20Platform",
    totalBoardroomBalance
  )

  const availableUserDnodBalance =
    balanceResult.dnod.status === "success" ? (
      Number(formatUnits(balanceResult.dnod.result, 18)).toFixed(2)
    ) : (
      <BouncingBalls />
    )

  const pasrsedAvailableUserDnodBalance = parseFloat(availableUserDnodBalance)

  const totalUserDnodBalanceStat =
    balanceResult.totalDnod.status === "success" ? (
      Number(formatUnits(balanceResult.totalDnod.result, 18)).toFixed(2)
    ) : (
      <BouncingBalls />
    )

  console.log(pasrsedAvailableUserDnodBalance > 50)
  console.log("first")

  return (
    <DefaultLayout>
      <div>Boardroom</div>
      <BoardroomStats
        totalUsersDnodBalance={totalUserDnodBalanceStat}
        availableUserDnodBalance={availableUserDnodBalance}
      />
      {pasrsedAvailableUserDnodBalance < 50 ? (
        <BRBalanceNotification text="You need atleast 50 DNOD" />
      ) : null}

      <TierCards
        availableUserDnodBalance={pasrsedAvailableUserDnodBalance}
        refetchUserDnodBalance={refetchUserDnodBalance}
      />
      <BoardroomHistory />
    </DefaultLayout>
  )
}

export default Boardroom
