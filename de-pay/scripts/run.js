const { hexStripZeros } = require("ethers/lib/utils")
const { ethers } = require("hardhat")

const main = async() => {
    const dePayContractFactory = await hre.ethers.getContractFactory("DePay");
    const dePayContract = await dePayContractFactory.deploy();
    await dePayContract.deployed();
    console.log("DePay Deployed To : ", dePayContract.address);

    //Quick Test
    /** 
    let txn = await dePayContract.addTransaction(100, "0x3d3605eF6B0a182B9Dfbc0574dcD84cb5F679B05", "0x3d3605eF6B0a182B9Dfbc0574dcD84cb5F679B05");
    //await txn.wait();
    const values = await dePayContract.arrayCounter();
    console.log(values);
    */
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
