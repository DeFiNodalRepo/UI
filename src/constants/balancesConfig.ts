import { erc20Abi } from "viem"
import { web3Addresses, web3Addresses2 } from "./sideWide"

export const erc20Config = {
  abi: erc20Abi,
  functionName: "balanceOf",
}

// export const coreConfig = {
//   1337: [
//     {
//       address: web3Addresses.sdnod,
//       abi: erc20Abi,
//       functionName: "balanceOf",
//       args: [userAddress],
//       id: "sdnod",
//     },
//     {
//       address: web3Addresses.dnod,
//       abi: erc20Abi,
//       functionName: "balanceOf",
//       args: [userAddress],
//       id: "dnod",
//     },
//   ],
// }

export const coreConfig = {
  1337: [
    {
      address: web3Addresses.sdnod,
      abi: erc20Abi,
      functionName: "balanceOf",
      // args: [userAddress],
      id: "sdnod",
    },
    {
      address: web3Addresses.dnod,
      abi: erc20Abi,
      functionName: "balanceOf",
      // args: [userAddress],
      id: "dnod",
    },
    {
      address: web3Addresses.sdnod,
      abi: erc20Abi,
      functionName: "balanceOf",
      // args: [userAddress],
      id: "sdnod",
    },
    {
      address: web3Addresses.sdnod,
      abi: erc20Abi,
      functionName: "balanceOf",
      // args: [userAddress],
      id: "sdnod",
    },
    {
      address: web3Addresses.dnod,
      abi: erc20Abi,
      functionName: "balanceOf",
      // args: [userAddress],
      id: "dnod",
    },
    {
      address: web3Addresses.sdnod,
      abi: erc20Abi,
      functionName: "balanceOf",
      // args: [userAddress],
      id: "sdnod",
    },
  ],
}
