import { useAccount, useReadContract, useWriteContract } from "wagmi"
import {
  allowedChains,
  web3Addresses,
  web3Addresses2,
} from "../../constants/sideWide"
import { erc20Abi, maxUint256, numberToHex, parseUnits } from "viem"

function useAllowanceAndWrite({ contract, amount }) {
  const { address: userAddress, chainId } = useAccount()

  const maxAllowance = numberToHex(maxUint256)

  const {
    data: writeHash,
    isPending,
    writeContract,
    writeContractAsync: allowanceWriteContractAsync,
  } = useWriteContract()

  let currentChainId

  if (!chainId) {
    currentChainId = allowedChains[0]
  } else {
    currentChainId = chainId
  }

  const mintAllowance = useReadContract({
    abi: erc20Abi,
    address: "0xb0e77224e214e902dE434b51125a775F6339F6C9",
    functionName: "allowance",
    args: [userAddress, web3Addresses2[currentChainId][contract]],
    account: userAddress,
  })

  const checkAllowance = async () => {
    if (mintAllowance.data < parseUnits(amount.toString(), 18)) {
      await allowanceWriteContractAsync({
        abi: erc20Abi,
        address: web3Addresses2[currentChainId][contract],
        functionName: "approve",
        args: [web3Addresses2[currentChainId][contract], maxAllowance],
      })
    }
  }

  const writeTx = async () => {
    try {
      await writeContract({
        abi: BoardroomABI,
        address: web3Addresses2[currentChainId]["boardroomAddress"],
        functionName: "deposit",
        args: [tier, parsedAmount],
      })
      refetchUserDnodBalance()
    } catch (error) {
      console.log("failed to write")
    }
  }

  
export default useAllowanceAndWrite
