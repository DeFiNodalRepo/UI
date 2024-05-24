import { useAccount } from "wagmi";
import useGetBalance from "../../hooks/web3/useGetBalance";
import { platformAddress } from "../../constants/sideWide";
import { erc20Abi, formatUnits } from "viem";
import BouncingBalls from "../../ui/bouncingBalls";
import BRstats from "../../abi/BRManagement.json";

function BoardroomStats() {
  console.log(BRstats);

  const { address: userAddress } = useAccount();

  const dnodBalanceConfig = [
    {
      address: platformAddress.dnod,
      abi: erc20Abi,
      functionName: "balanceOf",
      args: [userAddress],
    },
  ] as const;

  const { balances: dnodBalance, refetch: userDnodBalance } =
    useGetBalance(dnodBalanceConfig);

  const availableDnodBalance = dnodBalance[0] ? (
    Number(formatUnits(dnodBalance[0].result, 18)).toFixed(2)
  ) : (
    <BouncingBalls />
  );

  const dnodTotalUserBalanceConfig = [
    {
      address: platformAddress.dnod,
      abi: [BRstats],
      functionName: "getTotalDeposits",
      args: [userAddress],
    },
  ] as const;

  const {
    balances: totalUserDnodBalance,
    refetch: totalUserDnodBalanceRefetch,
  } = useGetBalance(dnodTotalUserBalanceConfig);

  const totalUserDnodBalanceStat = totalUserDnodBalance[0] ? (
    Number(formatUnits(totalUserDnodBalance[0].result, 18)).toFixed(2)
  ) : (
    <BouncingBalls />
  );

  console.log(totalUserDnodBalance);

  const stats = [
    { name: "Total DNOD Staked", value: "405" },
    { name: "Available DNOD Balance", value: availableDnodBalance },
    { name: "Total User DNOD Stacked", value: "3" },
  ];

  return (
    <>
      <div className="my-10 flex items-center justify-center">
        <div className="card-main flex justify-center rounded-3xl shadow-md">
          <div className="mx-10 grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="px-4 py-6 sm:px-6 lg:px-8">
                <p className="text-sm font-medium leading-6">{stat.name}</p>
                <p className="mt-2 flex items-baseline gap-x-2">
                  <span className="text-4xl font-semibold tracking-tight">
                    {stat.value}
                  </span>
                  {stat.unit ? (
                    <span className="text-sm">{stat.unit}</span>
                  ) : null}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <dl className="my-10 mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.name}
              className="card-main overflow-hidden rounded-3xl px-4 py-5 shadow sm:p-6"
            >
              <dt className="text-gray-500 truncate text-sm font-medium">
                {item.name}
              </dt>
              <dd className="text-gray-900 mt-1 text-3xl font-semibold tracking-tight">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}

export default BoardroomStats;
