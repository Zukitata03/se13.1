require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.19", settings: {} }, // Compiler for Token.sol
      { version: "0.8.20", settings: {} }, // Compiler for DHB.sol and other files (if applicable)
    ],
  },
  networks: {
    bsctest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [process.env.PRIVATE_KEY]
    },
    eth: {
      url: "https://eth-sepolia.g.alchemy.com/v2/zJJW_aLX9rkL88RgCuiRPHxjR-70jyBz",
      account: [`${process.env.ETH_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey:{ 
    bscscan: process.env.API_KEY,
  etherscan: process.env.API_KEY_ETH}

  }
};