/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { T1, T1Interface } from "../../contracts/T1";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
] as const;

const _bytecode =
  "0x60806040526012600a6200001491906200074d565b640ba43b74006200002691906200079e565b6006553480156200003657600080fd5b506040518060400160405280600281526020017f54310000000000000000000000000000000000000000000000000000000000008152506040518060400160405280600281526020017f54310000000000000000000000000000000000000000000000000000000000008152508160039081620000b4919062000a59565b508060049081620000c6919062000a59565b506012600560006101000a81548160ff021916908360ff16021790555050506000620000f7620001c160201b60201c565b905080600560016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350620001aa33600654620001c960201b60201c565b620001bb336200036d60201b60201c565b62000da8565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036200023b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002329062000ba1565b60405180910390fd5b6200024f600083836200052e60201b60201c565b62000266816002546200053360201b90919060201c565b600281905550620002bf816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546200053360201b90919060201c565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000361919062000bd4565b60405180910390a35050565b6200037d620001c160201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620003a36200059660201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1614620003fc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003f39062000c41565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036200046e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004659062000cd9565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600560016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b505050565b600080828462000544919062000cfb565b9050838110156200058c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005839062000d86565b60405180910390fd5b8091505092915050565b6000600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b60018511156200064e57808604811115620006265762000625620005c0565b5b6001851615620006365780820291505b80810290506200064685620005ef565b945062000606565b94509492505050565b6000826200066957600190506200073c565b816200067957600090506200073c565b81600181146200069257600281146200069d57620006d3565b60019150506200073c565b60ff841115620006b257620006b1620005c0565b5b8360020a915084821115620006cc57620006cb620005c0565b5b506200073c565b5060208310610133831016604e8410600b84101617156200070d5782820a905083811115620007075762000706620005c0565b5b6200073c565b6200071c8484846001620005fc565b92509050818404811115620007365762000735620005c0565b5b81810290505b9392505050565b6000819050919050565b60006200075a8262000743565b9150620007678362000743565b9250620007967fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848462000657565b905092915050565b6000620007ab8262000743565b9150620007b88362000743565b9250828202620007c88162000743565b91508282048414831517620007e257620007e1620005c0565b5b5092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200086b57607f821691505b60208210810362000881576200088062000823565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620008eb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620008ac565b620008f78683620008ac565b95508019841693508086168417925050509392505050565b6000819050919050565b60006200093a620009346200092e8462000743565b6200090f565b62000743565b9050919050565b6000819050919050565b620009568362000919565b6200096e620009658262000941565b848454620008b9565b825550505050565b600090565b6200098562000976565b620009928184846200094b565b505050565b5b81811015620009ba57620009ae6000826200097b565b60018101905062000998565b5050565b601f82111562000a0957620009d38162000887565b620009de846200089c565b81016020851015620009ee578190505b62000a06620009fd856200089c565b83018262000997565b50505b505050565b600082821c905092915050565b600062000a2e6000198460080262000a0e565b1980831691505092915050565b600062000a49838362000a1b565b9150826002028217905092915050565b62000a6482620007e9565b67ffffffffffffffff81111562000a805762000a7f620007f4565b5b62000a8c825462000852565b62000a99828285620009be565b600060209050601f83116001811462000ad1576000841562000abc578287015190505b62000ac8858262000a3b565b86555062000b38565b601f19841662000ae18662000887565b60005b8281101562000b0b5784890151825560018201915060208501945060208101905062000ae4565b8683101562000b2b578489015162000b27601f89168262000a1b565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000b89601f8362000b40565b915062000b968262000b51565b602082019050919050565b6000602082019050818103600083015262000bbc8162000b7a565b9050919050565b62000bce8162000743565b82525050565b600060208201905062000beb600083018462000bc3565b92915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600062000c2960208362000b40565b915062000c368262000bf1565b602082019050919050565b6000602082019050818103600083015262000c5c8162000c1a565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600062000cc160268362000b40565b915062000cce8262000c63565b604082019050919050565b6000602082019050818103600083015262000cf48162000cb2565b9050919050565b600062000d088262000743565b915062000d158362000743565b925082820190508082111562000d305762000d2f620005c0565b5b92915050565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000600082015250565b600062000d6e601b8362000b40565b915062000d7b8262000d36565b602082019050919050565b6000602082019050818103600083015262000da18162000d5f565b9050919050565b611fe78062000db86000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a257806395d89b411161007157806395d89b41146102a6578063a457c2d7146102c4578063a9059cbb146102f4578063dd62ed3e14610324578063f2fde38b146103545761010b565b806370a0823114610232578063715018a61461026257806379cc67901461026c5780638da5cb5b146102885761010b565b8063313ce567116100de578063313ce567146101ac57806339509351146101ca57806340c10f19146101fa57806342966c68146102165761010b565b806306fdde0314610110578063095ea7b31461012e57806318160ddd1461015e57806323b872dd1461017c575b600080fd5b610118610370565b60405161012591906115d0565b60405180910390f35b6101486004803603810190610143919061168b565b610402565b60405161015591906116e6565b60405180910390f35b610166610420565b6040516101739190611710565b60405180910390f35b6101966004803603810190610191919061172b565b61042a565b6040516101a391906116e6565b60405180910390f35b6101b4610503565b6040516101c1919061179a565b60405180910390f35b6101e460048036038101906101df919061168b565b61051a565b6040516101f191906116e6565b60405180910390f35b610214600480360381019061020f919061168b565b6105cd565b005b610230600480360381019061022b91906117b5565b6106ae565b005b61024c600480360381019061024791906117e2565b6106c2565b6040516102599190611710565b60405180910390f35b61026a61070a565b005b6102866004803603810190610281919061168b565b610847565b005b6102906108a9565b60405161029d919061181e565b60405180910390f35b6102ae6108d3565b6040516102bb91906115d0565b60405180910390f35b6102de60048036038101906102d9919061168b565b610965565b6040516102eb91906116e6565b60405180910390f35b61030e6004803603810190610309919061168b565b610a32565b60405161031b91906116e6565b60405180910390f35b61033e60048036038101906103399190611839565b610a50565b60405161034b9190611710565b60405180910390f35b61036e600480360381019061036991906117e2565b610ad7565b005b60606003805461037f906118a8565b80601f01602080910402602001604051908101604052809291908181526020018280546103ab906118a8565b80156103f85780601f106103cd576101008083540402835291602001916103f8565b820191906000526020600020905b8154815290600101906020018083116103db57829003601f168201915b5050505050905090565b600061041661040f610c82565b8484610c8a565b6001905092915050565b6000600254905090565b6000610437848484610e53565b6104f884610443610c82565b6104f385604051806060016040528060288152602001611f4160289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006104a9610c82565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110e69092919063ffffffff16565b610c8a565b600190509392505050565b6000600560009054906101000a900460ff16905090565b60006105c3610527610c82565b846105be8560016000610538610c82565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461114490919063ffffffff16565b610c8a565b6001905092915050565b6105d5610c82565b73ffffffffffffffffffffffffffffffffffffffff166105f36108a9565b73ffffffffffffffffffffffffffffffffffffffff1614610649576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064090611925565b60405180910390fd5b60065481610655610420565b61065f9190611974565b11156106a0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610697906119f4565b60405180910390fd5b6106aa82826111a2565b5050565b6106bf6106b9610c82565b82611335565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610712610c82565b73ffffffffffffffffffffffffffffffffffffffff166107306108a9565b73ffffffffffffffffffffffffffffffffffffffff1614610786576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077d90611925565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600560016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600061088682604051806060016040528060248152602001611f696024913961087786610872610c82565b610a50565b6110e69092919063ffffffff16565b905061089a83610894610c82565b83610c8a565b6108a48383611335565b505050565b6000600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546108e2906118a8565b80601f016020809104026020016040519081016040528092919081815260200182805461090e906118a8565b801561095b5780601f106109305761010080835404028352916020019161095b565b820191906000526020600020905b81548152906001019060200180831161093e57829003601f168201915b5050505050905090565b6000610a28610972610c82565b84610a2385604051806060016040528060258152602001611f8d602591396001600061099c610c82565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110e69092919063ffffffff16565b610c8a565b6001905092915050565b6000610a46610a3f610c82565b8484610e53565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610adf610c82565b73ffffffffffffffffffffffffffffffffffffffff16610afd6108a9565b73ffffffffffffffffffffffffffffffffffffffff1614610b53576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4a90611925565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610bc2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb990611a86565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600560016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610cf9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf090611b18565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d68576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d5f90611baa565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610e469190611710565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ec2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb990611c3c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2890611cce565b60405180910390fd5b610f3c8383836114e2565b610fa781604051806060016040528060268152602001611f1b602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110e69092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061103a816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461114490919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516110d99190611710565b60405180910390a3505050565b600083831115829061112e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161112591906115d0565b60405180910390fd5b50828461113b9190611cee565b90509392505050565b60008082846111539190611974565b905083811015611198576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118f90611d6e565b60405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611211576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120890611dda565b60405180910390fd5b61121d600083836114e2565b6112328160025461114490919063ffffffff16565b600281905550611289816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461114490919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516113299190611710565b60405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036113a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139b90611e6c565b60405180910390fd5b6113b0826000836114e2565b61141b81604051806060016040528060228152602001611ef9602291396000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110e69092919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611472816002546114e790919063ffffffff16565b600281905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516114d69190611710565b60405180910390a35050565b505050565b60008282111561152c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161152390611ed8565b60405180910390fd5b81836115389190611cee565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561157a57808201518184015260208101905061155f565b60008484015250505050565b6000601f19601f8301169050919050565b60006115a282611540565b6115ac818561154b565b93506115bc81856020860161155c565b6115c581611586565b840191505092915050565b600060208201905081810360008301526115ea8184611597565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611622826115f7565b9050919050565b61163281611617565b811461163d57600080fd5b50565b60008135905061164f81611629565b92915050565b6000819050919050565b61166881611655565b811461167357600080fd5b50565b6000813590506116858161165f565b92915050565b600080604083850312156116a2576116a16115f2565b5b60006116b085828601611640565b92505060206116c185828601611676565b9150509250929050565b60008115159050919050565b6116e0816116cb565b82525050565b60006020820190506116fb60008301846116d7565b92915050565b61170a81611655565b82525050565b60006020820190506117256000830184611701565b92915050565b600080600060608486031215611744576117436115f2565b5b600061175286828701611640565b935050602061176386828701611640565b925050604061177486828701611676565b9150509250925092565b600060ff82169050919050565b6117948161177e565b82525050565b60006020820190506117af600083018461178b565b92915050565b6000602082840312156117cb576117ca6115f2565b5b60006117d984828501611676565b91505092915050565b6000602082840312156117f8576117f76115f2565b5b600061180684828501611640565b91505092915050565b61181881611617565b82525050565b6000602082019050611833600083018461180f565b92915050565b600080604083850312156118505761184f6115f2565b5b600061185e85828601611640565b925050602061186f85828601611640565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806118c057607f821691505b6020821081036118d3576118d2611879565b5b50919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061190f60208361154b565b915061191a826118d9565b602082019050919050565b6000602082019050818103600083015261193e81611902565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061197f82611655565b915061198a83611655565b92508282019050808211156119a2576119a1611945565b5b92915050565b7f5431546f6b656e3a206361702065786365656465640000000000000000000000600082015250565b60006119de60158361154b565b91506119e9826119a8565b602082019050919050565b60006020820190508181036000830152611a0d816119d1565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611a7060268361154b565b9150611a7b82611a14565b604082019050919050565b60006020820190508181036000830152611a9f81611a63565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611b0260248361154b565b9150611b0d82611aa6565b604082019050919050565b60006020820190508181036000830152611b3181611af5565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611b9460228361154b565b9150611b9f82611b38565b604082019050919050565b60006020820190508181036000830152611bc381611b87565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611c2660258361154b565b9150611c3182611bca565b604082019050919050565b60006020820190508181036000830152611c5581611c19565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611cb860238361154b565b9150611cc382611c5c565b604082019050919050565b60006020820190508181036000830152611ce781611cab565b9050919050565b6000611cf982611655565b9150611d0483611655565b9250828203905081811115611d1c57611d1b611945565b5b92915050565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000600082015250565b6000611d58601b8361154b565b9150611d6382611d22565b602082019050919050565b60006020820190508181036000830152611d8781611d4b565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611dc4601f8361154b565b9150611dcf82611d8e565b602082019050919050565b60006020820190508181036000830152611df381611db7565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611e5660218361154b565b9150611e6182611dfa565b604082019050919050565b60006020820190508181036000830152611e8581611e49565b9050919050565b7f536166654d6174683a207375627472616374696f6e206f766572666c6f770000600082015250565b6000611ec2601e8361154b565b9150611ecd82611e8c565b602082019050919050565b60006020820190508181036000830152611ef181611eb5565b905091905056fe45524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122002c9c99a4245391c29ff0d067e86431f17cb6dbac50a11a617b8e18d677d074564736f6c63430008130033";

type T1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: T1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class T1__factory extends ContractFactory {
  constructor(...args: T1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      T1 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): T1__factory {
    return super.connect(runner) as T1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): T1Interface {
    return new Interface(_abi) as T1Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): T1 {
    return new Contract(address, _abi, runner) as unknown as T1;
  }
}
