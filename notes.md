const handleButtonClick = async (days) => {
setTier(days)

    let parsedAmount = parseUnits(amount.toString(), 18)

    if (mintAllowance.data > parsedAmount) {
      const txAllowance = await writeContract({
        abi: erc20Abi,
        address: web3Addresses.dnod,
        functionName: "approve",
        args: [web3Addresses.boardroomAddress, maxAllowance],
      })
      console.log(mintAllowance.data, amount)
    }
    try {
      const tx = await writeContract({
        abi: BoardroomABI,
        address: web3Addresses.boardroomAddress,
        functionName: "deposit",
        args: [tier, parsedAmount],
      })
      console.log("tx success") // Handle the transaction result as needed
    } catch (error) {
      console.error(error) // Handle any errors that occur during the transaction
    }

}
