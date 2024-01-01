import { ethers } from "ethers";
import { BaseInterface, Erc20 } from "./interfaces";
import { getT1Abi } from "./utils/getAbis";
import { getT1Address } from "./utils/getAddress";

export default class UsdtContract extends Erc20 {
  constructor(provider: ethers.providers.Web3Provider) {
    super(provider, getT1Address(), getT1Abi());
  }
}