require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.19" }, // Compiler for Token.sol
      { version: "0.8.20" }  // Compiler for DHB.sol and other files (if applicable)
    ],
    overrides: {
      "contracts/Token.sol": {
        version: "0.8.19",
        settings: {}
      }
    }
  },
  networks: {
    bsctest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY
  }
};