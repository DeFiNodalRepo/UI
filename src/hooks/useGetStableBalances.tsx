import { useReadContracts } from 'wagmi';
import { collateralSelection } from '../constants/sdnodCollateral';
import { useAccount } from 'wagmi';
import { erc20Abi } from 'viem';

interface Collateral {
  name: string;
  icon: string;
  address: string;
}

export default function useGetStableBalances(chainId) {
  const { address: userAddress } = useAccount();

  let collBallances = [];

  const collBalanceOfConfig = {
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [userAddress],
    chainId: chainId,
  } as const;
  if (chainId) {
    collateralSelection[chainId].map((coll: Collateral) => {
      collBallances.push({ address: coll.address, ...collBalanceOfConfig });
    });

    const result = useReadContracts({
      contracts: collBallances,
    });
    return result;
  } else {
    console.log('no chainId');
  }

  // if (result) {
  //   return result;
  // } else {
  //   console.log('no results');
  //   return [];
  // }
}

// const wagmigotchiContract = {
//   address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
//   abi: wagmigotchiABI,
// } as const;
// const mlootContract = {
//   address: '0x1dfe7ca09e99d10835bf73044a23b73fc20623df',
//   abi: mlootABI,
// } as const;

// function App() {
//   const result = useReadContracts({
//     contracts: [
//       {
//         ...wagmigotchiContract,
//         functionName: 'getAlive',
//       },
//       {
//         ...wagmigotchiContract,
//         functionName: 'getBoredom',
//       },
//       {
//         ...mlootContract,
//         functionName: 'getChest',
//         args: [69],
//       },
//       {
//         ...mlootContract,
//         functionName: 'getWaist',
//         args: [69],
//       },
//     ],
//   });
// }
