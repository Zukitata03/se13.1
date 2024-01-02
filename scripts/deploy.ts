import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
    await Config.initConfig();
    const network = hardhatArguments.network ? hardhatArguments.network : 'dev';
    const [deployer] = await ethers.getSigners();
    console.log('deploy from address: ', deployer.address);

    // console.log("Deploying contracts with the account:", deployer.address);
    // const dha = await ethers.deployContract("DHAToken");
    // console.log("DHA address:", await dha.getAddress());
    // Config.setConfig(network + '.DHA', await dha.getAddress());

    // console.log("Deploying contracts with the account:", deployer.address);
    // const t1 = await ethers.deployContract("T1");
    // console.log("T1 address:", await t1.getAddress());
    // Config.setConfig(network + '.T1', await t1.getAddress());

    const Ico = await ethers.getContractFactory("DHACrowdSale");
    const ico = await Ico.deploy(1000,100,'0xCb9c20bD46cb5A0959b4aCD0bF26765184AB6F08', '0xc1A73647835A48A3AedEc81C89e6EDeC40954f30');
    console.log('ICO address: ', ico.getAddress());
    Config.setConfig(network + '.ico', await ico.getAddress());

    await Config.updateConfig();
}

main().then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });