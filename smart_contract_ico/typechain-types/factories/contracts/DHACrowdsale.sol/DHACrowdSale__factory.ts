/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  DHACrowdSale,
  DHACrowdSaleInterface,
} from "../../../contracts/DHACrowdsale.sol/DHACrowdSale";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bnb_rate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "t1_rate",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "icotoken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BuyTokenByBNB",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BuyTokenByT1",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "SetBNBRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "SetT1Rate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "SetT1Token",
    type: "event",
  },
  {
    inputs: [],
    name: "BNB_rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "T1_rate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_wallet",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "buyTokenByBNB",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "T1Amount",
        type: "uint256",
      },
    ],
    name: "buyTokenByT1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "BNBAmount",
        type: "uint256",
      },
    ],
    name: "getTokenAmountBNB",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "T1Amount",
        type: "uint256",
      },
    ],
    name: "getTokenAmountT1",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "new_rate",
        type: "uint256",
      },
    ],
    name: "setBNBRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "new_rate",
        type: "uint256",
      },
    ],
    name: "setT1Rate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token_address",
        type: "address",
      },
    ],
    name: "setT1Token",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "t1Token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200208038038062002080833981810160405281019062000037919062000287565b6000620000496200018160201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350836002819055508260038190555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050620002f9565b600033905090565b600080fd5b6000819050919050565b620001a3816200018e565b8114620001af57600080fd5b50565b600081519050620001c38162000198565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001f682620001c9565b9050919050565b6200020881620001e9565b81146200021457600080fd5b50565b6000815190506200022881620001fd565b92915050565b60006200023b82620001c9565b9050919050565b60006200024f826200022e565b9050919050565b620002618162000242565b81146200026d57600080fd5b50565b600081519050620002818162000256565b92915050565b60008060008060808587031215620002a457620002a362000189565b5b6000620002b487828801620001b2565b9450506020620002c787828801620001b2565b9350506040620002da8782880162000217565b9250506060620002ed8782880162000270565b91505092959194509250565b611d7780620003096000396000f3fe6080604052600436106100fe5760003560e01c8063715018a61161009557806396a4b8231161006457806396a4b823146102a4578063acb03d43146102e1578063f2fde38b1461031e578063fc0c546a14610347578063fe8ce36a14610372576100fe565b8063715018a614610210578063775db1cf1461022757806384c09b19146102505780638da5cb5b14610279576100fe565b806331927737116100d157806331927737146101ad5780633ccfd60b146101b75780633e3f2359146101ce578063610757e4146101e5576100fe565b806303754fcb1461010357806314888cb91461012e578063157fc821146101595780632be8629914610184575b600080fd5b34801561010f57600080fd5b5061011861039b565b6040516101259190611504565b60405180910390f35b34801561013a57600080fd5b506101436103a1565b604051610150919061159e565b60405180910390f35b34801561016557600080fd5b5061016e6103c7565b60405161017b9190611504565b60405180910390f35b34801561019057600080fd5b506101ab60048036038101906101a691906115ea565b6103cd565b005b6101b561048a565b005b3480156101c357600080fd5b506101cc6106ea565b005b3480156101da57600080fd5b506101e36107af565b005b3480156101f157600080fd5b506101fa610969565b6040516102079190611638565b60405180910390f35b34801561021c57600080fd5b5061022561098f565b005b34801561023357600080fd5b5061024e600480360381019061024991906115ea565b610ac9565b005b34801561025c57600080fd5b50610277600480360381019061027291906116a3565b610d8e565b005b34801561028557600080fd5b5061028e610e85565b60405161029b91906116df565b60405180910390f35b3480156102b057600080fd5b506102cb60048036038101906102c691906115ea565b610eae565b6040516102d89190611504565b60405180910390f35b3480156102ed57600080fd5b50610308600480360381019061030391906115ea565b610ec5565b6040516103159190611504565b60405180910390f35b34801561032a57600080fd5b5061034560048036038101906103409190611726565b610edc565b005b34801561035357600080fd5b5061035c611084565b604051610369919061159e565b60405180910390f35b34801561037e57600080fd5b50610399600480360381019061039491906115ea565b6110aa565b005b60035481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b6103d5611167565b73ffffffffffffffffffffffffffffffffffffffff166103f3610e85565b73ffffffffffffffffffffffffffffffffffffffff1614610449576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610440906117b0565b60405180910390fd5b806002819055507fb0cc740bbbfcd5af22ee3956c6b44d2d6f499e2a86cb11d915fcce88dca2113a8160405161047f9190611504565b60405180910390a150565b6000349050600061049a82610ec5565b9050600081116104df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d69061181c565b60405180910390fd5b80600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161053b91906116df565b602060405180830381865afa158015610558573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057c9190611851565b10156105bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b4906118ca565b60405180910390fd5b813373ffffffffffffffffffffffffffffffffffffffff16311015610617576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060e906118ca565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015801561067f573d6000803e3d6000fd5b506106ad600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16338361116f565b7ff695091b71a5c3ea41510251da89a66470bbcf1ee118f820a1bab8739e29ea5033826040516106de9291906118ea565b60405180910390a15050565b6106f2611167565b73ffffffffffffffffffffffffffffffffffffffff16610710610e85565b73ffffffffffffffffffffffffffffffffffffffff1614610766576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075d906117b0565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156107ac573d6000803e3d6000fd5b50565b6107b7611167565b73ffffffffffffffffffffffffffffffffffffffff166107d5610e85565b73ffffffffffffffffffffffffffffffffffffffff161461082b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610822906117b0565b60405180910390fd5b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108c591906116df565b602060405180830381865afa1580156108e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109069190611851565b6040518363ffffffff1660e01b81526004016109239291906118ea565b6020604051808303816000875af1158015610942573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610966919061194b565b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610997611167565b73ffffffffffffffffffffffffffffffffffffffff166109b5610e85565b73ffffffffffffffffffffffffffffffffffffffff1614610a0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a02906117b0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000610ad482610eae565b905081600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610b3291906116df565b602060405180830381865afa158015610b4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b739190611851565b14610bb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610baa906118ca565b60405180910390fd5b60008111610bf6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bed9061181c565b60405180910390fd5b80600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610c5291906116df565b602060405180830381865afa158015610c6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c939190611851565b1015610cd4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ccb906118ca565b60405180910390fd5b610d24600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1633600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856111f5565b610d51600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16338361116f565b7f106c5fd4a3e90b144a8f6d9ed4678b0928c3a72a5f7f70397f8ef08bd9eb26163382604051610d829291906118ea565b60405180910390a15050565b610d96611167565b73ffffffffffffffffffffffffffffffffffffffff16610db4610e85565b73ffffffffffffffffffffffffffffffffffffffff1614610e0a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e01906117b0565b60405180910390fd5b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f48e81c05413f5fbd303030b650f8e367d6a771a275ca8435b998767d4c1afe9b81604051610e7a919061159e565b60405180910390a150565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600060035482610ebe91906119a7565b9050919050565b600060025482610ed591906119a7565b9050919050565b610ee4611167565b73ffffffffffffffffffffffffffffffffffffffff16610f02610e85565b73ffffffffffffffffffffffffffffffffffffffff1614610f58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4f906117b0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610fc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fbe90611a5b565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6110b2611167565b73ffffffffffffffffffffffffffffffffffffffff166110d0610e85565b73ffffffffffffffffffffffffffffffffffffffff1614611126576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161111d906117b0565b60405180910390fd5b806003819055507fe54240f1e4baf5bae8b108703dc8237ae3738d4239393a8c839980784c1877c28160405161115c9190611504565b60405180910390a150565b600033905090565b6111f08363a9059cbb60e01b848460405160240161118e9291906118ea565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061127e565b505050565b611278846323b872dd60e01b85858560405160240161121693929190611a7b565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061127e565b50505050565b60006112e0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166113459092919063ffffffff16565b90506000815111156113405780806020019051810190611300919061194b565b61133f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133690611b24565b60405180910390fd5b5b505050565b6060611354848460008561135d565b90509392505050565b6060824710156113a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139990611bb6565b60405180910390fd5b6113ab85611471565b6113ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113e190611c22565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516114139190611cb3565b60006040518083038185875af1925050503d8060008114611450576040519150601f19603f3d011682016040523d82523d6000602084013e611455565b606091505b5091509150611465828286611484565b92505050949350505050565b600080823b905060008111915050919050565b60608315611494578290506114e4565b6000835111156114a75782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114db9190611d1f565b60405180910390fd5b9392505050565b6000819050919050565b6114fe816114eb565b82525050565b600060208201905061151960008301846114f5565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061156461155f61155a8461151f565b61153f565b61151f565b9050919050565b600061157682611549565b9050919050565b60006115888261156b565b9050919050565b6115988161157d565b82525050565b60006020820190506115b3600083018461158f565b92915050565b600080fd5b6115c7816114eb565b81146115d257600080fd5b50565b6000813590506115e4816115be565b92915050565b600060208284031215611600576115ff6115b9565b5b600061160e848285016115d5565b91505092915050565b60006116228261151f565b9050919050565b61163281611617565b82525050565b600060208201905061164d6000830184611629565b92915050565b600061165e8261151f565b9050919050565b600061167082611653565b9050919050565b61168081611665565b811461168b57600080fd5b50565b60008135905061169d81611677565b92915050565b6000602082840312156116b9576116b86115b9565b5b60006116c78482850161168e565b91505092915050565b6116d981611653565b82525050565b60006020820190506116f460008301846116d0565b92915050565b61170381611653565b811461170e57600080fd5b50565b600081359050611720816116fa565b92915050565b60006020828403121561173c5761173b6115b9565b5b600061174a84828501611711565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061179a602083611753565b91506117a582611764565b602082019050919050565b600060208201905081810360008301526117c98161178d565b9050919050565b7f416d6f756e74206973207a65726f000000000000000000000000000000000000600082015250565b6000611806600e83611753565b9150611811826117d0565b602082019050919050565b60006020820190508181036000830152611835816117f9565b9050919050565b60008151905061184b816115be565b92915050565b600060208284031215611867576118666115b9565b5b60006118758482850161183c565b91505092915050565b7f496e73756666696369656e74206163636f756e742062616c616e636500000000600082015250565b60006118b4601c83611753565b91506118bf8261187e565b602082019050919050565b600060208201905081810360008301526118e3816118a7565b9050919050565b60006040820190506118ff60008301856116d0565b61190c60208301846114f5565b9392505050565b60008115159050919050565b61192881611913565b811461193357600080fd5b50565b6000815190506119458161191f565b92915050565b600060208284031215611961576119606115b9565b5b600061196f84828501611936565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006119b2826114eb565b91506119bd836114eb565b92508282026119cb816114eb565b915082820484148315176119e2576119e1611978565b5b5092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611a45602683611753565b9150611a50826119e9565b604082019050919050565b60006020820190508181036000830152611a7481611a38565b9050919050565b6000606082019050611a9060008301866116d0565b611a9d60208301856116d0565b611aaa60408301846114f5565b949350505050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000611b0e602a83611753565b9150611b1982611ab2565b604082019050919050565b60006020820190508181036000830152611b3d81611b01565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000611ba0602683611753565b9150611bab82611b44565b604082019050919050565b60006020820190508181036000830152611bcf81611b93565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000611c0c601d83611753565b9150611c1782611bd6565b602082019050919050565b60006020820190508181036000830152611c3b81611bff565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015611c76578082015181840152602081019050611c5b565b60008484015250505050565b6000611c8d82611c42565b611c978185611c4d565b9350611ca7818560208601611c58565b80840191505092915050565b6000611cbf8284611c82565b915081905092915050565b600081519050919050565b6000601f19601f8301169050919050565b6000611cf182611cca565b611cfb8185611753565b9350611d0b818560208601611c58565b611d1481611cd5565b840191505092915050565b60006020820190508181036000830152611d398184611ce6565b90509291505056fea2646970667358221220a2bb3602ad859cb1f507e4e386d2da57a4c29b1b24e88dcff460858be78eb2ea64736f6c63430008130033";

type DHACrowdSaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DHACrowdSaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DHACrowdSale__factory extends ContractFactory {
  constructor(...args: DHACrowdSaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    bnb_rate: BigNumberish,
    t1_rate: BigNumberish,
    wallet: AddressLike,
    icotoken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      bnb_rate,
      t1_rate,
      wallet,
      icotoken,
      overrides || {}
    );
  }
  override deploy(
    bnb_rate: BigNumberish,
    t1_rate: BigNumberish,
    wallet: AddressLike,
    icotoken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      bnb_rate,
      t1_rate,
      wallet,
      icotoken,
      overrides || {}
    ) as Promise<
      DHACrowdSale & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DHACrowdSale__factory {
    return super.connect(runner) as DHACrowdSale__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DHACrowdSaleInterface {
    return new Interface(_abi) as DHACrowdSaleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DHACrowdSale {
    return new Contract(address, _abi, runner) as unknown as DHACrowdSale;
  }
}