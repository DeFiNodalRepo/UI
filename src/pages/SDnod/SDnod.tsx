import DefaultLayout from '../../layout/DefaultLayout';
import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { collateralSelection } from '../../constants/sdnodCollateral';
import {
  useSimulateContract,
  useReadContract,
  useReadContracts,
  useWriteContract,
  useWaitForTransactionReceipt,
} from 'wagmi';
import CollSdnodABI from '../../abi/STBalancer.json';
import { formatUnits, parseUnits, erc20Abi, numberToHex } from 'viem';
// import { readContract } from '@wagmi/core';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function SDnod({ chain, chainId, userAddress }: any) {
  let collateralsAvailable;
  let balancesToGet = [];
  if (chainId !== 1337) {
    collateralsAvailable = collateralSelection[1];
  } else {
    collateralsAvailable = collateralSelection[chainId];

    const collBalanceOfConfig = {
      abi: erc20Abi,
      functionName: 'balanceOf',
      args: [userAddress],
      chainId: chainId,
    };
    collateralsAvailable.map((coll: any) => {
      balancesToGet.push({ address: coll.address, ...collBalanceOfConfig });
    });

    // console.log(balancesToGet);
  }
  const [isMintClicked, setIsMintClicked] = useState(true);
  const [isRedeemClicked, setIsRedeemClicked] = useState(false);
  const [selectedCollateral, setSelectedCollateral] = useState(
    collateralsAvailable[0],
  );
  const [inputValue, setInputValue] = useState('1');
  const { data: writeHash, isPending, writeContract } = useWriteContract();
  const maxAllowance = numberToHex(
    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  );

  // Allowances read
  const mintAllowance = useReadContract({
    abi: erc20Abi,
    address: selectedCollateral.address,
    functionName: 'allowance',
    args: [userAddress, '0xb0e77224e214e902dE434b51125a775F6339F6C9'],
    account: userAddress,
  });

  const redeemAllowance = useReadContract({
    abi: erc20Abi,
    address: '0xb0e77224e214e902dE434b51125a775F6339F6C9',
    functionName: 'allowance',
    args: [userAddress, '0xb0e77224e214e902dE434b51125a775F6339F6C9'],
    account: userAddress,
  });

  console.log('Mint Allowance amount: ', mintAllowance.data);
  console.log('Redeem Allowance amount: ', redeemAllowance.data);

  const { data } = useReadContracts({
    contracts: balancesToGet,
  });

  let collWithBalances = [];

  if (data) {
    data.map((balance: any, i) => {
      collWithBalances.push({
        ...collateralsAvailable[i],
        balance: formatUnits(
          balance.result,
          collateralsAvailable[i].numberOfDecimals,
        ),
      });
    });
    // console.log(data);
  }

  // console.log(collWithBalances);

  const handleMintClick = () => {
    setIsMintClicked(true);
    setIsRedeemClicked(false);
  };

  const handleRedeemClick = () => {
    setIsRedeemClicked(true);
    setIsMintClicked(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setInputValue('1');
    } else {
      setTimeout(() => setInputValue(event.target.value), 2000);
    }
  };

  const buttonSelected = isMintClicked ? 'Mint' : 'Redeem';

  const simulateResult = useSimulateContract({
    abi: CollSdnodABI,
    address: '0xb0e77224e214e902dE434b51125a775F6339F6C9',
    functionName: 'toSDNOD',
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
  });

  let renderedSimulatedResult;
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
    );
  } else {
    renderedSimulatedResult = (
      <div>The amount should be higher than 10 units</div>
    );
  }

  async function handleTransactionSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isMintClicked) {
      console.log(mintAllowance);
      if (
        mintAllowance.data <
        parseUnits(inputValue.toString(), selectedCollateral.numberOfDecimals)
      ) {
        const txAllowance = await writeContract({
          abi: erc20Abi,
          address: selectedCollateral.address,
          functionName: 'approve',
          args: ['0xb0e77224e214e902dE434b51125a775F6339F6C9', maxAllowance],
        });
        console.log(txAllowance, 'allowance completed');
      }
      const tx = await writeContract({
        abi: CollSdnodABI,
        address: '0xb0e77224e214e902dE434b51125a775F6339F6C9',
        functionName: 'toSDNOD',
        args: [
          selectedCollateral.address,
          parseUnits(
            inputValue.toString(),
            selectedCollateral.numberOfDecimals,
          ),
          0,
        ],
      });
      console.log(tx, 'mint completed');
      console.log('writecontract');
    } else {
      if (
        redeemAllowance.data <
        parseUnits(inputValue.toString(), selectedCollateral.numberOfDecimals)
      ) {
        const txAllowance = await writeContract({
          abi: erc20Abi,
          address: '0xb0e77224e214e902dE434b51125a775F6339F6C9',
          functionName: 'approve',
          args: ['0xb0e77224e214e902dE434b51125a775F6339F6C9', maxAllowance],
        });
        console.log(txAllowance, 'allowance completed');
      }
      const tx = await writeContract({
        abi: CollSdnodABI,
        address: '0xb0e77224e214e902dE434b51125a775F6339F6C9',
        functionName: 'fromSDNOD',
        args: [
          '0xb0e77224e214e902dE434b51125a775F6339F6C9',
          parseUnits(inputValue.toString(), 18),
          0,
        ],
      });
      console.log(tx, 'redeem completed');
    }
  }

  let balanceCheck;

  //Todo Issue to refresh balance. It should be a state change
  //Todo Check why checkboxes are not checked when the input field is clicked

  collWithBalances.map((coll) => {
    if (coll.address === selectedCollateral.address) {
      if (coll.balance < inputValue) {
        balanceCheck = <p>You do not have enough balance</p>;
        console.log(coll.balance);
      }
    }
  });
  // console.log(collWithBalances);
  console.log(selectedCollateral.name);

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash: writeHash,
    });

  return (
    <DefaultLayout>
      {/* Header Section */}
      <header className="text-3xl">SDnod</header>
      <div className="flex justify-center items-center mt-12 mb-8">
        {!chain ? (
          <div className="grid grid-cols-1 gap-y-6 place-items-center sm:gap-x-4">
            <h1 className="text-xl w-2/3">
              Currently your wallet is not connect to a network supported by
              DefiNodal. Please connect your wallet to the Polygon network. Once
              connected you will be able to exchange your stable coins with the
              overcollaterilized stable SDnod.
            </h1>
          </div>
        ) : (
          <h1>
            Currently you are on the{' '}
            <span className="text-red-500 font-bold">{chain.name}</span>. The
            following collaterals are available to be exchanged with SDnod
          </h1>
        )}
      </div>
      {/* Buttons Section */}
      <div className="flex justify-center items-center mt-12 mb-8">
        <div className="flex justify-center items-center w-1/2">
          <span className="w-full rounded-md bg-main shadow-sm">
            <button
              type="button"
              className={`relative h-16 w-1/2 flex-1 rounded-l-md border-main  px-3 py-2 text-xl font-semibold text-main shadow-sm ring-2 ring-inset ring-main  focus:z-10 ${
                isMintClicked ? 'bg-red-500' : ''
              }`}
              onClick={handleMintClick}
            >
              Mint
            </button>

            <button
              type="button"
              className={`relative h-16 w-1/2 rounded-r-md  px-3 py-2 text-xl font-semibold text-main ring-2 ring-inset ring-main  focus:z-10 ${
                isRedeemClicked ? 'bg-red-500' : ''
              }`}
              onClick={handleRedeemClick}
            >
              Redeem
            </button>
          </span>
        </div>
      </div>

      {/* Collateral List Section */}
      <div className="flex justify-center items-center">
        <RadioGroup value={selectedCollateral} onChange={setSelectedCollateral}>
          <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 ">
            {collWithBalances.map((collateral) => (
              <RadioGroup.Option
                key={collateral.name}
                value={collateral}
                className={({ checked, active }) =>
                  classNames(
                    checked ? 'border-transparent' : 'border-main',
                    active ? 'border-indigo-600 ring-2 ring-indigo-600' : '',
                    'relative flex cursor-pointer rounded-lg border bg-main p-4 shadow-sm focus:outline-none min-w-64',
                  )
                }
              >
                {({ checked, active }) => (
                  <>
                    <span className="flex flex-1">
                      <span className="flex flex-col">
                        <RadioGroup.Label
                          as="span"
                          className="flex items-center text-sm font-medium gap-2"
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
                          className="mt-1 flex items-center text-sm "
                        >
                          Available Balance: {collateral.balance}{' '}
                          {collateral.name}
                        </RadioGroup.Description>
                      </span>
                    </span>
                    <CheckCircleIcon
                      className={classNames(
                        !checked ? 'invisible' : '',
                        'h-5 w-5 text-main',
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        active ? 'border' : 'border-2',
                        checked ? 'border-indigo-600' : 'border-transparent',
                        'pointer-events-none absolute -inset-px rounded-lg',
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
      <div className="flex justify-center items-center">
        <div className="bg-main shadow sm:rounded-lg w-1/2 mt-8 px-6 py-5 ">
          <div className="px-4 py-2 sm:p-6">
            <form
              className="mt-5 sm:flex sm:items-center"
              onSubmit={handleTransactionSubmit}
            >
              <div className="w-full sm:max-w-xs">
                <label htmlFor="amount">
                  <h3 className="text-base font-semibold leading-6 text-main pb-2">
                    Amount to {isMintClicked ? 'Mint' : 'Redeem'}
                  </h3>
                </label>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-main placeholder:text-main focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-black pl-2"
                  placeholder="123"
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                disabled={isPending || balanceCheck}
                className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-main shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
              >
                {buttonSelected}
              </button>
            </form>
          </div>
          <p>
            {balanceCheck}
            {isPending ? 'Please confirm transaction in your wallet' : null}
          </p>
          {writeHash && <div>Transaction Hash: {writeHash}</div>}
          {isConfirming && <div>Waiting for confirmation...</div>}
          {isConfirmed && <div>Transaction confirmed.</div>}
          {renderedSimulatedResult}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default SDnod;
