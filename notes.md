export const usdcPolyContract = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
export const usdtPolyContract = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";

export const collMultContactAddress = {
address: "0xcA11bde05977b3631167028862bE2a173976CA11",
// abi: theABI,
};

userAddress = "0xc7b340d369e8fbd7a56847673a3d3c8544c628fd";

cash always crowd daring bean total heart siege place network fix crunch

npm install
npx hardhat node
cd scripts/testChain
npx hardhat run --network testNet deployTestChain.js

Multicall3 address: 0xBADFEa9Dde158E34efe8765EdE351657b411478F
USDT address: 0xc2132d05d31c914a87c6611c10748aeb04b58e8f
USDC address: 0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174
DAI address: 0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063
TUSD address: 0x2e1AD108fF1D8C782fcBbB89AAd783aC49586756
Stable token address: 0x893639156E5Ad496A09a94bcf584C3f06B86FF0b
Platform token address: 0xEAfaf3DdC06770CC4fAf122d150E6a37aaD213A3

127.0.0.1:8081/platforms
127.0.0.1:8081/strats
127.0.0.1:8081/poolsAPY
127.0.0.1:8081/tokens
127.0.0.1:8081/tokenprices

npx hardhat run --network local ./scripts/testChain/deployTestChain.js

# TokenExchange.json for the ICO

Platform token address (contract address DNOD): 0x8c49AFcEBFEA804d307a8068e4112b25E3a79d05

    function exchange(uint256 _amount) external nonReentrant ifNotPaused(TokenExchangeStorage.EX_PAUSE_KEY) {
        TokenExchangeStorage.Layout storage s = TokenExchangeStorage.s();
        require(block.timestamp >= s.startTime, "exchange not started yet");
        require(block.timestamp < s.endTime, "exchange period finished");

        uint256 balance = IERC20(s.token).balanceOf(s.platformAddress);
        IERC20(s.token).transferFrom(msg.sender, s.platformAddress, _amount);
        _amount = IERC20(s.token).balanceOf(s.platformAddress) - balance;

        uint256 amount = (_amount / s.rate) * 1E3;

        s.exchangedAmount += amount;
        require(s.exchangedAmount <= s.cap, "exchange: exchange cap exceeded");
        require(_totalSupply() + amount <= TokenStorage.s().cap, "exchange: mint cap exceeded");

        _mint(msg.sender, amount);

        emit Exchange(msg.sender, _amount, amount);
    }

    Call function exchange => amount to exhngae from sDNOD se DNOD

## Event useWatchEvent

event Exchange(address indexed user, uint256 stableAmount(sDNOD), uint256 receivedAmount(DNOD));

import { useSimulateContract } from 'wagmi'
import { abi } from './abi'

function App() {
const result = useSimulateContract({
abi,
address: '0x8c49AFcEBFEA804d307a8068e4112b25E3a79d05' (this is the platform token DNOD contract address),
functionName: 'exchange',
args: [
'get the amount from the form 18decimal points'
],
account: user.account(check if needed),
})
}

**Since it is a fixed rate we can use amount = (\_amount / s.rate) \* 1E3;**

# StableTokenBalancer.json

function toSDNOD(address \_token, uint256 \_amount, uint256 \_minAmount) external nonReentrant returns (uint256 \_out) {
STBalStorage.Layout storage sb = STBalStorage.s();

address \_token (USDT, USDC or DAI)
\_amount from form "amount" at decimals of each address token (DAI etc)
\_minAmount === 0
\_minAmount = \_out \* 0.98

import { useSimulateContract } from 'wagmi'

import { useSimulateContract } from 'wagmi'
import { abi } from './abi'

function App() {
const result = useSimulateContract({
abi,
address: '0xb0e77224e214e902dE434b51125a775F6339F6C9' sDNOD address,
functionName: 'toSDNOD',
args: [
address DAI etc (get from form selection)
amount (det from selection token decimals of coll)
0 (minAmmount)
],
})
}

returns uint256 \_out (amount of sDNOD)

import { useWriteContract } from 'wagmi'
import { abi } from './abi'
function App() {
function onSubmit = useSimulateContract({
abi,
address: '0xb0e77224e214e902dE434b51125a775F6339F6C9' sDNOD address,,
functionName: 'toSDNOD',
args: [
address DAI etc (get from form selection)
amount (det from selection token decimals of coll)
output of simulate call * 0.98 (minAmmount not displayed)
],
})
}

returns uint256 \_out (amount of sDNOD)

## useWatchContractEvemt

event toSDNOD(address user, address token, uint256 tokenAmount, uint256 SDNODAmount);

# Redeem

    function fromSDNOD(address _token, uint256 _amount, uint256 _minAmount) external nonReentrant returns (uint256 _out)

    address _token = coll address (DAI etc)
    uint256 _amount = amount to redeem
    uint256 _minAmount = expected as before

### simulate and then write contract

APPROVE ALL CONTRACT FUNCTIONS
AT EXCHANGE (ICO) APPROVE SDNOD

---

MINT
AT TO APPROVE THE COLL (DAI ETC)

---

REDEEM
FROM APPROVE SDNOD

##

                USDT: {address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", share: 100, decimals: 6},
                USDC: {address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", share: 100, decimals: 6},
                DAI: {address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", share: 100, decimals: 18},

/\*_ @type import('hardhat/config').HardhatUserConfig _/
require("@nomicfoundation/hardhat-toolbox");
require("hardhat-contract-sizer");
require("hardhat-abi-exporter");
require("solidity-coverage");
require("hardhat-gas-trackooor");
require("hardhat-docgen");

module.exports = {
networks: {
local: {
rpcEndpoints: {
setStorageAt: "hardhat_setStorageAt",
},
url: "http://127.0.0.1:8545",
accounts: {
mnemonic:
"cash always crowd daring bean total heart siege place network fix crunch",
},
},
hardhat: {
rpcEndpoints: {
setStorageAt: "hardhat_setStorageAt",
},
chainId: 1337,
accounts: {
mnemonic:
"cash always crowd daring bean total heart siege place network fix crunch",
},
forking: {
// url: "https://polygon-bor.publicnode.com",
// blockNumber: 49012283

        // url: "https://rpc.ankr.com/polygon",
        // blockNumber: 50617181

        url: "https://polygon-mainnet.chainnodes.org/85a97be1-2bb9-41a4-93c5-0fee11c0687b",
        //   blockNumber:51040208

        // url: "https://go.getblock.io/bf8c9edd4879418089bfd407aa008fc6",
        // blockNumber:50617280
      },

      // loggingEnabled: true,

      // mining: {
      //     auto: false,
      //     interval: [3000, 6000]
      //   }
    },
    fork137: {
      rpcEndpoints: {
        setStorageAt: "hardhat_setStorageAt",
      },
      chainId: 1337,
      accounts: {
        mnemonic:
          "cash always crowd daring bean total heart siege place network fix crunch",
      },

      // loggingEnabled: true,

      // forking: {
      //   // url: "https://polygon-bor.publicnode.com",
      //   // blockNumber: 49012283

      //   // url: "https://rpc.ankr.com/polygon",
      //   // blockNumber: 50617181

      url: "https://polygon-mainnet.chainnodes.org/85a97be1-2bb9-41a4-93c5-0fee11c0687b",
      //   blockNumber:51040208

      //   // url: "https://go.getblock.io/bf8c9edd4879418089bfd407aa008fc6",
      //   // blockNumber:50617280

      // }
    },

},
solidity: {
version: "0.8.19",
settings: {
optimizer: {
enabled: true,
runs: 20000,
},
},
// outputSelection: { "_": { "_": [ "*" ], "": [ "*" ] } },
},
contractSizer: {
runOnCompile: false,
alphaSort: true,
disambiguatePaths: false,
strict: true,
// only: [':ERC20$'],
},
gasReporter: {
enabled: false,
currency: "USD",
gasPrice: 21,
},
abiExporter: {
path: "./abi",
runOnCompile: true,
clear: true,
flat: true,
// only: ["BR.*.sol", "StableToken.*.sol", "Token.*.sol"],
spacing: 2,
pretty: false,
format: "json",
},
docgen: {
path: "./docs",
clear: true,
runOnCompile: false,
},

dealSlots: {
"0xe7f1725e7734ce288f8367e1bb143e90bb3f0512":
"0xc991b2e918acaba8e5721668ed0b1982684e5a8692a621bcd2d7ef326bb015b4",
"0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0":
"0xc991b2e918acaba8e5721668ed0b1982684e5a8692a621bcd2d7ef326bb015b4",
"0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9":
"0xc991b2e918acaba8e5721668ed0b1982684e5a8692a621bcd2d7ef326bb015b4",
"0xdc64a140aa3e981100a9beca4e685f962f0cf6c9":
"0xc991b2e918acaba8e5721668ed0b1982684e5a8692a621bcd2d7ef326bb015b4",
"0xdcdd745b824d58f32540f4ec84b4667aa10f95e8":
"0xc991b2e918acaba8e5721668ed0b1982684e5a8692a621bcd2d7ef326bb015b4",
"0x91d32abaf7cd46e47469c060ec4491af94a27b29":
"0xc991b2e918acaba8e5721668ed0b1982684e5a8692a621bcd2d7ef326bb015b4",
"0xe9ac29c5c3edea2d8bb44c97b580ec3e588c08d8":
"0xc991b2e918acaba8e5721668ed0b1982684e5a8692a621bcd2d7ef326bb015b4",
"0x4e420b1e2afae69879d67216e91210d55496b5d3":
"0xc991b2e918acaba8e5721668ed0b1982684e5a8692a621bcd2d7ef326bb015b4",
},
};
