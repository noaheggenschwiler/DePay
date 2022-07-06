const main = async() => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contract with account: ", deployer.address);
    console.log("Account Balance: ", accountBalance.toString());

    const dePayContractFactory = await hre.ethers.getContractFactory("DePay");
    const dePayContract = await dePayContractFactory.deploy();
    await dePayContract.deployed();

    console.log("DePay Address: ", dePayContract.address);
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