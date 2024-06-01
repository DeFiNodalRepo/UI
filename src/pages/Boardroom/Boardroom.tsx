import DefaultLayout from "../../layout/DefaultLayout"

import TierCards from "./TierCards"
import BoardroomStats from "./BoardroomStats"
import BoardroomHistory from "./BoardroomHistory"
import { useAccount } from "wagmi"
import { web3Addresses } from "../../constants/sideWide"
import { erc20Abi, formatUnits } from "viem"
import useGetBalance from "../../hooks/web3/useGetBalance"
import BouncingBalls from "../../ui/bouncingBalls"
import BRstats from "../../abi/BRManagement.json"
import BRBalanceNotification from "./BRBalanceNotification"

function Boardroom() {
  const { address: userAddress } = useAccount()

  const dnodBalanceConfig = [
    {
      address: web3Addresses.dnod,
      abi: erc20Abi,
      functionName: "balanceOf",
      args: [userAddress],
    },
  ] as const

  const { balances: dnodBalance, refetch: userDnodBalance } =
    useGetBalance(dnodBalanceConfig)

  const availableUserDnodBalance = dnodBalance[0] ? (
    Number(formatUnits(dnodBalance[0].result, 18)).toFixed(2)
  ) : (
    <BouncingBalls />
  )

  const dnodTotalUserBalanceConfig = [
    {
      address: web3Addresses.boardroomAddress,
      abi: BRstats,
      functionName: "getTotalDeposits",
      args: [],
    },
  ] as const

  const {
    balances: totalUserDnodBalance,
    refetch: totalUserDnodBalanceRefetch,
  } = useGetBalance(dnodTotalUserBalanceConfig)

  const totalUserDnodBalanceStat = totalUserDnodBalance[0] ? (
    Number(formatUnits(totalUserDnodBalance[0].result, 18)).toFixed(2)
  ) : (
    <BouncingBalls />
  )

  console.log(totalUserDnodBalance)

  // console.log(totalUserDnodBalance[0].result);

  return (
    <DefaultLayout>
      <div>Boardroom</div>
      <BoardroomStats
        totalUsersDnodBalance={totalUserDnodBalanceStat}
        availableUserDnodBalance={availableUserDnodBalance}
      />
      {availableUserDnodBalance < 50 ? (
        <BRBalanceNotification text="You need atleast 50 DNOD" />
      ) : null}

      <TierCards availableUserDnodBalance={availableUserDnodBalance} />
      <BoardroomHistory />
    </DefaultLayout>
  )
}

export default Boardroom
