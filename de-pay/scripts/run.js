const { hexStripZeros } = require("ethers/lib/utils")
const { ethers } = require("hardhat")

const main = async() => {
    const dePayContractFactory = await hre.ethers.getContractFactory("DePay");
    const dePayContract = await dePayContractFactory.deploy();
    await dePayContract.deployed();
    console.log("DePay Deployed To : ", dePayContract.address);
}

const runMain = async() => {
    try{
        await main();
        process.exit();
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();
