const {ethers} = require("hardhat");
require("dotenv").config();
const abi = require("../artifacts/contracts/DePay.sol/DePay.json");

const main = async () => {
    //Provider
    const contractAddress = '0x29F3Cd5759B670bA4f8784070900AF2e458520f2'
    const contractABI = abi.abi;
    const {INFURA_ID_KOVAN} = process.env;
    let provider = await ethers.getDefaultProvider(INFURA_ID_KOVAN);
    let contract = new ethers.Contract(contractAddress, contractABI, provider);
    const values = await contract.getCurrentPrices();
    console.log(values);

}

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();