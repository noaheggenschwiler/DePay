const {ethers} = require("hardhat");
require("dotenv").config();
const abi = require("../artifacts/contracts/DePay.sol/DePay.json");

const main = async () => {
    //Provider
    const contractAddress = '0x3d3605eF6B0a182B9Dfbc0574dcD84cb5F679B05'
    const contractABI = abi.abi;
    const {INFURA_ID_KOVAN} = process.env;
    const {PRIVATE_KEY} = process.env;
    let provider = await ethers.getDefaultProvider(INFURA_ID_KOVAN);
    let wallet = new ethers.Wallet(PRIVATE_KEY, provider);
    //let contract = new ethers.Contract(contractAddress, contractABI, wallet);
    let contract = new ethers.Contract(contractAddress, contractABI, provider);
    
    
    
    //const values = await contract.getCurrentPrices();
    //console.log(values);

    //Testing Functionality of Transaction Array
    //await contract.addTransaction(100, "0x3d3605eF6B0a182B9Dfbc0574dcD84cb5F679B05", "0x3d3605eF6B0a182B9Dfbc0574dcD84cb5F679B05");
    
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